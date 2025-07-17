"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./components/font";

export default function HomePage() {
  const [isDanielHovered, setIsDanielHovered] = useState(false);
  const [isEuphonitHovered, setIsEuphonitHovered] = useState(false);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-x-1">
        <Link href="/pages/blog">
          <button className="antialiased text-2xl bg-blue-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            📝 Blog
          </button>
        </Link>
        <Link href="/pages/hunter">
          <button className="antialiased text-2xl bg-green-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🐺 Hunter's Page (Passworded)
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-orange-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Photography (Passworded)
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="antialiased text-clip text-4xl">
          I'm{" "}
          <span
            onMouseEnter={() => setIsDanielHovered(true)}
            onMouseLeave={() => setIsDanielHovered(false)}
            // TailWind css
            className={`transition-all duration-300 ease-in-out ${isDanielHovered ? "animate-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent" : "animate-text text-white"}`}
          >
            <strong>
              <em>Daniel Crutti</em>
            </strong>
          </span>{" "}
          also known online as{" "}
          <span
            onMouseEnter={() => setIsEuphonitHovered(true)}
            onMouseLeave={() => setIsEuphonitHovered(false)}
            // TailWind css
            className={`transition-all duration-300 ease-in-out ${isEuphonitHovered ? "animate-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent" : "animate-text text-white"}`}
          >
            <strong>
              <em>Euphonit</em>
            </strong>
          </span>
          , and this is my website!
          <br />
        </p>
        <p className="antialiased text-4xl pt-3">Picture of Me:</p>
        <div className="overflow-hidden rounded-2xl">
          <a href="/Photography/5/DSC00005.webp" rel="noopener noreferrer" target="_blank">
            <Image
              className="hover:scale-105 transition-transform duration-200"
              src="/Photography/5/DSC00005.webp"
              width={713}
              height={535}
              title="me driving a boat i know im so cool"
              alt="me driving a boat i know im so cool"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
