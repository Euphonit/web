"use client";

import { useState, useEffect } from "react";
import PasswordProtect from "../../components/PasswordProtect.jsx";
import Image from "next/image";
import Link from "next/link";
import "../../components/font";

export default function Hunter() {
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
          console.error("Auth check failed:", response.status, response.statusText);
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
      <p className="text-xl text-gray-300 flex justify-center items-center min-h-[calc(100vh-200px)]">
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <PasswordProtect onPasswordVerified={handlePasswordVerified} />;
  }

  // Passworded content
  return (
    <div className="">
      <div className="grid grid-cols-3 grid-x-1">
        <Link href="/pages/blog">
          <button className="antialiased text-2xl bg-blue-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            📝 Daniel's Blog
          </button>
        </Link>
        <Link href="/">
          <button className="antialiased text-2xl bg-green-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🏠 Daniel's Website
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-orange-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Daniel's Photography
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="antialiased text-clip text-4xl">
          I'm{" "}
          <strong>
            <em>Hunter</em>
          </strong>{" "}
          also known online as{" "}
          <strong>
            <em>Zevv</em>
          </strong>{" "}
          or{" "}
          <strong>
            <em>Ebinezer</em>
          </strong>
          , and this is my website!
          <br />
        </p>
        <p className="antialiased text-4xl pt-3">Picture of Me:</p>
        <div className="overflow-hidden rounded-2xl">
          <a href="/Photography/5/DSC00033.webp" rel="noopener noreferrer" target="_blank">
            <Image
              className="hover:scale-105 transition-transform duration-200"
              src="/Photography/5/DSC00033.JPG"
              width={713}
              height={535}
              title="(daniel) idk wtf hunter is doing being sped ig"
              alt="hunter being sped"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
