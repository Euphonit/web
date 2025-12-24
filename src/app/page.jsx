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
    <div className="min-h-screen">
      <MainNav type="home" />
      <div className="flex flex-col sm:flex-row min-h-full sm:h-[calc(100vh-4rem)] justify-center sm:pt-1 px-4 sm:px-8 overflow-x-hidden">
        <div className="w-full sm:w-2/3 px-4 flex flex-col items-center justify-center p-4 order-1 xs:order-2">
          <div className="text-center">
            <p
              className="
                antialiased
                text-clip
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              I'm{" "}
              <span
                onMouseEnter={() => setIsDanielHovered(true)}
                onMouseLeave={() => setIsDanielHovered(false)}
                className="group inline-block"
              >
                <span
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isDanielHovered ? "animate-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent" : "animate-text text-white"}
                    transform origin-bottom
                    group-hover:scale-y-[1.3]
                    group-hover:inline-block
                    transition-transform duration-300
                  `}
                >
                  <strong>
                    <em>Daniel Crutti</em>
                  </strong>
                </span>
              </span>{" "}
              also known online as{" "}
              <span
                onMouseEnter={() => setIsEuphonitHovered(true)}
                onMouseLeave={() => setIsEuphonitHovered(false)}
                className="group inline-block"
              >
                <span
                  className={`
                    transition-all duration-400 ease-in-out
                    ${isEuphonitHovered ? "animate-text bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent" : "animate-text text-white"}
                    transform origin-bottom
                    group-hover:scale-y-[1.2]
                    group-hover:inline-block
                    transition-transform duration-300
                  `}
                >
                  <strong>
                    <em>Euphonit</em>
                  </strong>
                </span>
              </span>
              , and this is my website!
              <br />
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center pt-4 sm:pt-0 order-2 xs:order-1">
          <p className="antialiased text-5xl pb-3 text-center">
            <strong>
              <em>Picture of Me:</em>
            </strong>
          </p>

          <div className="overflow-hidden rounded-2xl w-full">
            <a
              href="/me.jpg"
              rel="noopener noreferrer"
              target="_blank"
              className="block"
            >
              <Image
                className="hover:scale-104 transition-transform duration-200 w-full h-auto"
                src="/me.jpg"
                width={540}
                height={540}
                title="picture of me"
                alt="picture of me"
              />
            </a>
          </div>
          <div className="h-8 sm:hidden"></div>
        </div>
      </div>
    </div>
  );
}
