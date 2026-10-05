import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative border-t border-line/60 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="02"
          title="Experience"
          subtitle="Internships and leadership roles building AI systems teams can rely on."
        />

        <div className="relative">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px timeline-line md:left-1/2 md:-ml-px"
            aria-hidden
          />

          <ul className="space-y-12">
            {experience.map((item, i) => (
              <li
                key={`${item.org}-${item.role}`}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" aria-hidden />

                <div className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center md:left-1/2 md:-ml-3">
                  <span
                    className="h-3 w-3 rounded-full border-2 border-teal-glow bg-void shadow-teal-glow"
                  />
                </div>

                <article
                  className={`ml-10 flex-1 rounded-lg border-glow bg-panel/80 p-6 backdrop-blur-sm md:ml-0 ${
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-medium text-slate-100">
                      {item.role}
                    </h3>
                    <time className="font-mono text-xs text-teal-glow/90">
                      {item.period}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-magenta-glow/90">
                    {item.org}
                    {item.type ? ` · ${item.type}` : ""}
                  </p>
                  {item.summary && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {item.summary}
                    </p>
                  )}
                  {item.bullets && (
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-400">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
