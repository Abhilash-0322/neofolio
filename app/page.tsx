import { SiteHeader } from "@/components/site-header";
import {
  achievements,
  certifications,
  codingProfiles,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";
import { ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <section className="py-16 md:py-24">
          <p className="section-kicker flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clinical-vital animate-pulse" />
            Clinical systems · Portfolio 5047
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-ink md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted md:text-xl">
            {profile.titles.join(" · ")}
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-ink-faint">
            <MapPin className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            {profile.location}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-ink shadow-card transition hover:border-clinical-muted hover:shadow-glow"
            >
              <Mail className="h-4 w-4 text-clinical-muted" />
              Email
            </a>
            <a
              href="/abhilash_python.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-sm font-medium text-ink transition hover:shadow-glow"
            >
              Resume (PDF)
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm text-ink-muted transition hover:text-[var(--color-accent)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-surface-border py-16">
          <h2 className="section-kicker">About</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
            {profile.bio}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-surface-border bg-surface-elevated px-3 py-1 text-sm text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 border-t border-surface-border py-16"
        >
          <h2 className="section-kicker">Experience</h2>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <article key={job.role + job.org} className="clinical-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                  {job.org}
                </p>
                {"summary" in job && job.summary && (
                  <p className="mt-3 text-ink-muted">{job.summary}</p>
                )}
                {"skills" in job && job.skills && (
                  <p className="mt-3 text-sm text-ink-faint">
                    {job.skills.join(" · ")}
                  </p>
                )}
                {"bullets" in job && job.bullets && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-ink-muted">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.degree} className="clinical-card">
                <h3 className="font-semibold text-ink">{edu.degree}</h3>
                <p className="text-sm text-ink-muted">{edu.school}</p>
                <p className="mt-2 text-sm text-ink-faint">
                  {edu.period} {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-t border-surface-border py-16"
        >
          <h2 className="section-kicker">Projects</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="clinical-card flex flex-col">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-xs text-ink-faint">
                  {project.stack.join(" · ")}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-1 text-[var(--color-accent-secondary)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-t border-surface-border py-16"
        >
          <h2 className="section-kicker">Skills & credentials</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="clinical-card">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {group.label}
                </h3>
                <p className="mt-3 text-sm text-ink-muted">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-ink-muted"
              >
                {c}
              </li>
            ))}
          </ul>
          <h3 className="section-kicker mt-12">Recognition</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-clinical-vital">▸</span>
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            {codingProfiles.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-accent)] hover:underline"
              >
                {p.label}
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-surface-border py-16"
        >
          <h2 className="section-kicker">Contact</h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Open to cloud, backend, and AI systems roles — and freelance work on
            APIs, deployments, and production AI features.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-ink hover:text-[var(--color-accent)]"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-ink hover:text-[var(--color-accent)]"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-[var(--color-accent)]"
            >
              X / Twitter
            </a>
          </div>
        </section>

        <footer className="border-t border-surface-border pt-8 text-center text-xs text-ink-faint">
          <p>
            {profile.name} · Medical clean / diagnostic dark · Theme persisted via
            next-themes
          </p>
        </footer>
      </main>
    </>
  );
}
