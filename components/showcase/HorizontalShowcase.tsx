"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { showcaseChapters } from "@/data/content";
import { ChapterNav } from "./ChapterNav";
import { ProgressRail } from "./ProgressRail";
import {
  AboutPanel,
  ContactPanel,
  ExperiencePanel,
  OpeningPanel,
  ProjectsPanel,
  SkillsPanel,
} from "./panels";

const SECTION_COUNT = showcaseChapters.length;

export function HorizontalShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, index));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(idx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, scrollToIndex]);

  return (
    <>
      <div className="letterbox top-0" aria-hidden />
      <div className="letterbox bottom-0" aria-hidden />
      <div className="vignette" aria-hidden />
      <div className="film-grain" aria-hidden />

      <div className="fixed left-6 top-[5.5vh] z-[60] hidden text-[10px] uppercase tracking-[0.35em] text-cinema-muted md:block">
        <span className="text-cinema-gold">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="mx-2 text-white/20">/</span>
        <span>{String(SECTION_COUNT).padStart(2, "0")}</span>
      </div>

      <ProgressRail
        count={SECTION_COUNT}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
      />
      <ChapterNav
        chapters={showcaseChapters}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
      />

      <div
        ref={scrollerRef}
        className="flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide"
        role="region"
        aria-label="Portfolio showcase"
      >
        <OpeningPanel />
        <AboutPanel />
        <ExperiencePanel />
        <SkillsPanel />
        <ProjectsPanel />
        <ContactPanel />
      </div>
    </>
  );
}
