import { certifications, education, experience } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-shell space-y-10">
        <header>
          <p className="kicker">01 / experience</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Building useful systems</h2>
        </header>

        <div className="timetable-card rounded-sm p-6 sm:p-8">
          {experience.map((item) => (
            <article key={item.id} className="departure-row">
              <span className="departure-time">{item.period}</span>
              <div>
                <p className="font-display text-base font-semibold text-ink">{item.route}</p>
                <p className="text-muted">{item.role}</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed">{item.summary}</p>
                <p className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-rail/40 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
              <span className="text-right text-[0.7rem] text-brass">{item.platform}</span>
            </article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="timetable-card rounded-sm p-6">
            <p className="kicker">Education</p>
            <ul className="mt-4 space-y-4">
              {education.map((row) => (
                <li key={row.school}>
                  <p className="font-semibold">{row.degree}</p>
                  <p className="text-sm text-muted">{row.school}</p>
                  {row.period ? <p className="font-mono text-xs text-accent">{row.period}</p> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="timetable-card rounded-sm p-6">
            <p className="kicker">Certifications</p>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2">
                  <span className="text-signal">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
