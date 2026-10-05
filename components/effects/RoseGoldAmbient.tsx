"use client";

export function RoseGoldAmbient() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 dark:opacity-100 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(232, 180, 184, 0.18), transparent 55%),
            radial-gradient(ellipse 60% 40% at 100% 30%, rgba(212, 175, 55, 0.12), transparent 50%),
            radial-gradient(ellipse 50% 35% at 0% 70%, rgba(183, 110, 121, 0.14), transparent 45%)
          `,
        }}
      />
      <div
        className="absolute inset-0 animate-rose-glow dark:opacity-40 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 80%, rgba(201, 168, 124, 0.2), transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
