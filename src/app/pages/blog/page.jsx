import "../../components/font";
import Link from "next/link";

export const metadata = {
  title: "Daniel's Blog",
  description: "Daniel Crutti's Blog",
};

export default function BlogPage() {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <Link href="/pages/hunter">
          <button className="--font-poppins antialiased text-2xl bg-blue-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 w-full">
            🐺 Hunter's Page (Passworded)
          </button>
        </Link>
        <Link href="/">
          <button className="--font-poppins antialiased text-2xl bg-green-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700 w-full">
            🏠 Home
          </button>
        </Link>
        <Link href="/pages/photo">
          <button className="--font-poppins antialiased text-2xl bg-orange-500 text-white px-4 py-2 mt-1 mb-1 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700 w-full">
            📷 Photography (Passworded)
          </button>
        </Link>
      </div>
      <p className="--font-poppins antialiased text-7xl mt-1 rounded-4xl font-bold text-center bg-green-900 p-3">
        Daniel Crutti's Blog
      </p>
      <div className="grid grid-rows-6">
        <Link href="/pages/blog/blogs/mdx">
          <button
            className="--font-poppins antialiased text-2xl bg-zinc-500 mt-1 rounded-4xl
        active:bg-zinc-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-zinc-700 focus:outline-none focus:ring-2
        focus:ring-zinc-500 focus:ring-offset-2 w-full"
          >
            6# Site Update 1: The MDX Update (Jul 9, 2025)
          </button>
        </Link>
        <Link href="/pages/blog/blogs/minidisc">
          <button
            className="--font-poppins antialiased text-2xl bg-blue-500 mt-1 rounded-4xl
        active:bg-blue-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2 w-full"
          >
            5# MiniDisc (Jun 23, 2025)
          </button>
        </Link>
        <Link href="/pages/blog/blogs/8thyear">
          <button
            className="--font-poppins antialiased text-2xl bg-teal-600 mt-1 rounded-4xl
        active:bg-teal-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-teal-700 focus:outline-none focus:ring-2
        focus:ring-teal-500 focus:ring-offset-2 w-full"
          >
            4# My Year (May 25, 2025) (Password Protected)
          </button>
        </Link>
        <Link href="/pages/blog/blogs/theaquit">
          <button
            className="--font-poppins antialiased text-2xl bg-orange-700 mt-1 rounded-4xl
        active:bg-orange-900 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-orange-800 focus:outline-none focus:ring-2
        focus:ring-orange-500 focus:ring-offset-2 w-full"
          >
            3# Our lead male just quit our theater show (Mar 20, 2025)
          </button>
        </Link>
        <Link href="/pages/blog/blogs/musfil">
          <button
            className="--font-poppins antialiased text-2xl bg-purple-700 mt-1 rounded-4xl
        active:bg-purple-900 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-purple-800 focus:outline-none focus:ring-2
        focus:ring-purple-500 focus:ring-offset-2 w-full"
          >
            2# Why did we abandon music files? (Mar 16, 2025)
          </button>
        </Link>
        <Link href="/pages/blog/blogs/journey">
          <button className="--font-poppins antialiased text-2xl bg-green-700 mt-1 rounded-4xl active:bg-green-800 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full">
            1# My dev journey thus far (Feb. 22 2025)
          </button>
        </Link>
      </div>
    </div>
  );
}
