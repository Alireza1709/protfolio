"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SwitchButton from "../ui/SwitchButton";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full container mx-auto px-4" id="home">
      <div className="flex flex-col justify-center items-center mt-46 max-xl:mt-44 max-md:mt-30 gap-y-7">
        <div
          className={`
            relative
            transition-all
            duration-300
            ease-in-out
            ${isHovered ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
          `}
        >
          <Image
            width={30}
            height={30}
            src={"/images/3line.svg"}
            alt="3line"
            className="absolute -right-7 -top-7 max-md:w-6 max-md:-right-5 max-md:-top-5"
          />
          <span className="px-4 py-2 border-1 text-black rounded-full font-medium max-md:text-sm max-sm:text-xs">
            Hello !
          </span>
        </div>

        <div
          className={`
            relative
            transition-all
            duration-300
            ease-in-out
            ${isHovered ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0"}
          `}
        >
          <Image
            width={70}
            height={70}
            src={"/images/3line2.svg"}
            alt="3line"
            className="absolute -left-14 -bottom-13 max-xl:w-16 max-lg:w-15 max-lg:-left-13 max-md:w-13 max-md:-left-11 max-md:-bottom-11 max-sm:w-11 max-sm:-left-10 max-sm:-bottom-9"
          />
          <h1
            className={`
              text-8xl
              max-xl:text-7xl
              max-lg:text-6xl
              max-md:text-5xl
              max-sm:text-4xl
              font-urbanist
              font-semibold
              text-c4
              text-center
              transition-all
              duration-300
              ease-in-out
              ${isHovered ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0"}
            `}
          >
            I’m{" "}
            <span className="text-c1">
              Jenny<span className="text-c4">,</span>
            </span>
            <span className="block">Product Designer</span>
          </h1>
        </div>

        <div className="w-full flex justify-between items-start mt-10">
          <div
            className={`
              flex
              justify-center
              items-start
              flex-col
              w-full
              max-lg:hidden
              transition-all
              duration-300
              ease-in-out
              ${isHovered ? "translate-y-[-80px]" : "translate-y-0"}
            `}
          >
            <div
              className={`
                flex
                flex-row
                gap-0.5
                transition-all
                duration-300
                ease-in-out
                ${isHovered ? "translate-y-[-80px]" : "translate-y-0"}
              `}
            >
              <Image
                priority
                width={12.5}
                height={12.5}
                src={"/images/vector.svg"}
                alt="vector"
                className="max-xl:w-3"
              />
              <Image
                fetchPriority="high"
                width={12.5}
                height={12.5}
                src={"/images/vector.svg"}
                alt="vector"
                className="max-xl:w-3"
              />
            </div>
            <p
              className={`
                mt-8
                max-w-70
                font-medium
                max-xl:text-sm
                max-xl:mt-5
                transition-all
                duration-300
                ease-in-out
               ${isHovered ? "translate-y-[-80px]" : "translate-y-0"}   
              `}
            >
              Jenny’s Exceptional product design ensure our website’s success.
              Highly Recommended
            </p>
          </div>

         <div
  className="flex w-full items-center justify-center"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="relative flex h-[680px] w-[680px] items-center justify-center rounded-full bg-[#FEB273] max-xl:h-[560px] max-xl:w-[560px] max-lg:h-[480px] max-lg:w-[480px] max-md:h-[360px] max-md:w-[360px] max-sm:h-[300px] max-sm:w-[300px]">
    {/* Hero Stars - داخل دایره */}
    <Image
      src="/images/herostars.svg"
      alt="herostars"
      width={953}
      height={636}
      aria-hidden="true"
      className={`
        absolute
        z-0
        h-auto
        w-[1000px]
        max-xl:w-[700px]
        max-lg:w-[600px]
        max-md:w-[450px]
        max-sm:w-[380px]
        pointer-events-none
        transition-all
        duration-400
        ease-in-out
        top-1/2
        left-1/2
        -translate-x-1/2
        ${
          isHovered
            ? "opacity-100 -translate-y-[calc(80%+80px)]  max-sm:scale-130 scale-150"
            : "opacity-0 -translate-y-[calc(50%+30px)] scale-100"
        }
      `}
    />

    <Image
      src="/images/junney.webp"
      alt="junney"
      width={953}
      height={636}
      loading="eager"
      priority
      fetchPriority="high"
      sizes="(max-width: 640px) 330px, (max-width: 768px) 390px, (max-width: 1024px) 520px, (max-width: 1280px) 600px, 680px"
      className="absolute -top-22 max-sm:-top-19 h-auto w-[700px] scale-125 max-xl:w-[600px] max-lg:w-[520px] max-md:w-[390px] max-sm:w-[330px] z-10"
    />

    <div className="max-lg:mb-5 max-md:mb-16 max-sm:mb-20 z-20">
      <SwitchButton
        defaultActive={0}
        items={[
          {
            label: "Portfolio",
            href: "/",
          },
          {
            label: "Hire me",
            href: "/",
          },
        ]}
      />
    </div>
  </div>
</div>

          <div
            className={`
              flex
              justify-center
              items-end
              flex-col
              w-full
              max-lg:hidden
              transition-all
              duration-300
              ease-in-out
              ${isHovered ? "translate-y-[-150px]" : "translate-y-0"}
            `}
          >
            <Image
              priority
              fetchPriority="high"
              width={140}
              height={140}
              src={"/images/stars.svg"}
              alt="stars"
              className="max-xl:w-30"
            />
            <h4 className="font-urbanist font-bold text-[40px] text-c4 mt-6 max-xl:mt-3 max-xl:text-[30px]">
              10 Years
            </h4>
            <span className="font-normal text-c4 text-[20px] -mt-2 max-xl:text-[16px]">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;