export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(45, 212, 191, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(45, 212, 191, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.15), transparent 45%)",
        }}
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-glow/40 to-transparent" />
    </div>
  );
}
