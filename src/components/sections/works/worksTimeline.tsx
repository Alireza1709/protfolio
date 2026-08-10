import React from "react";
import { experiences } from "./works-data";

const ExperienceTimeline = () => {
  return (
    <div className="mx-auto  max-lg:mt-14 lg:mt-24 container mx-auto">
      {experiences.map((experience, index) => {
        const isLast = index === experiences.length - 1;

        return (
          <div
            key={`${experience.company}-${experience.date}`}
            className="grid grid-cols-[1fr_80px_1fr] max-md:grid-cols-[1fr_45px_1fr]"
          >
            {/* Left */}
          <div className="flex flex-col items-start  text-right max-lg:pr-5 ">
  <div className="flex flex-col items-start ">
    <h3 className="text-3xl font-semibold  text-start text-c2 max-lg:text-xl max-md:text-base max-sm:text-sm">
      {experience.company}
    </h3>

    <span className="mt-2 lg:text-[17px] text-sm text-c3 max-md:text-xs">
      {experience.date}
    </span>
  </div>
</div>

            {/* Timeline */}
            <div className="relative flex justify-start">
             <div
  className={`
    relative z-10 mx-auto
    h-7 w-7 xl:h-9 xl:w-9
    max-md:h-5 max-md:w-5
    shrink-0 rounded-full
    ${
      experience.color === "c2"
        ? "bg-c2/10"
        : "bg-c1/10"
    }
  `}
>
  {/* dashed ring */}
  <div
    className={`
      absolute
      -inset-[2px]
      rounded-full
      border-[2px]
      border-dashed
      ${
        experience.color === "c2"
          ? "border-c2"
          : "border-c1"
      }
    `}
  />

  {/* center */}
  <div
    className={`
      absolute
      left-1/2
      top-1/2
      h-5 w-5 
      xl:h-7 xl:w-7
      max-md:h-3.5
      max-md:w-3.5
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      ${
        experience.color === "c2"
          ? "bg-c2"
          : "bg-c1"
      }
    `}
  />
</div>

              {!isLast && (
                <div
  className="
    absolute
    left-1/2
    top-7
    bottom-0
    w-[1px]
    -translate-x-1/2
    max-md:top-5
    max-md:w-[1px]
    bg-[repeating-linear-gradient(to_bottom,theme(colors.c2)_0px,theme(colors.c2)_5px,transparent_5px,transparent_10px)]
  "
/>
              )}
            </div>

            {/* Right */}
            <div className="lg:pl-40  max-lg:pl-5 xl:pl-80">
              <h3 className="text-3xl font-semibold  text-c2 max-lg:text-xl max-md:text-base max-sm:text-sm">
                {experience.role}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-c3 max-md:text-xs max-md:leading-6 mb-5">
                {experience.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;