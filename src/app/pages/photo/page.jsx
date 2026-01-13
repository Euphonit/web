// page.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../components/font";
import Sidebar from "../../components/sidebar.jsx";

const CURRENT_DIR_KEY = "best";
const JSON_URL = "/photo-lists.json";

export default function PhotoHome() {
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState(null);
  const [isPhotosLoading, setIsPhotosLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Stop propagation ensures clicking the button doesn't trigger "handleClickOutside" immediately
  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    async function fetchPhotoList() {
      setIsPhotosLoading(true);
      setPhotoError(null);
      try {
        const response = await fetch(JSON_URL);
        if (!response.ok)
          throw new Error(`Failed to fetch: ${response.statusText}`);
        const allPhotoLists = await response.json();
        setPhotos(allPhotoLists[CURRENT_DIR_KEY] || []);
      } catch (err) {
        setPhotoError("Could not load photo list.");
      } finally {
        setIsPhotosLoading(false);
      }
    }
    fetchPhotoList();
  }, []);

  return (
    <div>
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen} />

      <div className="flex flex-row pt-1 px-1 py-1">
        <button
          onClick={toggleSidebar}
          className="sm:w-62 shrink flex-none mb-1 antialiased text-2xl bg-blue-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 active:bg-blue-700"
        >
          🔑 Image Archive
        </button>
        <Link href="/" className="flex-grow ml-1 mb-1">
          <button className="w-full h-full antialiased text-2xl bg-orange-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200 active:bg-orange-700">
            🏠 Home
          </button>
        </Link>
      </div>

      {!isPhotosLoading && !photoError && (
        <div>
          <p className="antialiased text-5xl text-white text-center mb-1">
            <strong>Best of Photos:</strong>
          </p>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1.5 px-1">
            {photos.map((baseName) => (
              <div
                key={baseName}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <a
                  href={`/Photography/${CURRENT_DIR_KEY}/${baseName}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/Photography/${CURRENT_DIR_KEY}/thumbs/${baseName}.avif`}
                    alt={baseName}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
