import Link from "next/link";

export default function HomeButton({ titletext, titlesub }) {
  return (
    <div>
      <div>
        <p
          className="--font-poppins antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
      cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
        >
          <Link href="/pages/blog"> Back to blog home</Link>
        </p>
      </div>
      <div className="--font-poppins antialiased bg-teal-700 p-4 rounded-md w-fit mx-auto mt-4 text-center">
        <p className="font-bold text-6xl text-white">{titletext}</p>
        <p className="font-normal text-2xl text-gray-300 mt-0.5">{titlesub}</p>
      </div>
    </div>
  );
}
