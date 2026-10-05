import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/lib/data";
import { Section } from "@/components/Section";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink underline decoration-rule underline-offset-4 hover:decoration-muted transition-colors"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-20">
        <p className="text-sm text-muted tracking-wide mb-4">{profile.location}</p>
        <h1 className="font-serif text-display text-ink mb-4">{profile.name}</h1>
        <p className="text-lg text-muted font-light mb-8">{profile.title}</p>
        <p className="text-base leading-relaxed text-muted max-w-2xl font-light">
          {profile.bio}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.links.x}>X</ExternalLink>
          <ExternalLink href={profile.links.leetcode}>LeetCode</ExternalLink>
        </div>
      </header>

      <div className="space-y-20">
        <Section id="work" title="Selected work">
          <ul className="space-y-12">
            {projects.map((project) => (
              <li key={project.name} className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-medium text-ink">
                    {project.name}
                    {project.tag && (
                      <span className="ml-2 text-xs font-normal text-muted">
                        — {project.tag}
                      </span>
                    )}
                  </h3>
                  <div className="flex gap-4 text-sm">
                    <ExternalLink href={project.github}>Code</ExternalLink>
                    {project.live && (
                      <ExternalLink href={project.live}>Live</ExternalLink>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed font-light mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-muted/80 tracking-wide">
                  {project.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="space-y-10">
            {experience.map((job) => (
              <li key={job.role + job.org}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-medium text-ink">{job.role}</h3>
                    <p className="text-sm text-muted">{job.org}</p>
                  </div>
                  <p className="text-sm text-muted tabular-nums shrink-0">
                    {job.period}
                    {job.note && (
                      <span className="block text-xs mt-0.5">{job.note}</span>
                    )}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted font-light leading-relaxed list-disc list-inside marker:text-rule">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills & education">
          <div className="space-y-8 text-sm">
            {(
              [
                ["Languages", skills.languages],
                ["Backend", skills.backend],
                ["Frontend", skills.frontend],
                ["Data", skills.data],
                ["Platform", skills.platform],
              ] as const
            ).map(([label, items]) => (
              <div key={label} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <span className="text-muted w-24 shrink-0 text-xs uppercase tracking-widest pt-0.5">
                  {label}
                </span>
                <p className="text-ink font-light">{items.join(", ")}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-rule space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <div>
                  <h3 className="text-sm font-medium text-ink">{edu.degree}</h3>
                  <p className="text-sm text-muted font-light">{edu.school}</p>
                </div>
                <p className="text-sm text-muted">{edu.period || edu.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="recognition" title="Recognition">
          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-4">
                Certifications
              </h3>
              <ul className="space-y-2 text-muted font-light">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-4">
                Highlights
              </h3>
              <ul className="space-y-2 text-muted font-light">
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Open to cloud, backend, and AI systems roles — and freelance work on
            APIs, deployments, and production AI features.
          </p>
          <p className="text-base text-ink">
            <ExternalLink href={`mailto:${profile.email}`}>
              {profile.email}
            </ExternalLink>
            <span className="text-muted mx-3">·</span>
            <span className="text-muted">{profile.phone}</span>
          </p>
        </Section>
      </div>
    </div>
  );
}
