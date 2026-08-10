"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="my-20 bg-[#F2F4F7] px-4 py-16 sm:px-6 md:my-28 md:px-10 md:py-20 lg:py-30">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-20">
        <div
          className="order-2 flex items-center justify-center lg:order-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative flex items-center justify-center">
            {/* Image behind (secondary image) - comes from behind on hover */}
            <div
              className={`
                absolute
                transition-all
                duration-300
                ease-in-out
                ${isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
              `}
            >
              <Image
                src="/images/circls.svg"
                alt="about-hover"
                width={600}
                height={600}
                className="h-auto w-full max-w-[420px] object-contain sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]"
              />
            </div>

            {/* Main image (front) - stays visible, slight scale down to show behind image */}
            <div
              className={`
                transition-all
                duration-300
                ease-in-out
                ${isHovered ? "scale-95" : "scale-100"}
              `}
            >
              <Image
                src="/images/about.png"
                alt="about"
                width={600}
                height={600}
                priority
                fetchPriority="high"
                className="h-auto w-full max-w-[420px] object-contain sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]"
              />
            </div>
          </div>
        </div>

        <div className="order-1 flex w-full flex-col items-center justify-center gap-y-7 text-center sm:gap-y-8 lg:order-2 lg:items-start lg:text-left xl:gap-y-10">
          <h2 className="text-3xl font-semibold leading-tight text-c2 sm:text-5xl lg:text-6xl">
            Why <span className="text-c1">Hire me</span>?
          </h2>

          <p className="max-w-lg text-base leading-7 text-c3 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales.
          </p>

          <div className="flex w-full max-w-lg items-center justify-center gap-10 sm:gap-16 md:gap-24 lg:justify-start lg:gap-16 xl:gap-30">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-medium text-c4 sm:text-xl">
                550 +
              </span>
              <span className="text-sm font-light text-c3 sm:text-base lg:text-lg">
                Project Completed
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-medium text-c4 sm:text-xl">
                550 +
              </span>
              <span className="text-sm font-light text-c3 sm:text-base lg:text-lg">
                Project Completed
              </span>
            </div>
          </div>

          <Link
            href={""}
            className="flex h-16 w-30 cursor-pointer items-center justify-center rounded-4xl border border-c4 text-center text-lg font-semibold text-c4 transition-colors duration-300 hover:bg-c4 hover:text-white max-sm:rounded-2xl sm:h-20 sm:w-48 sm:text-xl lg:h-[80px] lg:w-[180px] lg:text-2xl"
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;