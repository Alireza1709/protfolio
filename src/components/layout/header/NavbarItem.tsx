"use client";

import Link from "next/link";
import clsx from "clsx";
import { scrollToSection } from "../../../lib/scrollToSection";

interface NavbarItemProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavbarItem({ href, label, active }: NavbarItemProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
      className={clsx(
        "relative rounded-full px-9 py-4.5 max-lg:px-4.5 max-lg:text-sm text-[17px] max-xl:text-[15px] transition-all duration-300",
        active
          ? "bg-c1 text-c5 font-semibold"
          : "text-c5 font-light after:absolute after:bottom-2 after:left-1/2 after:h-[1.5px] after:w-0 after:-translate-x-1/2 after:bg-c1 after:transition-all after:duration-300 hover:after:w-[60%]"
      )}
    >
      {label}
    </Link>
  );
}