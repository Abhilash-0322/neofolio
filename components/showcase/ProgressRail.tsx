"use client";

type ProgressRailProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function ProgressRail({
  count,
  activeIndex,
  onSelect,
}: ProgressRailProps) {
  return (
    <div
      className="fixed right-4 top-1/2 z-[60] flex -translate-y-1/2 flex-col gap-2 md:right-8"
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          className="group flex items-center justify-end gap-2"
          aria-label={`Go to section ${i + 1}`}
        >
          <span
            className={`h-px transition-all duration-500 ${
              i === activeIndex
                ? "w-8 bg-cinema-gold"
                : "w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
