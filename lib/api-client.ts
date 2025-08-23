// lib/api-client.ts
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  user?: T;
  token?: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscribeNewsletter: boolean;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/api${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Important for cookies
      ...options,
    };

    // Add auth token if available (for authorization header)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth-token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      // Store token in localStorage if provided
      if (data.token && typeof window !== 'undefined') {
        localStorage.setItem('auth-token', data.token);
      }
      
      return {
        success: data.success,
        message: data.message,
        user: data.user,
        token: data.token,
        errors: data.errors,
      };
    } catch (error) {
      console.error('API Client Error:', error);
      return {
        success: false,
        message: 'Network error occurred',
        errors: [{ field: 'network', message: 'Failed to connect to server' }],
      };
    }
  }

  async signup(data: SignupData): Promise<ApiResponse> {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data: LoginData): Promise<ApiResponse> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async logout(): Promise<ApiResponse> {
    const response = await this.request('/auth/logout', {
      method: 'POST',
    });
    
    // Clear token from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token');
    }
    
    return response;
  }

  async getCurrentUser(): Promise<ApiResponse> {
    return this.request('/auth/me');
  }

  async refreshToken(): Promise<ApiResponse> {
    return this.request('/auth/refresh', {
      method: 'POST',
    });
  }

  // Helper method to check if user is authenticated
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('auth-token');
  }

  // Helper method to clear authentication
  clearAuth(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth-token');
    }
  }
}

export const apiClient = new ApiClient();