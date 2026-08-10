import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProfileCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProfileCard = ({
  title,
  description,
  image,
  href,
}: ProfileCardProps) => {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
      </div>

      {/* Title - Always visible on bottom left */}
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6 z-10">
        <h3 className="text-lg font-medium leading-tight text-white sm:text-xl lg:text-2xl">
          {title}
        </h3>
      </div>

      {/* Link button */}
      <Link
        href={href}
        aria-label={`View ${title}`}
        className="
          absolute right-4 top-4
          flex size-12 items-center justify-center
          rounded-full
          border border-c1
          bg-transparent
          text-c1
          transition-all duration-300
          hover:bg-c1
          hover:text-c5
          sm:right-5 sm:top-5
          sm:size-14
          z-20
        "
      >
        <ArrowUpRight
          size={22}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </Link>

      {/* Glass Card - appears on hover */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          translate-y-full
          transition-transform duration-500 ease-out
          group-hover:translate-y-0
          p-4 sm:p-5 lg:p-6
          z-10
        "
      >
        <div
          className="
            rounded-2xl
            bg-black/20
            backdrop-blur-md
            border border-white/30
            shadow-lg
            p-4 sm:p-5 lg:p-6
          "
        >
          <h3
            className="
              text-lg
              font-medium
              leading-tight
              text-white
              sm:text-xl
              lg:text-2xl
              mb-2
            "
          >
            {title}
          </h3>
          <p
            className="
              text-sm
              text-[#FFEAD5]
              sm:text-base
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;