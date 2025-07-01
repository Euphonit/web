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
    "4",
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
      <p className="--font-poppins antialiased text-lg bg-orange-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
        <Link href="/pages/photo">Gallery Home</Link>
      </p>

      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo} className="relative aspect-square overflow-hidden">
            <a
              href={`/Photography/4/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Added link */}
              <Image
                src={`/Photography/4/${photo}`}
                alt={photo}
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-200"
              />
            </a>{" "}
            {/* Added link */}
          </div>
        ))}
      </div>
    </div>
  );
}
