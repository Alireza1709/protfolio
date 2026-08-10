import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="group flex items-center  gap-2">
      {/* Logo Circle */}
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          overflow-hidden rounded-full
          bg-c1 p-2
          max-lg:h-9 max-lg:w-9 max-lg:p-1.5 
          max-sm:h-8 max-sm:w-8 max-sm:p-1.5
        "
      >
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="h-full w-full object-contain max-lg:w-5"
        />
      </div>

      {/* Text */}
      <div
        className="
          relative h-10 min-w-[90px]
          overflow-hidden
          max-md:h-9 max-md:min-w-[105px]
          max-sm:h-8 max-sm:min-w-[95px]
        "
      >
        {/* JCREA */}
        <div
          className="
            absolute inset-0
            flex items-center
            transition-all duration-500
            ease-[cubic-bezier(.4,0,.2,1)]
            group-hover:-translate-y-full
            group-hover:opacity-0
          "
        >
          <Image
            src="/images/typo.svg"
            alt="JCREA"
            width={80}
            height={30}
            className="
              object-contain
              max-lg:w-[70px]
              max-sm:w-[70px]
            "
          />
        </div>

        {/* Made by */}
        <div
          className="
            absolute inset-0
            flex flex-col justify-center
            leading-none
            translate-y-full
            opacity-0
            transition-all duration-500
            ease-[cubic-bezier(.4,0,.2,1)]
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span className="text-[9px] uppercase tracking-[0.18em] text-c5/50 max-sm:text-[7px]">
            Made by
          </span>

          <span className="mt-1 text-sm font-semibold text-c5 max-sm:text-xs">
            Jayesh Patil
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
