import Link from "next/link";

export default function HomeButton({ title, sub }) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <button
          className="--font-poppins antialiased text-3xl bg-blue-500 px-4 py-2 mt-1 ml-0.5 mr-0.5 rounded-3xl
      cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
        >
          <Link href="/pages/blog">📝 Blog Home</Link>
        </button>
        <button
          className="--font-poppins antialiased text-3xl bg-green-500 px-4 py-2 mt-1 ml-0.5 mr-0.5 rounded-3xl
      cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-green-700"
        >
          <Link href="/">🏠 Website Home</Link>
        </button>
      </div>
      <div className="--font-poppins antialiased bg-amber-700 p-4 rounded-4xl w-fit mx-auto mt-4 text-center">
        <p className="font-bold text-6xl text-white">{title}</p>
        <p className="font-normal text-2xl text-gray-300 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}
