import Image from "next/image";
import Link from "next/link";
import "./components/font";

export default function HomePage() {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <button className="--font-poppins antialiased text-2xl bg-blue-500 text-white px-4 py-2 mt-1 ml-0.5 mr-0.5 rounded-3xl font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700">
          <Link href="/pages/blog">📝 Blog</Link>
        </button>
        <button className="--font-poppins antialiased text-2xl bg-green-500 text-white px-4 py-2 mt-1 ml-0.5 mr-0.5 rounded-3xl font-medium cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 active:bg-green-700">
          <Link href="/pages/hunter">🐺 Hunter's Page (Passworded)</Link>
        </button>
        <button className="--font-poppins antialiased text-2xl bg-orange-500 text-white px-4 py-2 mt-1 ml-0.5 mr-0.5 rounded-3xl font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
          <Link href="/pages/photo">📷 Photography (Passworded)</Link>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p className="--font-poppins antialiased text-clip text-4xl">
          I'm{" "}
          <strong>
            <em>Daniel Crutti</em>
          </strong>{" "}
          also known online as{" "}
          <strong>
            <em>Euphonit</em>
          </strong>
          , and this is my website!
          <br />
        </p>
        <p className="--font-poppins antialiased text-4xl pt-3">
          Picture of Me:
        </p>
        <div>
          <Image
            className="rounded-2xl"
            src="/Photography/5/DSC00005.webp"
            width={713}
            height={535}
            style=""
            title="me driving a boat i know im so cool"
            alt="me driving a boat i know im so cool"
          />
        </div>
      </div>
    </div>
  );
}
