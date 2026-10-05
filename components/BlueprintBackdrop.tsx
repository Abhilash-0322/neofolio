export function BlueprintBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <div className="absolute inset-0 bg-blueprint-deep" />
      <div
        className="absolute inset-0 bg-blueprint-grid-major bg-blueprint-major opacity-40"
      />
      <div
        className="absolute inset-0 bg-blueprint-grid bg-blueprint opacity-70"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,163,232,0.12),transparent_55%)]"
      />
    </div>
  );
}
