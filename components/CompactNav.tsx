"use client";

import { sections, type SectionId } from "@/lib/content";

type CompactNavProps = {
  openSections: Set<SectionId>;
  onNavigate: (id: SectionId) => void;
};

export function CompactNav({ openSections, onNavigate }: CompactNavProps) {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-surface-border bg-surface/95 backdrop-blur-md"
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-1 overflow-x-auto px-3 py-2 scrollbar-none sm:gap-2 sm:px-4">
        {sections.map(({ id, label, short }) => {
          const isOpen = openSections.has(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              className={`shrink-0 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                isOpen
                  ? "bg-accent/20 text-accent ring-1 ring-accent/40"
                  : "text-zinc-400 hover:bg-surface-raised hover:text-zinc-200"
              }`}
              aria-expanded={isOpen}
              aria-controls={`panel-${id}`}
            >
              <span className="sm:hidden">{short}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
