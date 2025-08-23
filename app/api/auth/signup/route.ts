import { NextRequest, NextResponse } from 'next/server';
import {connectToDatabase} from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, generateTokens, generateVerificationToken } from '@/lib/auth';
import { validateSignupData, SignupData } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body: SignupData = await request.json();

    // Validate input data
    const validationErrors = validateSignupData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: validationErrors 
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: body.email.toLowerCase().trim() });
    if (existingUser) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'User already exists with this email',
          errors: [{ field: 'email', message: 'An account with this email already exists' }]
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(body.password);
    const verificationToken = generateVerificationToken();

    // Create user
    const newUser = new User({
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.toLowerCase().trim(),
      password: hashedPassword,
      subscribeNewsletter: body.subscribeNewsletter || false,
      verificationToken,
      isVerified: false // Set to true if you don't want email verification
    });

    await newUser.save();

    // Generate JWT tokens
    const { accessToken, refreshToken } = generateTokens({
      userId: newUser._id.toString(),
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      isVerified: newUser.isVerified,
    });

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        // fullName: newUser.fullName,
        subscribeNewsletter: newUser.subscribeNewsletter,
        isVerified: newUser.isVerified,
        createdAt: newUser.createdAt,
      },
      token: accessToken,
    }, { status: 201 });

    // Set HTTP-only cookies
    response.cookies.set('auth-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    response.cookies.set('refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Signup error:', error);
    
    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email already exists',
          errors: [{ field: 'email', message: 'An account with this email already exists' }]
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
