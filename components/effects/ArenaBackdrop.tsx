export function ArenaBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 scanlines opacity-80" />
      <div
        className="absolute -left-1/4 top-0 h-[55vh] w-[70vw] rounded-full opacity-30 blur-3xl dark:opacity-45"
        style={{
          background:
            "radial-gradient(circle, var(--neon-violet) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[50vh] w-[65vw] rounded-full opacity-25 blur-3xl dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[40vh] w-[40vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl dark:opacity-35"
        style={{
          background:
            "radial-gradient(circle, var(--neon-magenta) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-rgb-sweep opacity-60" />
    </div>
  );
}
