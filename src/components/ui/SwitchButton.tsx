
"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

interface SwitchButtonProps {
  items: {
    label: string;
    href: string;
  }[];
  defaultActive?: number;
}

export default function SwitchButton({
  items,
  defaultActive = 0,
}: SwitchButtonProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="inline-flex items-center rounded-full border p-2 border-white/50 bg-white/10 backdrop-blur-md">
      {items.map((item, index) => {
        const isActive = active === index;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActive(index)}
            className={clsx(
              "relative flex flex-1 items-center justify-center gap-2 rounded-full transition-all duration-300",
              "px-5 py-2.5 text-xl",
              "max-md:px-3 max-md:py-2 max-md:text-sm",
              isActive
                ? "text-white font-medium"
                : "text-white/80 font-light"
            )}
          >
            {/* Active Background */}
            {isActive && (
              <div
                className="absolute inset-0 rounded-full bg-c1"
                style={{
                  animation: "switch-active 0.3s ease-out",
                }}
              />
            )}

            <span className="relative z-10 whitespace-nowrap">
              {item.label}
            </span>

            <div className="relative z-10 flex h-5 w-5 items-center justify-center">
              {isActive && (
                <div
                  className="flex items-center justify-center"
                  style={{
                    animation: "switch-icon 0.2s ease-out",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

