"use client";

const BAR_COUNT = 48;

const heights = [
  0.22, 0.45, 0.68, 0.38, 0.82, 0.55, 0.71, 0.29, 0.64, 0.48, 0.76, 0.33,
  0.59, 0.88, 0.41, 0.67, 0.52, 0.79, 0.36, 0.61, 0.44, 0.73, 0.58, 0.31,
  0.85, 0.47, 0.69, 0.54, 0.77, 0.39, 0.62, 0.5, 0.74, 0.28, 0.66, 0.43,
  0.8, 0.57, 0.35, 0.7, 0.46, 0.63, 0.51, 0.78, 0.34, 0.6, 0.72, 0.4,
];

const hues = [
  "bg-studio-accent",
  "bg-studio-violet",
  "bg-studio-rose",
  "bg-studio-amber",
];

export function SpectrumBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-studio-bg via-studio-bg/95 to-studio-bg" />
      <div
        className="absolute bottom-0 left-0 right-0 flex h-[min(42vh,320px)] items-end justify-center gap-[3px] px-4 opacity-[0.12] md:gap-1 md:px-8"
      >
        {Array.from({ length: BAR_COUNT }).map((_, i) => {
          const h = heights[i % heights.length];
          const color = hues[i % hues.length];
          const delay = (i % 12) * 0.12;
          const duration = 2.2 + (i % 5) * 0.35;
          return (
            <div
              key={i}
              className={`w-1 max-w-[6px] flex-1 origin-bottom rounded-t-sm ${color} ${
                i % 2 === 0 ? "animate-bar-pulse" : "animate-bar-pulse-slow"
              }`}
              style={{
                height: `${h * 100}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
        }}
      />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-studio-border to-transparent" />
    </div>
  );
}
