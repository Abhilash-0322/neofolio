import { storySections } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function StorySections() {
  return (
    <section className="section-spacing">
      <div className="container-shell space-y-0">
        {storySections.map((section, idx) => (
          <div key={section.id} className="relative">
            {/* Visual connector between chapters */}
            {idx > 0 && (
              <div className="mx-auto h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:h-20" />
            )}

            <article
              id={section.id}
              data-story-section
              className="glass relative grid gap-5 rounded-3xl p-6 sm:grid-cols-[200px_1fr] sm:p-8"
            >
              <Reveal>
                <div className="flex items-start gap-3">
                  <span className="chapter-num">{section.chapter}</span>
                  <p className={`story-kicker mt-1 ${idx % 2 === 0 ? "text-green" : "text-violet"}`}>
                    {section.eyebrow}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 data-parallax className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {section.body}
                </p>
                <blockquote className="narrative-quote mt-4">
                  {section.quote}
                </blockquote>
              </Reveal>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
