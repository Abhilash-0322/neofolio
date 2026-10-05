import {
  achievements,
  certifications,
  education,
  experience,
  links,
  projects,
  site,
  skills,
} from "@/data/content";
import { ShowcaseFrame } from "./ShowcaseFrame";

export function OpeningPanel() {
  return (
    <ShowcaseFrame id="opening" chapter="Opening" index={0} variant="dark">
      <div className="animate-fade-in space-y-8">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
          Portfolio · Scene I
        </p>
        <h1 className="font-display text-5xl font-medium leading-[1.05] text-cinema-cream md:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="max-w-xl text-lg text-cinema-muted md:text-xl">
          {site.title}
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-cinema-cream/70 md:text-base">
          {site.bio}
        </p>
        <div className="flex flex-wrap items-center gap-6 pt-4">
          <span className="animate-pulseSoft text-xs uppercase tracking-[0.3em] text-cinema-goldDim">
            Scroll sideways →
          </span>
          <span className="text-xs text-cinema-muted">{site.location}</span>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

export function AboutPanel() {
  return (
    <ShowcaseFrame id="about" chapter="About" index={1} variant="warm">
      <div className="space-y-10">
        <header>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
            Scene II — About
          </p>
          <h2 className="mt-4 font-display text-4xl text-cinema-cream md:text-5xl">
            Focus & trajectory
          </h2>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-widest text-cinema-muted">
              Focus areas
            </h3>
            <ul className="space-y-2 text-cinema-cream/90">
              {site.focusAreas.map((area) => (
                <li key={area} className="border-l border-cinema-gold/40 pl-4">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-widest text-cinema-muted">
              Career interests
            </h3>
            <ul className="space-y-2 text-cinema-cream/90">
              {site.careerInterests.map((item) => (
                <li key={item} className="border-l border-cinema-gold/40 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-cinema-muted">{site.freelanceNote}</p>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded border border-cinema-gold/25 px-3 py-1 text-xs text-cinema-gold"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

export function ExperiencePanel() {
  return (
    <ShowcaseFrame id="experience" chapter="Experience" index={2}>
      <div className="space-y-10">
        <header>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
            Scene III — Experience
          </p>
          <h2 className="mt-4 font-display text-4xl text-cinema-cream md:text-5xl">
            Roles & impact
          </h2>
        </header>
        <div className="space-y-10">
          {experience.map((job) => (
            <article
              key={job.company + job.role}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl text-cinema-cream">
                  {job.role}
                </h3>
                <span className="text-xs text-cinema-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-cinema-gold">{job.company}</p>
              <p className="text-xs text-cinema-muted">{job.meta}</p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-cinema-cream/80">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-cinema-cream/80">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-cinema-gold">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="font-display text-lg text-cinema-cream">
                {edu.degree}
              </p>
              <p className="text-sm text-cinema-muted">{edu.school}</p>
              {edu.period && (
                <p className="mt-1 text-xs text-cinema-gold">{edu.period}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

export function SkillsPanel() {
  const groups = Object.entries(skills) as [string, string[]][];

  return (
    <ShowcaseFrame id="skills" chapter="Skills" index={3} variant="dark">
      <div className="space-y-10">
        <header>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
            Scene IV — Skills
          </p>
          <h2 className="mt-4 font-display text-4xl text-cinema-cream md:text-5xl">
            Technical stack
          </h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-2">
          {groups.map(([key, items]) => (
            <div key={key}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-cinema-muted">
                {key}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cinema-cream/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-cinema-muted">
            Recognition
          </h3>
          <ul className="space-y-2 text-sm text-cinema-cream/75">
            {achievements.slice(0, 4).map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

export function ProjectsPanel() {
  return (
    <ShowcaseFrame id="projects" chapter="Projects" index={4} variant="warm">
      <div className="flex h-full max-h-[70vh] flex-col gap-8">
        <header className="shrink-0">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
            Scene V — Projects
          </p>
          <h2 className="mt-4 font-display text-4xl text-cinema-cream md:text-5xl">
            Shipped systems
          </h2>
        </header>
        <div
          className="flex min-h-0 flex-1 gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex w-[min(85vw,22rem)] shrink-0 snap-center flex-col justify-between rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cinema-gold">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cinema-cream">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cinema-cream/75">
                  {project.description}
                </p>
                <p className="mt-4 text-xs text-cinema-muted">{project.stack}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-wider">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-gold hover:text-cinema-cream"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cinema-cream/70 hover:text-cinema-cream"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

export function ContactPanel() {
  const social = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "X", href: links.x },
    { label: "LeetCode", href: links.leetcode },
  ];

  return (
    <ShowcaseFrame id="contact" chapter="Contact" index={5} variant="dark">
      <div className="space-y-12 text-center md:text-left">
        <header>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cinema-gold">
            Scene VI — Contact
          </p>
          <h2 className="mt-4 font-display text-4xl text-cinema-cream md:text-5xl">
            End credits
          </h2>
        </header>
        <p className="max-w-xl text-cinema-muted md:text-lg">
          Open to cloud, AI systems, and backend roles — and selective freelance
          work on APIs, deployments, and production AI.
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-2xl text-cinema-gold transition hover:text-cinema-cream"
          >
            {site.email}
          </a>
          <a
            href={site.resumePath}
            className="inline-flex items-center justify-center rounded border border-cinema-gold/50 px-6 py-3 text-xs uppercase tracking-[0.2em] text-cinema-cream transition hover:bg-cinema-gold/10"
          >
            Download resume
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-cinema-muted transition hover:text-cinema-gold"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-cinema-muted/60">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </ShowcaseFrame>
  );
}
