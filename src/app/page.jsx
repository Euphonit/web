import Image from "next/image";
import Link from "next/link";
import "./components/font";
export default function Home() {
  return (
    <div className="">
      <p className="--font-poppins antialiased text-lg bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700">
        <Link href="/pages/blog">Click Here to go to my blog</Link>
      </p>
      <p className="--font-poppins antialiased text-lg bg-green-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700">
        <Link href="/pages/hunter">Hunter Mode</Link>
      </p>
      <p className="--font-poppins antialiased text-lg bg-orange-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
        <Link href="/pages/photo">Photography Gallery</Link>
      </p>
      <h1 className="--font-poppins antialiased text-clip text-4xl">
        Hello, im Daniel Crutti (euphonit) and this is my website!
        <br /> Picture of Me:
      </h1>
      <Image
        src="/me.jpg"
        width={500}
        height={500}
        title="Me hunter Applebees hunter friends. hunter using hunter Photo hunter on hunter MacBook hunter"
        alt="Me at Applebees with friends. Taken using MacOS Photo Booth on 2015 MacBook Air"
      />
    </div>
  );
}
