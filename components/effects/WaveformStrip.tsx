export function WaveformStrip({ className = "" }: { className?: string }) {
  const points = [
    4, 8, 6, 14, 10, 18, 12, 22, 16, 20, 14, 24, 18, 16, 12, 20, 8, 14, 6,
    10, 12, 18, 14, 22, 16, 12, 8, 6,
  ];
  const max = 24;
  const w = points.length * 4;
  const path = points
    .map((y, i) => {
      const x = i * 4 + 2;
      const py = max - y + 2;
      return `${i === 0 ? "M" : "L"}${x},${py}`;
    })
    .join(" ");

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${max + 4}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={path}
        stroke="url(#wave-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6ee7d6" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
  );
}
