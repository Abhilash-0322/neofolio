import { SectionHeading } from "@/components/SectionHeading";
import { hackathonTimeline, type TimelineKind } from "@/data/content";

const kindStyles: Record<
  TimelineKind,
  { dot: string; badge: string; label: string }
> = {
  win: {
    dot: "bg-stage-gold ring-stage-gold/30",
    badge: "bg-stage-gold/15 text-stage-gold",
    label: "Winner",
  },
  finalist: {
    dot: "bg-stage-amber ring-stage-amber/30",
    badge: "bg-stage-amber/15 text-stage-amber",
    label: "Finalist",
  },
  patent: {
    dot: "bg-violet-400 ring-violet-400/30",
    badge: "bg-violet-400/15 text-violet-300",
    label: "Patent",
  },
  oss: {
    dot: "bg-emerald-400 ring-emerald-400/30",
    badge: "bg-emerald-400/15 text-emerald-300",
    label: "Open source",
  },
  build: {
    dot: "bg-sky-400 ring-sky-400/30",
    badge: "bg-sky-400/15 text-sky-300",
    label: "Shipped",
  },
};

export function HackathonTimeline() {
  return (
    <section className="border-y border-white/10 bg-stage-floor py-20 md:py-28">
      <div className="mx-auto max-w-stage px-6">
        <SectionHeading
          id="timeline"
          eyebrow="Competition arc"
          title="HACKATHON TIMELINE"
          subtitle="Wins, finals, patents, and projects that stayed live after the buzzer."
        />

        <ol className="relative border-l border-white/10 pl-8 md:pl-12">
          {hackathonTimeline.map((event, i) => {
            const style = kindStyles[event.kind];
            return (
              <li key={`${event.title}-${i}`} className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[2.125rem] flex h-4 w-4 items-center justify-center rounded-full ring-4 md:-left-[3.125rem] ${style.dot}`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time className="font-display text-2xl text-stage-gold">
                    {event.year}
                  </time>
                  {event.month ? (
                    <span className="text-xs uppercase tracking-widest text-neutral-600">
                      {event.month}
                    </span>
                  ) : null}
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${style.badge}`}
                  >
                    {style.label}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-wide text-white md:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-neutral-300">
                  {event.outcome}
                </p>
                <p className="mt-2 max-w-2xl text-sm text-neutral-500">
                  {event.detail}
                </p>
                {event.href ? (
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-stage-amber hover:underline"
                  >
                    View live →
                  </a>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
