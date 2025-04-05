import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import "../../components/font";

async function getPhotos() {
  const photosDirectory = path.join(
    process.cwd(),
    "public",
    "Photography",
    "best",
  );
  try {
    const filenames = await fs.readdir(photosDirectory);
    return filenames.filter((filename) =>
      /\.(JPG|jpg|webp|png|gif)$/i.test(filename),
    );
  } catch (error) {
    console.error("Error reading photos directory:", error);
    return [];
  }
}

export default async function PhotoHome() {
  const photos = await getPhotos();

  return (
    <div>
      <p className="--font-poppins antialiased text-lg bg-orange-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
        <Link href="/">Home</Link>
      </p>
      <p className="--font-poppins antialiased text-lg bg-purple-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 active:bg-purple-700">
        <Link href="/pages/photo/3">Batch 3</Link>
      </p>
      <p className="--font-poppins antialiased text-lg bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700">
        <Link href="/pages/photo/2">Batch 2</Link>
      </p>
      <p className="--font-poppins antialiased text-lg bg-green-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700">
        <Link href="/pages/photo/1">Batch 1</Link>
      </p>
      <p className="--font-poppins antialiased text-6xl text-white">
        Best of Photos (Click on them for better quality):
      </p>

      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo} className="relative aspect-square overflow-hidden">
            <a
              href={`/Photography/best/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/Photography/best/${photo}`}
                alt={photo}
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
