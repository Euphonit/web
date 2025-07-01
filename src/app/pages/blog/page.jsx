import "../../components/font";
import Link from "next/link";

export const metadata = {
  title: "Daniel's Blog",
  description: "Daniel Crutti's Blog",
};

export default function () {
  return (
    <div className="">
      <p
        className="--font-poppins antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
      cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="../..">Click Here to go to go Home</Link>
      </p>
      <h1 className="--font-poppins antialiased text-7xl font-bold text-center bg-green-900 p-3">
        Daniel Crutti's Blog
      </h1>
      <p
        className="--font-poppins antialiased text-2xl bg-zinc-500 rounded-md
        active:bg-zinc-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-zinc-700 focus:outline-none focus:ring-2
        focus:ring-zinc-500 focus:ring-offset-2"
      >
        <Link href="/pages/blog/blogs/mdx">
          6# MDX TIME BABY! (Jul 1, 2025)
        </Link>
      </p>
      <p
        className="--font-poppins antialiased text-2xl bg-blue-500 rounded-md
        active:bg-blue-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2"
      >
        <Link href="/pages/blog/blogs/minidisc">
          5# MiniDisc (Jun 23, 2025)
        </Link>
      </p>
      <p
        className="--font-poppins antialiased text-2xl bg-teal-600 rounded-md
        active:bg-teal-800 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-teal-700 focus:outline-none focus:ring-2
        focus:ring-teal-500 focus:ring-offset-2"
      >
        <Link href="/pages/blog/blogs/8thyear">
          4# My Year (May 25, 2025) (Password Protected)
        </Link>
      </p>
      <p
        className="--font-poppins antialiased text-2xl bg-orange-700 rounded-md
        active:bg-orange-900 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-orange-800 focus:outline-none focus:ring-2
        focus:ring-orange-500 focus:ring-offset-2"
      >
        <Link href="/pages/blog/blogs/theaquit">
          3# Our lead male just quit our theater show (Mar 20, 2025)
        </Link>
      </p>
      <p
        className="--font-poppins antialiased text-2xl bg-purple-700 rounded-md
        active:bg-purple-900 transition-colors duration-200 font-light px-4 py-2
        cursor-pointer hover:bg-purple-800 focus:outline-none focus:ring-2
        focus:ring-purple-500 focus:ring-offset-2"
      >
        <Link href="/pages/blog/blogs/musfil">
          2# Why did we abandon music files? (Mar 16, 2025)
        </Link>
      </p>
      <p className="--font-poppins antialiased text-2xl bg-green-700 rounded-md active:bg-green-800 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        <Link href="/pages/blog/blogs/journey">
          1# My dev journey thus far (Feb. 22 2025)
        </Link>
      </p>
    </div>
  );
}
