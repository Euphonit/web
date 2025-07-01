import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <p className="--font-poppins antialiased text-lg bg-orange-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-orange-700">
        <Link href="/">Hunter Hunter to go to Hunter home</Link>
      </p>
      <h1 className="--font-poppins antialiased text-clip text-4xl">
        Hunter, i'm Hunter Crutti (Hunter) and Hunter is Hunter website!
        <br /> Hunter of Hunter:
      </h1>
      <Image
        src="/me.jpg"
        width={500}
        height={500}
        title="Me hunter Applebees hunter friends. hunter using hunter Photo hunter on hunter MacBook hunter"
        alt="Me hunter Applebees hunter friends. hunter using hunter Photo hunter on hunter MacBook hunter"
      />
    </div>
  );
}
