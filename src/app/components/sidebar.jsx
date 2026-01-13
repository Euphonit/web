// components/sidebar.jsx
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Sidebar({ onClose, isOpen }) {
  const sidebarRef = useRef(null);

  const batches = [
    { id: 15, color: "bg-gray-500" },
    { id: 14, color: "bg-violet-500" },
    { id: 13, color: "bg-teal-500" },
    { id: 12, color: "bg-sky-500" },
    { id: 11, color: "bg-green-500" },
    { id: 10, color: "bg-gray-500" },
    { id: 9, color: "bg-red-500" },
    { id: 8, color: "bg-pink-500" },
    { id: 7, color: "bg-amber-500" },
    { id: 6, color: "bg-sky-500" },
    { id: 5, color: "bg-zinc-500" },
    { id: 4, color: "bg-teal-500" },
    { id: 3, color: "bg-blue-500" },
    { id: 2, color: "bg-violet-500" },
    { id: 1, color: "bg-green-500" },
  ];

  useEffect(() => {
    // Crucial: Only listen for clicks if the sidebar is open
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0.5 w-64 h-full bg-blue-950/90 text-white z-50 transition-all duration-300 ease-out shadow-2xl
        ${isOpen ? "left-0" : "-left-64"}
        overflow-y-auto`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="p-1 flex flex-col gap-2">
        <button
          onClick={onClose}
          className="w-full p-2 text-xl text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors cursor-pointer active:bg-red-800"
        >
          Close Sidebar
        </button>

        <nav>
          <ul className="flex flex-col gap-2">
            {batches.map((batch) => (
              <li key={batch.id}>
                <Link
                  href={`/pages/photo/${batch.id}`}
                  onClick={onClose}
                  {...(batch.id <= 8
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { rel: "noopener" })}
                >
                  <button
                    className={`antialiased text-xl ${batch.color} rounded-full py-3 hover:brightness-110 active:scale-95 transition-all cursor-pointer w-full font-light`}
                  >
                    Batch {batch.id}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
