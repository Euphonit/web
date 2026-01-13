"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../components/font";
import PasswordProtect from "../../../components/PasswordProtect.jsx";

const CURRENT_DIR_KEY = "6";
const JSON_URL = "/photo-lists.json";

export default function PhotoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/check-auth"); //
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      async function fetchPhotoList() {
        try {
          const response = await fetch(JSON_URL);
          const allPhotoLists = await response.json();
          setPhotos(allPhotoLists[CURRENT_DIR_KEY] || []);
        } catch (err) {
          console.error("Error fetching photos:", err);
        }
      }
      fetchPhotoList();
    }
  }, [isAuthenticated]);

  if (isLoading)
    return <p className="text-white text-center mt-10">Loading...</p>;

  if (!isAuthenticated) {
    return (
      <PasswordProtect onPasswordVerified={() => setIsAuthenticated(true)} />
    ); //
  }

  return (
    <div>
      <div className="grid">
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-zinc-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors duration-200 active:bg-zinc-700 w-full">
            📷 Photography
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-1.5 px-1">
        {photos.map((photo) => (
          <div
            key={photo}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <a
              href={`/Photography/6/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/Photography/6/${photo}`}
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
