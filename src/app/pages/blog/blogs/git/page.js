import Link from "next/link";
import * as font from "../../../../components/font";

export default function GitPage() {
  return (
    <div>
      <p
        className={`${font.poppins.variable} antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 // Optional active state`}
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1
        className={`${font.poppins.variable} antialiased font-bold text-7xl text-center text-white bg-red-700`}
      >
        2# Why I hate Git, but still use it (Feb 27. 2025)
      </h1>
      <br />
      <p
        className={`${font.poppins.variable} antialiased text-3xl text-white text-center text-clip`}
      >
        Git has given me so many headaches over my dev journey. I want to share
        some thoughts about it and how I wish there was a better solution for
        storing code locally and remotely.
      </p>
      <h1 className="text-5xl font-semibold text-white text-center text-clip">
        <br />
        Part 1: The Good
      </h1>
      <p
        className={`${font.poppins.variable} antialiased text-3xl text-white text-center text-clip`}
      >
        The fact that there even is a tool such as git is amazing.
      </p>
    </div>
  );
}
