"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../components/font";
import PasswordProtect from "../../components/PasswordProtect.jsx";
import Sidebar from "../../components/sidebar.jsx";

// NOTE: Hardcode the directory key based on the original path: /Photography/best/
const CURRENT_DIR_KEY = "best";
// Path to the file created by the prebuild script, accessible via URL
const JSON_URL = "/photo-lists.json";

export default function PhotoHome() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState(null);
  const [isPhotosLoading, setIsPhotosLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // --- 1. Initial Authentication Check (UNCHANGED) ---
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/check-auth");
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
        } else {
          console.error(
            "Auth check failed:",
            response.status,
            response.statusText,
          );
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error fetching auth status:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // --- 2. Photo Fetching Logic (UNCHANGED) ---
  useEffect(() => {
    if (isAuthenticated) {
      setIsPhotosLoading(true);
      setPhotoError(null);
      setPhotos([]);

      async function fetchPhotoList() {
        try {
          const response = await fetch(JSON_URL);
          if (!response.ok) {
            throw new Error(
              `Failed to fetch ${JSON_URL}: ${response.statusText}`,
            );
          }
          const allPhotoLists = await response.json();

          const currentPhotos = allPhotoLists[CURRENT_DIR_KEY] || [];

          setPhotos(currentPhotos);
        } catch (err) {
          console.error("Error fetching photo list:", err);
          setPhotoError(
            "Could not load photo list. Did the 'prebuild' script run successfully?",
          );
        } finally {
          setIsPhotosLoading(false);
        }
      }

      fetchPhotoList();
    }
  }, [isAuthenticated]);

  const handlePasswordVerified = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <p className="text-xl text-gray-300 flex justify-center items-center min-h-[calc(100vh-200px)]">
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

  // --- 3. Main Authenticated Render (FIXED Path Generation) ---
  return (
    <div>
      <Sidebar onClose={toggleSidebar} isOpen={isSidebarOpen} />
      <div className="flex flex-row pt-1 px-1 py-1">
        <button
          onClick={toggleSidebar}
          className={`transition-all duration-300 ease-in ${isSidebarOpen ? "animate-none" : "animate-none"} sm:w-62 shrink flex-none mb-1 antialiased text-2xl bg-blue-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700`}
        >
          Image Archive
        </button>
        <Link href="/" className="flex-grow ml-1 mb-1">
          <button className="w-full h-full antialiased text-2xl bg-orange-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
            🏠 Home
          </button>
        </Link>
      </div>

      {isPhotosLoading && (
        <p className="text-xl text-gray-300 mt-8 text-center">
          Loading photos...
        </p>
      )}
      {photoError && (
        <p className="text-red-500 mt-8 text-center text-lg">
          Error: {photoError}
        </p>
      )}

      {!isPhotosLoading && !photoError && (
        <div>
          <p className="antialiased text-5xl text-white text-center mb-1">
            <strong>Best of Photos:</strong>
          </p>
          <div className="grid 3xl:gap-3 2xl:gap-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1.5 px-1">
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
                    className="hover:scale-105 transition-transform duration-200 will-change-transform transform:[translateZ(0)]"
                    decoding="async"
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
