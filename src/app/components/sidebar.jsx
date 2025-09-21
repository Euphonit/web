// components/Sidebar.js
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Sidebar({ onClose, isOpen }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`rounded-2xl fixed top-0 w-64 h-full bg-blue-950/70 text-white p-1 z-40 transition-all duration-300 ease-out ${isOpen ? "left-0" : "-left-64"}`}
    >
      <button
        onClick={onClose}
        className="w-full top-4 right-4 p-2 text-2xl text-white bg-red-500 rounded-full active:bg-red-700 transition-colors duration-200 px-4 py-2 cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Close Sidebar
      </button>
      <aside>
        <nav>
          <ul className="flex flex-col grow">
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/8"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-pink-500 mt-1 rounded-4xl active:bg-pink-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full">
                  Batch 8
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/7"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-amber-500 mt-1 rounded-4xl active:bg-amber-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 w-full">
                  Batch 7
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/6"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-sky-500 mt-1 rounded-4xl active:bg-sky-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 w-full">
                  Batch 6
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/5"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-zinc-500 mt-1 rounded-4xl active:bg-zinc-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 w-full">
                  Batch 5
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/4"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-teal-500 mt-1 rounded-4xl active:bg-teal-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 w-full">
                  Batch 4
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/3"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-blue-500 mt-1 rounded-4xl active:bg-blue-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 w-full">
                  Batch 3
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/2"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-violet-500 mt-1 rounded-4xl active:bg-violet-800 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 w-full">
                  Batch 2
                </button>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/pages/photo/1"
                onClick={onClose}
              >
                <button className="antialiased text-2xl bg-green-500 mt-1 rounded-4xl active:bg-green-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 w-full">
                  Batch 1
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
