import { storySections } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function StorySections() {
  return (
    <section className="section-spacing">
      <div className="container-shell space-y-7">
        {storySections.map((section, idx) => (
          <article
            id={section.id}
            key={section.id}
            data-story-section
            className="glass grid gap-5 rounded-3xl p-6 sm:grid-cols-[180px_1fr] sm:p-8"
          >
            <Reveal>
              <p className={`story-kicker ${idx % 2 === 0 ? "text-green" : "text-violet"}`}>{section.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{section.body}</p>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
