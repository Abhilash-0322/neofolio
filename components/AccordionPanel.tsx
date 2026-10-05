"use client";

import type { ReactNode } from "react";
import type { SectionId } from "@/lib/content";

type AccordionPanelProps = {
  id: SectionId;
  title: string;
  summary?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function AccordionPanel({
  id,
  title,
  summary,
  isOpen,
  onToggle,
  children,
}: AccordionPanelProps) {
  return (
    <section
      id={id}
      className="scroll-mt-14 border-b border-surface-border last:border-b-0"
    >
      <h2>
        <button
          type="button"
          id={`trigger-${id}`}
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-surface-raised/60 sm:px-6 sm:py-5"
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-surface-border text-xs text-zinc-400 transition-transform ${
              isOpen ? "rotate-90 border-accent/50 text-accent" : ""
            }`}
            aria-hidden
          >
            ›
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold text-zinc-100 sm:text-lg">
              {title}
            </span>
            {summary && !isOpen && (
              <span className="mt-1 line-clamp-2 block text-sm text-zinc-500">
                {summary}
              </span>
            )}
          </span>
        </button>
      </h2>
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`trigger-${id}`}
        hidden={!isOpen}
        className={isOpen ? "block" : "hidden"}
      >
        <div className="border-t border-surface-border/80 px-4 pb-6 pt-2 sm:px-6 sm:pb-8">
          {children}
        </div>
      </div>
    </section>
  );
}
