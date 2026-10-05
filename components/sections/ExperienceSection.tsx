import { achievements, experience } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="plaque-label">Timeline</p>
          <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">Experience & recognition</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {experience.map((role, idx) => (
              <Reveal key={role.title} delay={idx * 0.05}>
                <article className="exhibit-frame exhibit-mat">
                  <p className="plaque-label">{role.period}</p>
                  <h3 className="mt-2 text-lg font-medium text-text">{role.title}</h3>
                  <p className="text-sm text-accent">{role.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{role.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="exhibit-frame exhibit-mat h-full">
              <p className="plaque-label">Honors</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {achievements.map((item) => (
                  <li key={item} className="border-l-2 border-accent/40 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
