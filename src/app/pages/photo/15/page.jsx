"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../../../components/font";
import PasswordProtect from "../../../components/PasswordProtect.jsx";

// ⭐️ Change this number for every new directory created (e.g., "16", "17", etc.)
const CURRENT_DIR_KEY = "15";
const JSON_URL = "/photo-lists.json";

export default function PhotoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Check Authentication Cookie on Load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/check-auth");
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  // 2. Fetch Photo List once Authenticated
  useEffect(() => {
    if (isAuthenticated) {
      async function fetchPhotoList() {
        try {
          const response = await fetch(JSON_URL);
          if (!response.ok) throw new Error("Failed to fetch photo list");
          const allPhotoLists = await response.json();
          setPhotos(allPhotoLists[CURRENT_DIR_KEY] || []);
        } catch (err) {
          setError("Could not load photo list. Ensure prebuild script ran.");
        } finally {
          setLoading(false);
        }
      }
      fetchPhotoList();
    }
  }, [isAuthenticated]);

  if (authLoading)
    return <div className="p-4 text-center text-white">Verifying...</div>;

  // 3. Show Password Screen if not logged in
  if (!isAuthenticated) {
    return (
      <PasswordProtect onPasswordVerified={() => setIsAuthenticated(true)} />
    );
  }

  return (
    <div>
      <div className="grid">
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-pink-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200 active:bg-pink-700 w-full">
            📷 Photography
          </button>
        </Link>
      </div>

      {loading && (
        <div className="p-4 text-center text-white">Loading photos...</div>
      )}
      {error && <div className="p-4 text-center text-red-500">{error}</div>}

      {photos && (
        <div className="grid 3xl:gap-3 2xl:gap-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1.5 px-1">
          {photos.map((baseName) => (
            <div
              key={baseName}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <a
                href={`/Photography/${CURRENT_DIR_KEY}/${baseName}.JPG`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  // Logic for display: Uses avif thumbnails for performance
                  src={`/Photography/${CURRENT_DIR_KEY}/thumbs/${baseName}.avif`}
                  alt={baseName}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-200"
                  unoptimized={true}
                  decoding="async"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
