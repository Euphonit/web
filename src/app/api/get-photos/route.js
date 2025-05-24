import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("photoAuth");

    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const photosDirectory = path.join(
      process.cwd(),
      "public",
      "Photography",
      "best",
    );
    let filenames = await fs.readdir(photosDirectory);
    filenames = filenames.filter((filename) =>
      /\.(JPG|jpg|webp|png|gif)$/i.test(filename),
    );

    return NextResponse.json({ photos: filenames });
  } catch (error) {
    console.error("Error in get-photos API:", error);
    // Check if the error is due to directory not found
    if (error.code === "ENOENT") {
      return NextResponse.json(
        { error: "Photos directory not found." },
        { status: 404 },
      );
    }
    return NextResponse.json(
      { error: "Error reading photos directory" },
      { status: 500 },
    );
  }
}
