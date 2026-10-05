export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0c1222] to-[#0a0e1a]" />
      <div
        className="absolute -left-1/4 top-0 h-[70vh] w-[70vw] animate-aurora-drift rounded-full bg-violet-600/25 blur-[100px]"
      />
      <div
        className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vw] animate-aurora-pulse rounded-full bg-indigo-500/20 blur-[120px]"
      />
      <div
        className="absolute bottom-0 left-1/3 h-[50vh] w-[55vw] animate-aurora-drift rounded-full bg-cyan-500/15 blur-[110px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12)_0%,_transparent_55%)]"
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
