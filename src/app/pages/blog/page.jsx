import "../../components/font";
import Link from "next/link";
import BlogButton from "@/app/components/blogmainbutton";
import MainNav from "@/app/components/mainnav";

export const metadata = {
  title: "Daniel's Blog",
  description: "Daniel Crutti's Blog",
};

export default function BlogPage() {
  return (
    <div className="">
      <MainNav type="blog" />
      <div>
        <p className="antialiased text-7xl mt-1 mx-1 rounded-4xl font-bold text-center bg-green-900 p-3">
          Daniel Crutti's Blog
        </p>
      </div>
      <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mx-2 my-2 mt-1">
        <BlogButton
          href="/pages/blog/blogs/siteupdates/3flex"
          color="red"
          text="7# Site Update 2: Flex and Photo (August 31, 2025)"
          img="/Photography/7/IMG_3728.avif"
          alt="mdx logo"
        />
        <BlogButton
          href="/pages/blog/blogs/siteupdates/2mdx"
          color="zinc"
          text="6# Site Update 1: The MDX Update (Jul 9, 2025)"
          img="/blogpic/mdx.svg"
          alt="mdx logo"
        />
        <BlogButton
          href="/pages/blog/blogs/minidisc"
          color="blue"
          text="5# Adventures with MiniDisc (Jun 23, 2025)"
          img="/blogpic/MiniDiscLogo.svg"
          alt="minidisc logo"
        />
        <BlogButton
          href="/pages/blog/blogs/8thyear"
          color="teal"
          text="4# My Year (May 25, 2025) (Password Protected)"
          img="/blogpic/fireworks.jpg"
          alt="placeholder"
        />
        <BlogButton
          href="/pages/blog/blogs/theaquit"
          color="orange"
          text="3# Our lead male just quit our theater show (Mar 20, 2025)"
          img="/blogpic/theater.jpg"
          alt="placeholder"
        />
        <BlogButton
          href="/pages/blog/blogs/musfil"
          color="purple"
          text="2# Why did we abandon music files? (Mar 16, 2025)"
          img="/blogpic/musicfile.png"
          alt="placeholder"
        />
        <BlogButton
          href="/pages/blog/blogs/journey"
          color="green"
          text="1# My dev journey thus far (Feb. 22 2025)"
          img="/blogpic/devjourn.png"
          alt="placeholder"
        />
      </div>
    </div>
  );
}
