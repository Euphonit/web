import Link from "next/link";
import MainNav from "@/app/components/mainnav";

export default function HomeButton({ title, sub, color }) {
  return (
    <div>
      <MainNav type="home" />
      <div
        className={`antialiased bg-green-700 p-4 rounded-4xl mt-1 mx-1 text-center`}
      >
        <p className="font-bold text-6xl text-white">{title}</p>
        <p className="font-normal text-2xl text-white mt-0.5">{sub}</p>
      </div>
    </div>
  );
}
