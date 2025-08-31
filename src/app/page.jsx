"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./components/font";
import MainNav from "./components/mainnav";

export default function HomePage() {
  const [isDanielHovered, setIsDanielHovered] = useState(false);
  const [isEuphonitHovered, setIsEuphonitHovered] = useState(false);

  return (
    <div className="">
      <MainNav type="home" />
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
          <a href="/me.jpg" rel="noopener noreferrer" target="_blank">
            <Image
              className="hover:scale-105 transition-transform duration-200"
              src="/me.jpg"
              width={540}
              height={540}
              title="me driving a boat i know im so cool"
              alt="me driving a boat i know im so cool"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
