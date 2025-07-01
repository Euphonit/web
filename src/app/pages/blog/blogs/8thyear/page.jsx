"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PasswordProtect from "../../../../components/PasswordProtect.js";

export default function EighthYearBlog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For initial auth check

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

  const handlePasswordVerified = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <p className="text-xl --font-poppins text-gray-300 flex justify-center items-center min-h-[calc(100vh-200px)]">
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

  // Passworded content
  return (
    <div>
      <p
        className="--font-poppins antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
      cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="/pages/blog"> Back to blog home</Link>
      </p>
      <div className="--font-poppins antialiased bg-teal-700 p-4 rounded-md w-fit mx-auto mt-4 text-center">
        <p className="font-bold text-6xl text-white">
          #4 My year* (May 25, 2025)
        </p>
        <p className="font-normal text-2xl text-gray-300 mt-0.5">
          *My 8th Grade School year
        </p>
      </div>
      <p className="--font-poppins antialiased font-medium text-xl text-center mt-1">
        I can't believe the year is over. I wish I had more time. Summer is
        soooooo boring. I don't get to hang out with my friends. I have so much
        to do this summer but I also don't have anything. The boring days feel
        like they last so long. I'm still glad I had the expirience though. I
        met some of my best friends like Onan, Addison, Hunter, Foxy, Athena,
        and O'neill. I also figured out alot about my future in life, and how I
        think about my life and everything.
      </p>
    </div>
  );
}
