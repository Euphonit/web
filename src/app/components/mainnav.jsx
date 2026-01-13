import Link from "next/link";

export default function MainNav({ type }) {
  if (type === "home") {
    return (
      <div className="grid grid-cols-4 gap-x-1 mx-1 xs:text-xs sm:text-sm lg:text-lg xl:text-2xl">
        <Link href="/pages/blog">
          <button className="antialiased bg-blue-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            📝 Blog
          </button>
        </Link>
        <Link href="/pages/hunter">
          <button className="antialiased bg-green-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🐺 Hunter 🔑
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="antialiased bg-orange-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Photo
          </button>
        </Link>
        <Link
          href="https://fs.danielcrutti.com/cam/vid%20%2B%20sound/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="antialiased bg-red-500 text-white px-4 py-2 mt-1 rounded-3xl font-medium cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 active:bg-red-700 w-full">
            🎬 Videos ➡️ 🔑
          </button>
        </Link>
      </div>
    );
  } else if (type === "blog") {
    return (
      <div className="grid grid-cols-3 grid-x-1 mx-1 mt-1 space-x-1">
        <Link href="/pages/hunter">
          <button className="antialiased text-2xl bg-blue-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            🐺 Hunter's Page (Passworded)
          </button>
        </Link>
        <Link href="/">
          <button className="antialiased text-2xl bg-green-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🏠 Home
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-orange-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Photography (Passworded)
          </button>
        </Link>
      </div>
    );
  } else if (type === "hunter") {
    return (
      <div className="grid grid-cols-3 grid-x-1 mx-1 mt-1 space-x-1">
        <Link href="/pages/blog">
          <button className="antialiased text-2xl bg-blue-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            📝 Daniel's Blog
          </button>
        </Link>
        <Link href="/">
          <button className="antialiased text-2xl bg-green-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🏠 Daniel's Website
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="antialiased text-2xl bg-orange-500 text-white px-4 py-2 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Daniel's Photography
          </button>
        </Link>
      </div>
    );
  }
}
