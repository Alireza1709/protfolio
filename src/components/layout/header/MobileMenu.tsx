"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navbar.data";
import clsx from "clsx";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { scrollToSection } from "../../../lib/scrollToSection";
import Logo from "../../ui/logo";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveSection(navLinks.map((item) => item.href));

return (
  <div
    className={clsx(
      "hidden max-md:block fixed top-0 left-0 right-0 z-50 bg-c4 p-4 transition-all duration-300",
      open ? "rounded-none" : ""
    )}
  >
    <div className="flex items-center justify-between">
      <a className=""
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#home");
          setOpen(false);
        }}
      >
        <Logo/>
      </a>

      <button
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
        className="relative flex h-10 w-10 items-center justify-center text-c5"
      >
        <Menu
          size={28}
          className={clsx(
            "absolute transition-all duration-300",
            open
              ? "rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />

        <X
          size={28}
          className={clsx(
            "absolute transition-all duration-300",
            open
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          )}
        />
      </button>
    </div>

    <div
      className={clsx(
        " overflow-hidden transition-all duration-500 ",
        open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}
    >

    <div className="border-t border-c1/30 mt-5"></div>

      <nav className="flex flex-col gap-2 px-6 py-6">
        {navLinks.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setOpen(false);
              }}
              className={clsx(
                "relative flex items-center py-3 text-base transition-all duration-300",
                isActive
                  ? "text-c5 font-semibold pl-4"
                  : "text-c5/70 hover:text-c5 pl-4"
              )}
            >
              {isActive && (
                <span className="absolute left-0 h-6 w-1 rounded-full bg-c1" />
              )}

              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  </div>
);

}