import Link from "next/link";
import * as font from "../../../../components/font";

export default function () {
  return (
    <div>
      <p
        className={`${font.poppins.variable} antialiased text-2xl bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 active:bg-blue-700 // Optional active state`}
      >
        <Link href="/pages/blog">Back to blog home</Link>
      </p>
      <h1
        className={`${font.poppins.variable} antialiased font-bold text-7xl text-center text-white bg-red-700`}
      >
        1# My Dev Journey so far (Feb. 22 2025)
      </h1>
      <br />
      <p
        className={`${font.poppins.variable} antialiased text-3xl text-white text-center text-clip`}
      >
        It was almost a year to the day when I decided to learn "how to code"{" "}
        <br />
        In this blog I want to talk about how I started and how I ended up at
        web development
      </p>
      <h1 className="text-5xl font-semibold text-white text-center text-clip">
        <br />
        Part 1: The start
      </h1>
      <p
        className={`${font.poppins.variable} antialiased text-3xl text-white text-center text-clip`}
      >
        Every developer, at the start, has to choose a programming language. For
        most people, they will just search up "easy programming language" and
        choose the first thing, usually Python. Some smart ones decide based on
        what they want to learn. Now, I wouldn't call myself a smart person, but
        I luckily did the smart thing and did research. I thought, "How do I
        make websites?" as I was interested in that, so I learned HTML, CSS, and
        JS. But HTML and CSS just felt uncomfortable to me, especially CSS. So I
        learned mostly JavaScript, but mostly just the standard JS separate from
        web development. I was in love with JavaScript from the start. At the
        same time, I was enrolled in my school's Computer Science Course (they
        just taught us Python and Pygame), and so I actively compared the two. I
        liked JavaScript more because it felt high-level, but I could still get
        into the weeds if I had to. I eventually quit that Python course, but
        then I tried combining HTML and JS, and I found it difficult. The whole
        linking process and the fact that everything was longer now, I did not
        like. I was also infuriated with how importing fonts in CSS worked. All
        these factors eventually made me quit learning for a long time.
      </p>
      <h1 className="text-5xl text-white font-semibold text-center text-clip">
        <br />
        Part 2: Why, and how I returned
      </h1>
      <p
        className={`${font.poppins.variable} antialiased text-3xl text-white text-center text-clip`}
      >
        I really got back into it because it was later in school year and I was
        a minor tech person in the school Musical. I had alot of free time and I
        wanted to do something with that time. I watch this developer youtuber
        named{" "}
        <Link
          href="https://www.youtube.com/@t3dotgg"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Theo-T3.gg
        </Link>{" "}
        (He's a really great guy you should check him out) and he inspired me to
        get back into web development. I realised that such a things as
        JavaScript frameworks and since I like JavaScript so much I figured I
        would try one. But what framework to chose? I tried the framework theo
        uses and I instantly fell in love. Im not a huge fan of typescript so I
        just used NextJS with JavaScript. But it felt inuitive and the courses
        on the NextJS website are so helpful. I makes web development fun for
        me, and I even switched from Github Pages to Vercel for hosting. I look
        forward to the future of my web dev journey and will continue to post on
        this blog!
      </p>
    </div>
  );
}
