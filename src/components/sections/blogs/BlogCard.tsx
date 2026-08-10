import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Blog } from "./blog-data";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="group max-sm:max-w-[340px] mx-auto max-w-[450px]">
      {/* IMAGE WRAPPER */}
      <div className="relative">
        {/* IMAGE */}
        <div
          className="
            relative
            h-[280px]
            rounded-3xl
            w-full
            overflow-hidden
            bg-c5
            max-xl:h-[250px]
            max-lg:h-[230px]
            max-md:h-[250px]
            max-sm:h-[220px]
            
          "
        style={{
  clipPath: `
    polygon(
      0 0,
      100% 0,

      /* RIGHT OUTER CURVE */
      100% calc(100% - 107px),
      calc(100% - 0.3px) calc(100% - 102px),
      calc(100% - 1.3px) calc(100% - 97.5px),
      calc(100% - 2.9px) calc(100% - 94px),
      calc(100% - 5.4px) calc(100% - 91px),
      calc(100% - 8.6px) calc(100% - 88.7px),
      calc(100% - 12.8px) calc(100% - 87.6px),
      calc(100% - 17.6px) calc(100% - 86.5px),

      /* HORIZONTAL SECTION */
      calc(100% - 29px) calc(100% - 86.5px),
      calc(100% - 38.5px) calc(100% - 86.5px),
      calc(100% - 48px) calc(100% - 86.5px),
      calc(100% - 57.5px) calc(100% - 86.5px),

      /* INNER CURVE */
      calc(100% - 64px) calc(100% - 86.3px),
      calc(100% - 68.8px) calc(100% - 85.7px),
      calc(100% - 73.6px) calc(100% - 84.6px),
      calc(100% - 78.4px) calc(100% - 82.7px),
      calc(100% - 83.2px) calc(100% - 80.1px),
      calc(100% - 87px) calc(100% - 77.1px),
      calc(100% - 90.2px) calc(100% - 73.3px),
      calc(100% - 92.8px) calc(100% - 68.8px),
      calc(100% - 94.4px) calc(100% - 63.9px),
      calc(100% - 95.4px) calc(100% - 58.3px),
      calc(100% - 96px) calc(100% - 52.6px),
      calc(100% - 96px) calc(100% - 37.6px),

      /* BOTTOM CURVE */
      calc(100% - 96.3px) calc(100% - 30.1px),
      calc(100% - 97.3px) calc(100% - 22.6px),
      calc(100% - 99.8px) calc(100% - 15.8px),
      calc(100% - 104px) calc(100% - 10.5px),
      calc(100% - 110.4px) calc(100% - 6.4px),
      calc(100% - 118.4px) calc(100% - 3.4px),
      calc(100% - 128px) calc(100% - 1.1px),
      calc(100% - 144px) 100%,

      /* FLAT BOTTOM */
      50% 100%,
      45% 100%,
      40% 100%,
      35% 100%,
      30% 100%,
      25% 100%,
      20% 100%,
      15% 100%,
      10% 100%,

      /* LEFT BOTTOM CURVE */
      16px 100%,
      6.4px calc(100% - 0.75px),
      2.6px calc(100% - 3px),
      0.6px calc(100% - 7.5px),
      0 calc(100% - 15px),

      0 0
    )
  `,
}}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* ARROW - OUTSIDE CLIP-PATH */}
        <Link
          href={blog.href}
          aria-label={`Read ${blog.title}`}
          className="
            absolute
            bottom-[14px]
            right-[16px]
            z-10
            flex
            h-15
            w-15
            items-center
            justify-center
            rounded-full
            bg-c2
            group-hover:bg-c1
            text-c5
            transition-all
            duration-300
            hover:scale-110
           
          "
        >
          <ArrowUpRight
            size={22}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:rotate-45
              w-8 h-8
              
            "
          />
        </Link>
      </div>

      {/* TITLE */}
      <Link href={blog.href} className="block">
        <h3
          className="
            mt-5
            w-fit
            max-w-full
            rounded-full
            bg-[#F2F4F7]
            px-4
            py-2
            text-sm
            font-medium
            text-c2
            transition-colors
            duration-300
            group-hover:bg-c1
            max-lg:mt-4
            max-lg:px-3.5
            max-lg:py-1.5
            max-lg:text-xs
            max-sm:text-[11px]
          "
        >
          {blog.title}
        </h3>
      </Link>

      {/* META */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-c3 max-lg:mt-3 max-lg:gap-2 max-lg:text-xs max-sm:text-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-c1" />
          <span>{blog.author}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-c1" />
          <span>{blog.date}</span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 max-w-[95%] text-c2 text-lg leading-6 font-normal max-lg:mt-2 max-lg:text-sm max-lg:leading-5  max-sm:leading-[18px]">
        {blog.description}
      </p>
    </article>
  );
};

export default BlogCard;

