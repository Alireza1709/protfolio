"use client";

import Link from "next/link";

import ProfileCard from "./PortfolioCard";
import { profileData } from "./Portfolio-data";
import Slider from "../../ui/Slider";
import { filterData } from "./filter-data";
import { ArrowUpRight } from "lucide-react";


const Profile = () => {
  const profileCards = profileData.map((item) => (
    <ProfileCard
      key={item.id}
      title={item.title}
      image={item.image}
      href={item.href}
      description={item.description}
    />
  ));

  return (
    <section id='portfolio' className="my-20 w-full px-4 sm:px-6 lg:my-32">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className=" mb-10 flex flex-col gap-6 sm:mb-12 flex-row items-center justify-between"
        >
          <h2
            className=" max-w-[450px] max-md:max-w-[250px] max-lg:max-w-90 max-md:text-3xl max-sm:text-2xl text-3xl font-semibold leading-tight  text-c2 sm:text-4xl lg:text-5xl"
          >
            Lets have a look at my{" "}
            <span className="text-c1">Portfolio</span>
          </h2>

          <Link
            href="/"
            className=" w-fit rounded-full  bg-c1 max-lg:px-7 max-lg:py-3 max-lg:text-base max-md:px-2 max-md:py-3 max-md:text-xs max-md:w-25 text-center font-medium  text-c5 transition-all duration-300 hover:scale-105 px-9 py-4 text-lg"
          >
            See All
          </Link>
        </div>

        {/* Slider */}
        <Slider
            breakpoints={{
                320: {
                slidesPerView: 1,
                spaceBetween: 12,
                },
                550: {
                slidesPerView: 2,
                spaceBetween: 12,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 2,
                spaceBetween: 24,
                },
                1440: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
            }}
          items={profileCards}
          slidesPerView={4}
          spaceBetween={24}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {filterData.map((filter) => (
            <button
            aria-label="Fliter"
                key={filter.id}
                className=" rounded-full max-lg:text-xs  bg-[#F2F4F7] px-6 py-3 text-base font-medium  text-c4 transition-all duration-300  hover:bg-c1  hover:text-c5">
                    {filter.title}
            </button>
        ))}
        </div>

       <div className="mt-10 flex flex-col items-center justify-center  sm:px-6">
  <div className="flex w-full items-center justify-center gap-3 text-center max-md:gap-2">
    <h3 className="text-c2 text-4xl font-bold leading-tight max-lg:text-3xl max-md:text-2xl max-sm:text-xl ">
      Lirante - Food Dilvery Solution
    </h3>

    <ArrowUpRight
      size={50}
      strokeWidth={1.4}
      className="
        shrink-0
        rounded-full
        bg-c1
        p-2
        text-white
        transition-transform
        duration-300
        group-hover:rotate-45
        max-lg:size-11
        max-md:size-10
        max-sm:size-9
      "
    />
  </div>

  <p
    className="
      mt-6
      w-full
      max-w-200
      text-center
      text-base
      leading-7
      max-lg:mt-5
      max-md:mt-4
      max-md:max-w-2xl
      max-md:text-sm
      max-md:leading-6
    "
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
    interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Sed lobortis orci elementum egestas lobortis.
  </p>
</div>
    </section>
  );
};

export default Profile;