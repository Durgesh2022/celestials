import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Course from '@/models/Course';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const course = await Course.findById(params.id);
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });

    return NextResponse.json({ course });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
