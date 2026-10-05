export function ThemedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {/* Architect studio — daylight */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-[#e8e2d6]" />
        <div className="absolute inset-0 bg-arch-grid-major bg-arch-major opacity-30" />
        <div className="absolute inset-0 bg-arch-grid bg-arch opacity-50" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,var(--arch-surface-glow),transparent_50%)]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35),transparent_35%)]"
        />
      </div>

      {/* Blueprint — night */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-arch-deep" />
        <div className="absolute inset-0 bg-arch-grid-major bg-arch-major opacity-40" />
        <div className="absolute inset-0 bg-arch-grid bg-arch opacity-70" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--arch-surface-glow),transparent_55%)]"
        />
      </div>
    </div>
  );
}
