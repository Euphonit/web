// src/app/pages/photo/10/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../../../components/font";

// NOTE: Hardcode the directory key since this page is NOT a dynamic route ([dirId])
const CURRENT_DIR_KEY = "10";
// Path to the file created by the prebuild script, accessible via URL
const JSON_URL = "/photo-lists.json";

function PhotoGallery() {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotoList() {
      try {
        // Fetch the list of all photo directories from the public URL
        const response = await fetch(JSON_URL);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${JSON_URL}: ${response.statusText}`,
          );
        }
        const allPhotoLists = await response.json();

        // ⭐️ Access the specific array using the key (e.g., "10")
        const currentPhotos = allPhotoLists[CURRENT_DIR_KEY] || [];

        setPhotos(currentPhotos);
      } catch (err) {
        console.error("Error fetching photo list:", err);
        // Display a more helpful error message
        setError(
          "Could not load photo list. Did the 'prebuild' script run successfully?",
        );
      } finally {
        setLoading(false);
      }
    }
    fetchPhotoList();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading photo list...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">Error: {error}</div>;
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="p-4 text-center">
        No photos found for directory {CURRENT_DIR_KEY}.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {photos.map((photo) => (
        <div
          key={photo}
          className="relative aspect-square overflow-hidden rounded-2xl"
        >
          <a
            // Image source path uses the correct directory key
            href={`/Photography/${CURRENT_DIR_KEY}/${photo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/Photography/${CURRENT_DIR_KEY}/${photo}`}
              alt={photo}
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default function PhotoPage() {
  return (
    <div>
      {/* The Link/Button remains static */}
      <div className="grid">
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-pink-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200 active:bg-pink-700 w-full">
            📷 Photography
          </button>
        </Link>
      </div>
      {/* The PhotoGallery handles the fetching and rendering */}
      <PhotoGallery />
    </div>
  );
}
