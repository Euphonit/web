import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request) {
  try {
    const cookieStore = cookies();
    const authCookie = cookieStore.get('photoAuth');

    if (authCookie && authCookie.value === 'true') {
      return NextResponse.json({ isAuthenticated: true });
    } else {
      return NextResponse.json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Error in check-auth API:', error);
    return NextResponse.json({ isAuthenticated: false }, { status: 500 });
  }
}
