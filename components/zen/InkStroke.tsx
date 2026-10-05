export function InkStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 24"
      className={`w-full max-w-xs text-sumi ${className}`}
      aria-hidden
    >
      <path
        className="ink-stroke"
        d="M4 14c40-8 72 10 108 4s64-18 104-6 72 14 100 2"
      />
      <path
        className="ink-stroke"
        style={{ opacity: 0.2 }}
        d="M12 18c36 4 80-6 120 2s56 8 88 0"
      />
    </svg>
  );
}

export function Enso({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`h-16 w-16 text-sumi/25 ${className}`}
      aria-hidden
    >
      <path
        className="ink-stroke"
        strokeWidth={1.5}
        style={{ opacity: 0.5 }}
        d="M40 8c18 0 32 14 32 32s-14 32-32 32S8 58 8 40c0-12 6-22 16-28"
      />
    </svg>
  );
}
