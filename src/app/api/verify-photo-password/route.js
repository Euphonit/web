import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();

    // TODO: Store this securely as an environment variable (e.g., process.env.PHOTO_PAGE_PASSWORD)
    const correctPassword = "testpassword";

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('photoAuth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure in production
        path: '/',
        sameSite: 'Strict',
        maxAge: 3600, // 1 hour
      });
      return response;
    } else {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }
  } catch (error) {
    console.error('Error in verify-photo-password API:', error);
    return NextResponse.json({ success: false, message: "An unexpected error occurred." }, { status: 500 });
  }
}
