"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AlleyBackdrop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-concrete-grid bg-concrete opacity-40 dark:opacity-20`}
      />
      <div className="absolute inset-0 bg-alley-glow opacity-0 transition-opacity duration-500 dark:opacity-100" />
      {dark && (
        <>
          <p
            className="font-tag absolute -left-4 top-[18%] rotate-[-12deg] text-[clamp(3rem,12vw,8rem)] leading-none text-spray-magenta/15"
          >
            SHIP
          </p>
          <p
            className="font-tag absolute right-[5%] top-[42%] rotate-[8deg] text-[clamp(2.5rem,10vw,6rem)] leading-none text-spray-cyan/12"
          >
            BUILD
          </p>
          <p
            className="font-tag absolute bottom-[22%] left-[30%] rotate-[-4deg] text-[clamp(2rem,8vw,5rem)] leading-none text-spray-lime/10"
          >
            API
          </p>
        </>
      )}
      {!dark && mounted && (
        <div
          className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-bl from-spray-orange/20 to-transparent"
        />
      )}
    </div>
  );
}
