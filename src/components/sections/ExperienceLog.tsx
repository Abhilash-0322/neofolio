import { experience, achievements } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

export function ExperienceLog() {
  return (
    <section id="experience" className="px-4 py-16 border-t border-term-border/50">
      <div className="mx-auto max-w-5xl">
        <ShellPrompt path="/var/log" command="tail -f experience.log" className="mb-6" />
        <div className="term-window p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed space-y-8">
          {experience.map((job, idx) => (
            <article key={idx} className="border-l-2 border-term-cyan/40 pl-4">
              <p className="text-term-muted">
                [{job.meta.split("·")[0]?.trim() || job.meta}]
              </p>
              <p className="text-term-green text-base md:text-lg mt-1">
                {job.role} @ {job.company}
              </p>
              <p className="term-dim mt-1">{job.meta}</p>
              {job.skills && (
                <p className="mt-2">
                  <span className="text-term-amber">skills:</span> {job.skills}
                </p>
              )}
              {job.summary && <p className="mt-2 text-term-text/90">{job.summary}</p>}
              {job.bullets && (
                <ul className="mt-3 space-y-1 list-none">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <span className="text-term-green">→</span> {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="border-t border-term-border pt-6">
            <h3 className="text-term-amber mb-3">## achievements & recognition</h3>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a}>
                  <span className="text-term-cyan">*</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
