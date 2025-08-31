import Link from "next/link";
import Image from "next/image";

export default function BlogButton({ href, color, text, img, alt }) {
  return (
    <div className="">
      <Link href={href}>
        <button
          className={`antialiased xl:text-4xl lg:text-3xl text-2xl xs:text-sm bg-${color}-500 rounded-4xl
  active:bg-${color}-800 transition-colors duration-200 font-light mt-1 px-4 py-2
  cursor-pointer hover:bg-${color}-700 focus:outline-none focus:ring-2
  focus:ring-${color}-500 focus:ring-offset-2 w-full h-full flex flex-col`}
        >
          <div className="aspect-square w-full">
            <Image
              src={img}
              width={500}
              height={500}
              alt={alt}
              className="w-full h-full rounded-4xl object-cover"
            />
          </div>
          <div className="flex-grow flex items-center justify-center text-center p-2">
            {text}
          </div>
        </button>
      </Link>
    </div>
  );
}
