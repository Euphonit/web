"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../components/font";
import PasswordProtect from "../../../components/PasswordProtect.jsx";

export default function PhotoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  // 1. Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/check-auth"); // Uses your route-auth.js logic
        const data = await res.json();
        if (data.isAuthenticated) {
          setIsAuthenticated(true);
          fetchPhotos(); // Load photos if already logged in
        }
      } catch (err) {
        console.error("Auth check failed", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  // 2. Fetch photo list (Logic adapted for Client side)
  const fetchPhotos = async () => {
    try {
      // Note: Since this is now client-side, we fetch from a JSON list
      // or an API. If you have the 'photo-lists.json' from your other page, use that:
      const response = await fetch("/photo-lists.json");
      const allPhotoLists = await response.json();
      setPhotos(allPhotoLists["1"] || []);
    } catch (err) {
      console.error("Error fetching photos:", err);
    }
  };

  const handlePasswordVerified = () => {
    setIsAuthenticated(true);
    fetchPhotos();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  // 3. Show Password Screen if not authorized
  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

  // 4. Main Protected Content
  return (
    <div>
      <div className="grid">
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-green-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            📷 Photography
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-1.5 p-1">
        {photos.map((photo) => (
          <div
            key={photo}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <a
              href={`/Photography/1/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/Photography/1/${photo}`}
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
