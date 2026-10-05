import { certifications, experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Where I’ve been shipping"
        description="Internships, club leadership, and the kind of work that mixes mentorship with hands-on architecture."
      />

      <div className="mt-12 space-y-6">
        {experience.map((job) => (
          <article
            key={job.role + job.org}
            className="rounded-3xl border border-white bg-white/90 p-8 shadow-soft transition hover:shadow-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="text-muted">{job.org}</p>
              </div>
              <span className="rounded-full bg-sky/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
                {job.meta}
              </span>
            </div>
            {"summary" in job && job.summary ? (
              <p className="mt-4 text-muted">{job.summary}</p>
            ) : null}
            {"skills" in job && job.skills ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-lavender/20 px-3 py-1 text-xs font-medium text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}
            {"bullets" in job && job.bullets ? (
              <ul className="mt-4 space-y-2 text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-peach">✦</span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-lavender/25 to-mint/25 p-8">
        <h3 className="font-display text-lg font-semibold text-ink">
          Certifications
        </h3>
        <ul className="mt-4 flex flex-wrap gap-3">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-ink shadow-soft"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
