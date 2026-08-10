import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  image: string;
  href: string;
}

export default function ServiceCard({
  title,
  image,
  href,
}: ServiceCardProps) {
  return (
    <div className="relative w-full max-md:max-w-[300px] max-w-[400px] group">
      {/* CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[35px]
          border
          border-c5
          bg-white/10
          backdrop-blur-md
          transition-all
          duration-300
          group-hover:bg-c1
        "
        style={{
          isolation: "isolate",
          clipPath: `
            polygon(
              0 0,
              100% 0,

              /* RIGHT OUTER CURVE */
              100% 71.5%,
              99.9% 72.8%,
              99.6% 74%,
              99.1% 75%,
              98.3% 75.8%,
              97.3% 76.4%,
              96% 76.7%,
              94.5% 77%,

              /* HORIZONTAL SECTION */
              91% 77%,
              88% 77%,
              85% 77%,
              82% 77%,

              /* INNER CURVE - START EARLIER */
              80% 77.05%,
              78.5% 77.2%,
              77% 77.5%,
              75.5% 78%,
              74% 78.7%,
              72.8% 79.5%,
              71.8% 80.5%,
              71% 81.7%,
              70.5% 83%,
              70.2% 84.5%,
              70% 86%,
              70% 90%,

              /* BOTTOM CURVE - MATCHED */
              69.9% 92%,
              69.6% 94%,
              68.8% 95.8%,
              67.5% 97.2%,
              65.5% 98.3%,
              63% 99.1%,
              60% 99.7%,

              /* BOTTOM */
              55% 100%,
              50% 100%,
              45% 100%,
              40% 100%,
              35% 100%,
              30% 100%,
              25% 100%,
              20% 100%,
              15% 100%,
              10% 100%,
              5% 100%,

              /* LEFT BOTTOM CURVE */
              2% 99.8%,
              0.8% 99.2%,
              0.2% 98%,
              0 96%,

              0 0
            )
          `,
        }}
      >
        {/* HEADER */}
        <div className="px-6 py-10">
          <h3 className="text-2xl font-medium text-c5 max-md:text-xl">
            {title}
          </h3>

          <div className="mt-5 h-px w-full bg-white/20" />
        </div>

        {/* IMAGE */}
        <div className="">
          <Image
            src={image}
            alt={title}
            width={600}
            priority
            fetchPriority="high"
            height={500}
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* BUTTON */}
      <Link
        href={href}
        aria-label={`View ${title}`}
        className="
          absolute
          z-30
          flex
          items-center
          justify-center
        "
        style={{
          right: "6%",
          bottom: "4%",
          width: "20%",
          aspectRatio: "1",
        }}
      >
        <span
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            rounded-full
            bg-c2
            transition-colors
            duration-300
            group-hover:bg-c1
          "
        >
          <ArrowUpRight className="h-[45%] w-[45%] text-white" />
        </span>
      </Link>
    </div>
  );
}