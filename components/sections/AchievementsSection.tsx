import { achievements } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function AchievementsSection() {
  return (
    <section id="achievements" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-violet">Credibility Signals</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Execution Under Real Constraints</h2>
        </Reveal>

        <div className="mt-6 grid gap-3">
          {achievements.map((item, idx) => (
            <Reveal key={item} delay={0.05 * idx}>
              <article className="glass rounded-2xl p-4">
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
