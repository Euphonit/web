import Link from "next/link";
export default function MiniDiscBlog() {
  return (
    <div>
      <p
        className="antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md
      cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700"
      >
        <Link href="/pages/blog"> Back to blog home</Link>
      </p>
      <div className="antialiased bg-teal-700 p-4 rounded-md w-fit mx-auto mt-4 text-center">
        <p className="font-bold text-6xl text-white">#4 Minidisc (May 25, 2025)</p>
        <p className="font-normal text-2xl text-gray-300 mt-0.5">My new expensive hobby</p>
      </div>
      <p className="antialiased font-medium text-2xl text-center mt-12 px-4 md:px-8">
        I attended VCF Southwest this year, and there was a room dedicated to minidiscs. If you don't
        know minidisc is a digital audio disc format that was popular in the late 1990s and early
        2000s. It was a compact disc-like format that could store up to 74 minutes of audio data, at
        near CD quality. It was also around 1/8 the size of CD and the players could fit in your
        pocket. It was huge in japan but never really found an audience in the US. At the festival, I
        bought a portable player and I had a recording deck in my garage. Now I can record all my mp3s
        onto the MiniDisc. Their especially useful because my school doesnt allow phones, so I can just
        listen to music on my MiniDiscs instead!
      </p>
    </div>
  );
}
