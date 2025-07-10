import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import "../../../components/font";

async function getPhotos() {
  const photosDirectory = path.join(
    process.cwd(),
    "public",
    "Photography",
    "2",
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

export default async function PhotoPage() {
  const photos = await getPhotos();

  return (
    <div>
      <div className="grid">
        <Link href="/pages/photo">
          <button className="--font-poppins antialiased text-2xl bg-purple-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 active:bg-purple-700 w-full">
            📷 Photography
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {photos.map((photo) => (
          <div
            key={photo}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <a
              href={`/Photography/2/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/Photography/2/${photo}`}
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
