import * as font from "../../../../components/font";
import Link from "next/link";

export default function () {
  return (
    <div>
      <p
        className={`${font.poppins.variable} antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 // Optional active state`}
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1
        className={`${font.poppins.variable} antialiased font-bold text-8xl text-center text-white bg-red-700`}
      >
        1# My Dev Journey so far
      </h1>
      <br />
      <p
        className={`${font.poppins.variable} antialiased text-4xl text-white text-center text-clip`}
      >
        It was almost a year to the day when I decided to learn "how to code"{" "}
        <br />
        In this blog I want to talk about how I started and how I ended up at
        web development
      </p>
      <h1 className="text-6xl text-white text-center text-clip">
        <br />
        Part 1: The start
      </h1>
      <p
        className={`${font.poppins.variable} antialiased text-4xl text-white text-center text-clip`}
      >
        Every developer, at the start, has to choose a programming language. For
        most people, they will just search up "easy programming language" and
        choose the first thing, usually Python.
      </p>
    </div>
  );
}
