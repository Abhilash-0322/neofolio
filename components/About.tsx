import { certifications, education, profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-lab-border px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="01"
          title="About the engineer"
          subtitle="Professional, employer-ready work — shipped systems, cloud deployment, and AI beyond demos."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="card-lab p-8">
            <p className="text-lg leading-relaxed text-lab-ink">{profile.bio}</p>
            <p className="mt-6 text-sm leading-relaxed text-lab-sub">
              Career interests span cloud-native engineering, AI systems, and
              fintech-oriented roles — plus freelance clients who need APIs,
              deployments, or production AI features.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-lab p-6 font-mono text-sm">
              <h3 className="text-xs uppercase tracking-widest text-lab-sub">
                Contact matrix
              </h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-[10px] uppercase text-lab-sub">Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`} className="link-lab">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase text-lab-sub">Phone</dt>
                  <dd className="text-lab-ink">{profile.phone}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase text-lab-sub">GitHub</dt>
                  <dd>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-lab"
                    >
                      Abhilash-0322
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card-lab p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-lab-sub">
                Education
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium text-lab-ink">{e.degree}</p>
                    <p className="text-lab-sub">{e.school}</p>
                    {e.period && (
                      <p className="font-mono text-[10px] text-lab-accent">
                        {e.period}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lab p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-lab-sub">
                Certifications
              </h3>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-lab-ink">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
