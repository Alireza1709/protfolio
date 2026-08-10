import Image from "next/image";
import React from "react";

import IfinitySlider from "../../ui/infinitySlider";
import { testimonialData } from "./testimonial-data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative max-w-[2000px] mx-auto w-full bg-[url('/images/blackbg.webp')] bg-cover bg-center bg-no-repeat md:rounded-[50px] my-20 py-20 max-md:py-14">
      <div className="absolute inset-0 bg-black/40 rounded-[50px]" />

      <div className="flex justify-center items-center w-full flex-col">

        <div className="relative px-4">
          <h2 className="text-c5 font-medium text-4xl max-lg:text-3xl max-md:text-2xl text-center leading-12 max-md:leading-8">
            Testimonials That
            <br />
            Speak to <span className="text-c1">My Results</span>
          </h2>

          <Image
            src={"/images/w3line.svg"}
            alt="3line"
            width={30}
            height={30}
            className="absolute -top-4 right-2 max-lg:w-7 max-lg:right-2 max-lg:-top-3 max-md:w-5.5 max-md:right-2.5"
          />

          <Image
            src={"/images/star.svg"}
            alt="star"
            width={30}
            height={30}
            className="absolute top-20 -right-60 max-md:w-5.5 max-lg:-right-40 max-lg:top-10 max-md:-right-20 max-md:-top-10 max-sm:-right-10"
          />

          <Image
            src={"/images/star.svg"}
            alt="star"
            width={30}
            height={30}
            className="absolute -bottom-30 -left-40 max-md:w-5.5 max-lg:-left-30 max-lg:-bottom-25 max-md:-left-10 max-md:-bottom-0"
          />
        </div>

        <p className="text-c5 max-w-[700px] text-center mt-4 max-lg:text-sm max-md:text-xs px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed congue interdum ligula a dignissim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed lobortis orci
          elementum egestas lobortis.
        </p>

        <div className="w-full mt-14">
             <IfinitySlider speed={45} hoverSpeed={0.15} gap={20}>
                {testimonialData.map((item) => (
                    <TestimonialCard
                    key={item.id}
                    testimonial={item}
                    />
                ))}
            </IfinitySlider>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;