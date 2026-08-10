"use client";

import Image from "next/image";
import NavbarItem from "./NavbarItem";
import { navLinks } from "./navbar.data";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "../../../hooks/useActiveSection";
import Logo from "../../ui/logo";

export default function Navbar() {
  const activeHref = useActiveSection(navLinks.map((item) => item.href));

  return (
    <>
      <header className="fixed left-0 right-0 top-8 z-40 max-md:hidden">
        <div className="mx-auto max-w-[1600px] px-4">
          <nav className="flex h-20 max-xl:h-18 items-center justify-between rounded-full bg-c4 px-2">
            <div className="flex items-center gap-2 ">
              {navLinks.slice(0, 3).map((item) => (
                <NavbarItem
                  key={item.href}
                  {...item}
                  active={item.href === activeHref}
                />
              ))}
            </div>

            <a href="#home" className="flex justify-center items-center pl-8">
              <Logo/>
            </a>

            <div className="flex items-center gap-2">
              {navLinks.slice(3).map((item) => (
                <NavbarItem
                  key={item.href}
                  {...item}
                  active={item.href === activeHref}
                />
              ))}
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}