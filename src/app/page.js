import Image from "next/image";
import Link from "next/link";
import * as font from "./components/font";
export default function Home() {
  return (
    <div className="">
      <p
        className={`${font.poppins.variable} antialiased text-lg bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 // Optional active state`}
      >
        <Link href="/pages/blog">Click Here to go to my blog</Link>
      </p>
      <h1 className={`${font.poppins.variable} antialiased text-clip text-4xl`}>
        Hello, im Daniel Crutti (euphonit) and this is my website!
        <br /> Picture of Me:
      </h1>
      <Image
        src="/me.jpg"
        width={500}
        height={500}
        alt="Me at chipoltle with friends. Taken using MacOS Photo Booth on 2015 MacBook Air"
      />
    </div>
  );
}
