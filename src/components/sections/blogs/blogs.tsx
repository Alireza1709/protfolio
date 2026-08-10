import React from "react";
import Link from "next/link";

import BlogCard from "./BlogCard";
import { blogData } from "./blog-data";

const Blogs = () => {
  return (
    <section className="my-20 w-full">
      <div className="container mx-auto px-4">
            <div
                className=" mb-10 flex flex-col gap-6 sm:mb-12 flex-row items-center justify-between w-full"
                >
                <h2
                    className=" max-w-[450px] max-md:max-w-[250px] max-lg:max-w-90 max-md:text-3xl max-sm:text-2xl text-3xl font-semibold leading-tight  text-c2 sm:text-4xl lg:text-5xl"
                >
                   From my blog {" "}
                    <span className="text-c1">post</span>
                </h2>

                <Link
                    href="/"
                    className=" w-fit rounded-full  bg-c1 max-lg:px-7 max-lg:py-3 max-lg:text-base max-md:px-2 max-md:py-3 max-md:text-xs max-md:w-20 text-center font-medium  text-c5 transition-all duration-300 hover:scale-105 px-8 py-3.5 text-[16px]"
                >
                    See All
                </Link>
            </div>

        <div
          className="
            mt-12
            grid
            w-full
            grid-cols-3
            gap-x-7
            gap-y-12
            max-xl:gap-x-5
            max-lg:mt-9
            max-lg:grid-cols-2
            max-lg:gap-x-5
            max-lg:gap-y-10
            max-md:mt-7
            max-md:grid-cols-2
            max-sm:grid-cols-1
            max-md:gap-y-10
          "
        >
          {blogData.slice(0, 6).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;