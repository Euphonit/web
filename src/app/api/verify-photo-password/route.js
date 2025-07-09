import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    const correctPassword = process.env.WEBSITE_PASSWORD;

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("photoAuth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", // Use secure in production
        path: "/",
        sameSite: "Strict",
        maxAge: 604800, // 1 week
      });
      return response;
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Error in verify-photo-password API:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
