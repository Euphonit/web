import Image from "next/image";
import Link from "next/link";
import * as font from "./components/font";
export default function Home() {
  return (
    <div className="">
      <h1 className={`${font.poppins.variable} antialiased text-4xl`}>
        <Link href="/pages/blog">Test</Link>
      </h1>
    </div>
  );
}
