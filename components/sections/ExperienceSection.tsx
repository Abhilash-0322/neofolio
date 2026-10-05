import {
  achievements,
  certifications,
  education,
  experience,
} from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-luxury-copper dark:text-luxury-blush/80">
            Background
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-luxury-ink md:text-5xl">
            Experience & recognition
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {experience.map((item, i) => (
              <Reveal key={item.org} delay={i * 0.08}>
                <article className="glass-luxury rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-wider text-luxury-subtle">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-luxury-ink">
                    {item.role}
                  </h3>
                  <p className="text-luxury-copper dark:text-luxury-rose">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-luxury-muted">{item.summary}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <article className="glass-luxury rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-luxury-ink">Education</h3>
                <p className="mt-2 text-luxury-ink/90">{education.degree}</p>
                <p className="text-sm text-luxury-muted">{education.school}</p>
                <p className="mt-1 text-xs text-luxury-subtle">{education.period}</p>
                <p className="mt-2 text-sm text-luxury-muted">{education.prior}</p>
              </article>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <div className="glass-luxury rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-luxury-ink">
                  Certifications
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-luxury-muted">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-luxury-gold">◇</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-luxury rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-luxury-ink">Achievements</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-luxury-muted">
                  {achievements.map((a) => (
                    <li key={a} className="border-l border-luxury-copper/40 pl-4 dark:border-luxury-gold/40">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
