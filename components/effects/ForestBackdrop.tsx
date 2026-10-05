"use client";

import { MossSpores } from "./MossSpores";

export function ForestBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <MossSpores />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-canvas via-transparent to-forest-canvas/95" />
      <div
        className="absolute -left-[18%] top-[5%] h-[58vh] w-[130%] animate-canopy-drift animate-light-dapple opacity-70 blur-[85px] dark:opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 25% 45%, var(--forest-fern) 0%, transparent 58%), radial-gradient(ellipse at 75% 35%, var(--forest-moss) 0%, transparent 52%)",
        }}
      />
      <div
        className="absolute -right-[12%] top-[30%] h-[48vh] w-[110%] animate-canopy-drift opacity-40 blur-[90px] dark:opacity-35"
        style={{
          animationDelay: "-8s",
          background:
            "radial-gradient(ellipse at 55% 50%, var(--forest-bark) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-60 blur-[75px] dark:opacity-45"
        style={{
          background:
            "linear-gradient(to top, var(--forest-mist) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(105deg, transparent, transparent 48px, var(--forest-mist) 48px, var(--forest-mist) 49px)",
        }}
      />
    </div>
  );
}
