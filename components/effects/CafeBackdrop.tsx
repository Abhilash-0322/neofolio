"use client";

export function CafeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute -left-[15%] top-[5%] h-[50vh] w-[130%] animate-steam-rise animate-steam-drift blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at 35% 50%, var(--coffee-steam) 0%, transparent 58%)",
        }}
      />
      <div
        className="absolute -right-[10%] top-[20%] h-[45vh] w-[110%] animate-steam-rise opacity-80 blur-[100px]"
        style={{
          animationDelay: "-5s",
          background:
            "radial-gradient(ellipse at 65% 45%, var(--coffee-glow) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[40vh] animate-shimmer blur-[70px]"
        style={{
          background:
            "linear-gradient(to top, var(--coffee-steam) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-bg via-transparent to-coffee-bg/95" />
    </div>
  );
}
