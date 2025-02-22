import * as font from "../../components/font";
import Link from "next/link";

export default function () {
  return (
    <div className="">
      <p
        className={`${font.poppins.variable} antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 // Optional active state`}
      >
        <Link href="../..">Click Here to go to go Home</Link>
      </p>
      <h1
        className={`${font.poppins.variable} antialiased text-4xl text-center bg-red-500`}
      >
        Blogs
      </h1>
      <p
        className={`${font.poppins.variable} antialiased text-2xl bg-green-700 rounded-md active:bg-blue-700 transition-colors duration-200 font-light px-4 py-2 cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
      >
        <Link href="./blogs/journey">1# My journey thus far</Link>
      </p>
    </div>
  );
}
