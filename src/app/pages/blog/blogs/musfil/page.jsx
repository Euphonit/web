import Link from "next/link";
import "../../../../components/font";

export default function MusFilPage() {
  return (
    <div>
      <p
        className="--font-poppins antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
        cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1
        className="--font-poppins antialiased font-bold text-5xl text-center
        text-white bg-red-700"
      >
        2# Why did we abandon music files? (Mar 16, 2025)
      </h1>
      <br />
      <p className="--font-poppins antialiased text-2xl text-white text-center text-clip">
        I often wonder why we as a society switched away from digital music
        files. Digital music files allow offline listening without taking up
        phone data, they can still be stored and played on phones, and playback
        can be morphed and changed in any way possibly imaginable. It's not even
        like space is an issue when storage prices are at all time lows
        historically, and many file types like mp3 can drastically compress the
        audio data. The audio loss is not even noticible to the human ear except
        in very specific situations.
        <br />
        <br />
        As someone who grew up my entire life with music streaming services (I'm
        a teenager) it seems insane how we ever would've voluntarily switched to
        music streaming. If artists and publishing labels still wnat the mass
        distrobution perks of music streaming services why don't they just build
        a website where you can download the music like bandcamp?
      </p>
    </div>
  );
}
