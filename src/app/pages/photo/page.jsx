"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../components/font";
import PasswordProtect from "../../components/PasswordProtect.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function PhotoHome() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For initial auth check
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState(null);
  const [isPhotosLoading, setIsPhotosLoading] = useState(false); // For photos fetch
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for sidebar open/close status

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  useEffect(() => {
    if (isAuthenticated) {
      setIsPhotosLoading(true);
      setPhotoError(null);
      setPhotos([]); // Clear previous photos

      fetch("/api/get-photos")
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
              console.warn(
                "Photo API returned 401, consider re-authentication flow.",
              );
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
    return (
      <p className="text-xl text-gray-300 flex justify-center items-center min-h-[calc(100vh-200px)]">
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

  return (
    <div>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
      <div className="flex flex-row pt-1 px-1 py-1">
        <button
          onClick={toggleSidebar}
          // w-52 is a valid Tailwind class for a fixed width.
          className="sm:w-62 shrink flex-none mb-1 antialiased text-2xl bg-blue-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
        >
          Image Archive
        </button>
        {/* Apply flex-grow directly to the Link component */}
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
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1.5 px-1">
            {photos.map((photo) => (
              <div
                key={photo}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
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
        </div>
      )}
    </div>
  );
}
