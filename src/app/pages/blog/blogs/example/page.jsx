import Link from "next/link";
import * as font from "../../../../components/font";

export default function GitPage() {
  return (
    <div>
      <p
        className="antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
        cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1 className="antialiased font-bold text-7xl text-center text-white bg-red-700">###</h1>
      <br />
      <p className="antialiased text-3xl text-white text-center text-clip">###</p>
      <h1 className="text-5xl font-semibold text-white text-center text-clip">
        <br />
        ###
      </h1>
      <p className="antialiased text-3xl text-white text-center text-clip">###</p>
    </div>
  );
}
