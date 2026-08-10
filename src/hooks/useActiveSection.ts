"use client";

import { useEffect, useState } from "react";

export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState(hrefs[0]);

  useEffect(() => {
    const ids = hrefs.map((href) => href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActive(hrefs[0]);
      }
    };

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hrefs]);

  return active;
}