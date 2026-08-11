"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "../../ui/Slider";
import { servicesData } from "./services.data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="services"
      className="w-full relative overflow-hidden max-w-[2000px] mx-auto h-[800px] max-xl:h-[800px] max-lg:h-[750px] max-md:h-[700px] max-sm:h-[650px] bg-[url('/images/blackbg.webp')] bg-cover bg-center bg-no-repeat -mt-65 max-xl:mt-3 max-lg:mt-8 max-md:mt-15 max-sm:mt-22"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Service Image 1 - حرکت به پایین با حالت کشسانی */}
      <div
        className={`absolute -left-30 max-md:-left-10 top-20 z-0 rotate-160 transition-transform duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isHovered
            ? "translate-y-[150px] rotate-180"
            : "translate-y-0"
        }`}
      >
        <Image
          src="/images/services1.webp"
          alt="service"
          width={100}
          height={100}
          priority
          fetchPriority="high"
          className="
            w-[400px]
            max-xl:w-[330px]
            max-lg:w-[260px]
            max-md:w-[200px]
            max-sm:w-[150px]
            transition-none
            origin-center
          "
        />
      </div>

      {/* Service Image 2 - حرکت به راست با حالت کشسانی */}
      <div
        className={`absolute left-1/2 top-20 z-0 transition-transform duration-[2.5s] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isHovered
            ? "translate-x-[100px] rotate-90"
            : "translate-x-0"
        }`}
      >
        <Image
          src="/images/services3.png"
          alt="service"
          width={50}
          height={50}
          priority
          fetchPriority="high"
          className="
            w-[240px]
            max-xl:w-[200px]
            max-lg:w-[160px]
            max-md:w-[120px]
            max-sm:w-[90px]
            transition-none
            origin-center
          "
        />
      </div>

      {/* Service Image 3 - حرکت به بالا و راست با حالت کشسانی */}
      <div
        className={`absolute right-0 top-73 max-sm:top-110 z-0 transition-transform duration-[2.5s] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isHovered
            ? "translate-x-[30px] -translate-y-[30px]"
            : "translate-x-0 translate-y-0"
        }`}
      >
        <Image
          src="/images/services2.png"
          alt="service"
          width={100}
          height={100}
          priority
          fetchPriority="high"
          className="
            w-[300px]
            max-xl:w-[330px]
            max-lg:w-[260px]
            max-md:w-[200px]
            max-sm:w-[150px]
            transition-none
            origin-center
          "
        />
      </div>

      <div className="relative overflow-hidden z-20 h-full flex flex-col justify-center gap-20 max-md:gap-10 px-18 max-xl:px-10 max-lg:px-8 max-md:px-4">
        <div className="relative px-4 w-full flex justify-between items-center max-lg:flex-col max-lg:gap-6">
          <h2 className="text-c5 text-5xl font-medium w-full max-lg:text-center max-md:text-3xl">
            My <span className="text-c1">Services</span>
          </h2>

          <p className="text-c5 w-full max-lg:text-center max-md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="px-4 overflow-hidden">
          <Slider
            items={servicesData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;