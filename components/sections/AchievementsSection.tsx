import { achievements } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function AchievementsSection() {
  return (
    <section id="achievements" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-violet">Proof of Legend</p>
          <h2 data-parallax className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Milestones Forged Under Real Constraints</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Every achievement below was earned under pressure &mdash; tight deadlines, fierce competition, and real-world stakes. These aren&apos;t credentials collected; they&apos;re battles won.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {achievements.map((item, idx) => (
            <Reveal key={item} delay={0.06 * idx}>
              <article className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-white/30">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/15 font-mono text-xs text-violet">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
