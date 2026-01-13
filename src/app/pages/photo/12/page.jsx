"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../../../components/font";
import PasswordProtect from "../../../components/PasswordProtect.jsx";

// ⭐️ Update this number for each specific page (9, 10, 11, 12, 13, 14, or 15)
const CURRENT_DIR_KEY = "12";
const JSON_URL = "/photo-lists.json";

export default function PhotoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Check Authentication
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

  // 2. Fetch Photos (only if authenticated)
  useEffect(() => {
    if (isAuthenticated) {
      async function fetchPhotoList() {
        try {
          const response = await fetch(JSON_URL);
          if (!response.ok) throw new Error("Failed to fetch photo list");
          const allPhotoLists = await response.json();
          setPhotos(allPhotoLists[CURRENT_DIR_KEY] || []);
        } catch (err) {
          setError("Could not load photo list. Check prebuild script.");
        } finally {
          setLoading(false);
        }
      }
      fetchPhotoList();
    }
  }, [isAuthenticated]);

  if (authLoading)
    return <div className="p-4 text-center text-white">Loading Auth...</div>;

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
          {photos.map((photo) => (
            <div
              key={photo}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <a
                href={
                  CURRENT_DIR_KEY === "15"
                    ? `/Photography/15/${photo}.JPG`
                    : `/Photography/${CURRENT_DIR_KEY}/${photo}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  // Page 15 uses thumbs, others use direct path based on your snippets
                  src={
                    CURRENT_DIR_KEY === "15"
                      ? `/Photography/15/thumbs/${photo}.avif`
                      : `/Photography/${CURRENT_DIR_KEY}/${photo}`
                  }
                  alt={photo}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
