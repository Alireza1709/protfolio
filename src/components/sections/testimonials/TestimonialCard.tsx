import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "./testimonial-data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article
      className="
        group
        shrink-0
        w-[340px]
        sm:w-[420px]
        lg:w-[500px]
        min-h-[220px]
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.07]
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.2)]
        p-6
        sm:p-7
        transition-all
        duration-300
        relative
        hover:bg-white/[0.1]
        hover:border-white/20
      "
    >

        <div className="absolute right-4 top-4 flex justify-center items-center rotate-180 gap-1">
            <Image width={15} height={15} src={'/images/vector.svg'} alt='vector' className='max-xl:w-3 max-md:w-2.5 '/>
            <Image width={15} height={15} src={'/images/vector.svg'} alt='vector' className='max-xl:w-3 max-md:w-2.5 '/>
        </div>
      {/* User info */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
            <div className="shrink-0">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="
                    block
                    aspect-square
                    w-16
                    h-16
                    rounded-full
                    object-cover
                    max-lg:w-12
                    max-lg:h-12
                    "
                />
                </div>

        {/* Name + Job + Rating */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="truncate text-sm lgtext-lg font-semibold text-white">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-sm max-lg:text-[13px] text-white/50">
            {testimonial.job}
          </p>

          {/* Rating */}
        </div>
      </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  strokeWidth={0}
                  className="fill-c1 size-5 max-lg:size-4 max-md:size-3.5"
                />
              ))}
            </div>

            <span className="text-sm font-medium text-white/70">
              {testimonial.rating}
            </span>
          </div>

      {/* Comment */}
      <p
        className="
          mt-6
          max-lg:mt-4
          text-sm
          sm:text-[15px]
          leading-7
          text-white/65
        "
      >
        “{testimonial.comment}”
      </p>
    </article>
  );
}