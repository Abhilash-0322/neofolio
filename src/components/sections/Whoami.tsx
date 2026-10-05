import { profile, education, certifications } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

export function Whoami() {
  return (
    <section id="whoami" className="px-4 py-16 border-t border-term-border/50">
      <div className="mx-auto max-w-5xl">
        <ShellPrompt path="~/profile" command="whoami -a" className="mb-6" />
        <div className="term-window p-4 md:p-6 space-y-6 text-sm md:text-base">
          <dl className="grid gap-4 sm:grid-cols-[minmax(8rem,auto)_1fr]">
            <dt className="term-dim">NAME</dt>
            <dd className="text-term-green">{profile.name}</dd>
            <dt className="term-dim">LOCATION</dt>
            <dd>{profile.location}</dd>
            <dt className="term-dim">EMAIL</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="term-link">
                {profile.email}
              </a>
            </dd>
            <dt className="term-dim">PHONE</dt>
            <dd>{profile.phone}</dd>
            <dt className="term-dim">GITHUB</dt>
            <dd>
              <a href={profile.github} className="term-link" target="_blank" rel="noopener noreferrer">
                {profile.github}
              </a>
            </dd>
            <dt className="term-dim">LINKEDIN</dt>
            <dd>
              <a href={profile.linkedin} className="term-link" target="_blank" rel="noopener noreferrer">
                {profile.linkedin}
              </a>
            </dd>
            <dt className="term-dim">X</dt>
            <dd>
              <a href={profile.x} className="term-link" target="_blank" rel="noopener noreferrer">
                {profile.x}
              </a>
            </dd>
            <dt className="term-dim">TITLES</dt>
            <dd>
              <ul className="list-disc list-inside space-y-1 text-term-cyan">
                {profile.titles.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </dd>
          </dl>

          <div>
            <h3 className="text-term-amber mb-2"># education</h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <span className="text-term-green">{e.degree}</span>
                  <span className="term-dim"> — </span>
                  {e.school}
                  {e.period && (
                    <span className="term-dim"> ({e.period})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-term-amber mb-2"># certifications</h3>
            <ul className="list-disc list-inside space-y-1">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
