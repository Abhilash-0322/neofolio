"use client";

export function ForgeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="workshop-grid absolute inset-0 opacity-60 dark:opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute -left-[10%] top-[8%] h-[55vh] w-[120%] animate-ember-pulse animate-spark-drift blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, var(--forge-spark) 0%, transparent 58%)",
        }}
      />
      <div
        className="absolute -right-[15%] top-[25%] h-[50vh] w-[100%] animate-ember-pulse opacity-90 blur-[110px]"
        style={{
          animationDelay: "-4s",
          background:
            "radial-gradient(ellipse at 60% 40%, var(--forge-glow) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[35vh] animate-shimmer blur-[80px]"
        style={{
          background:
            "linear-gradient(to top, var(--forge-spark) 0%, transparent 72%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forge-bg via-transparent to-forge-bg/95" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forge-copper/40 to-transparent dark:via-forge-ember/50"
        aria-hidden
      />
    </div>
  );
}
