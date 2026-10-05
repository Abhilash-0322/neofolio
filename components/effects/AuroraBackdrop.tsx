"use client";

import { Starfield } from "./Starfield";

export function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]/95" />
      <div
        className="absolute -left-[20%] top-[8%] h-[55vh] w-[140%] animate-aurora-shift animate-aurora-pulse opacity-60 blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(45,212,191,0.55) 0%, transparent 55%), radial-gradient(ellipse at 70% 40%, rgba(34,211,238,0.4) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute -right-[15%] top-[25%] h-[50vh] w-[120%] animate-aurora-shift opacity-50 blur-[90px]"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(167,139,250,0.5) 0%, transparent 55%), radial-gradient(ellipse at 40% 60%, rgba(232,121,249,0.35) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[45vh] opacity-70 blur-[70px]"
        style={{
          background:
            "linear-gradient(to top, rgba(45,212,191,0.25) 0%, rgba(34,211,238,0.12) 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(15,23,42,0.4),transparent_70%)]" />
    </div>
  );
}
