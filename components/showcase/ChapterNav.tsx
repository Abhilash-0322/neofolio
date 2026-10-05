"use client";

type ChapterNavProps = {
  chapters: { id: string; label: string }[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function ChapterNav({
  chapters,
  activeIndex,
  onSelect,
}: ChapterNavProps) {
  return (
    <nav
      className="fixed bottom-[5.5vh] left-1/2 z-[60] hidden -translate-x-1/2 md:flex"
      aria-label="Showcase chapters"
    >
      <ol className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
        {chapters.map((ch, i) => (
          <li key={ch.id}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                i === activeIndex
                  ? "bg-cinema-gold/20 text-cinema-gold"
                  : "text-cinema-muted hover:text-cinema-cream"
              }`}
            >
              {ch.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
