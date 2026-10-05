import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/sections/about";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="border-b border-surface-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Production-minded builds beyond demos"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-surface-border bg-surface-elevated p-6 shadow-card transition hover:border-emerald-muted/50 hover:shadow-glow"
            >
              <h3 className="font-display text-lg font-semibold text-ink group-hover:text-[var(--color-accent)]">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="mt-3 space-y-1 text-xs text-ink-faint">
                  {project.highlights.map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 border-t border-surface-border pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-[var(--color-accent)]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-[var(--color-accent)]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
