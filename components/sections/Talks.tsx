import { SectionHeading } from "@/components/SectionHeading";
import { talks } from "@/data/content";

export function Talks() {
  return (
    <section className="bg-stage-black py-20 md:py-28">
      <div className="mx-auto max-w-stage px-6">
        <SectionHeading
          id="talks"
          eyebrow="Session catalog"
          title="SELECTED TALKS"
          subtitle="Conference-style sessions drawn from shipped systems, hackathon wins, and campus leadership—available for meetups, devrels, and university keynotes."
        />

        <ul className="grid gap-6 lg:grid-cols-2">
          {talks.map((talk, index) => (
            <li
              key={talk.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-stage-floor p-6 shadow-podium transition hover:border-stage-gold/40 md:p-8"
            >
              <div className="absolute right-4 top-4 font-display text-6xl text-white/[0.04]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest">
                <span className="rounded bg-stage-gold/15 px-2 py-0.5 font-semibold text-stage-gold">
                  {talk.id}
                </span>
                <span className="text-neutral-500">{talk.track}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-500">{talk.duration}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-500">{talk.level}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight tracking-wide text-white group-hover:text-stage-spotlight md:text-4xl">
                {talk.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {talk.abstract}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {talk.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
