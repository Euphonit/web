"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import "../../components/font";
import PasswordProtect from '../../components/PasswordProtect.js';
import Cookies from 'js-cookie';

export default function PhotoHome() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For initial auth check
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState(null);
  const [isPhotosLoading, setIsPhotosLoading] = useState(false); // For photos fetch

  useEffect(() => {
    const authCookie = Cookies.get('photoAuth');
    if (authCookie === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setIsPhotosLoading(true);
      setPhotoError(null);
      setPhotos([]); // Clear previous photos

      fetch('/api/get-photos')
        .then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            setPhotos(data.photos || []);
          } else {
            let errorMessage = "Failed to load photos.";
            try {
              const data = await res.json();
              if (data && data.error) {
                errorMessage = data.error;
              }
            } catch (e) {
              // Ignore parsing error, use default message
            }
            setPhotoError(errorMessage);
            if (res.status === 401) {
              // Potentially de-authenticate if token is invalid
              // This might cause a loop if the cookie is still there and invalid
              // For now, just show error. A robust solution might involve clearing the cookie.
              console.warn("Photo API returned 401, consider re-authentication flow.");
            }
          }
        })
        .catch((err) => {
          console.error("Error fetching photos:", err);
          setPhotoError("An unexpected error occurred while fetching photos.");
        })
        .finally(() => {
          setIsPhotosLoading(false);
        });
    }
  }, [isAuthenticated]);

  const handlePasswordVerified = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

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

      {isPhotosLoading && <p className="--font-poppins antialiased text-xl text-white">Loading photos...</p>}
      {photoError && <p className="--font-poppins antialiased text-xl text-red-500">Error: {photoError}</p>}
      
      {!isPhotosLoading && !photoError && (
        <>
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
        </>
      )}
    </div>
  );
}
