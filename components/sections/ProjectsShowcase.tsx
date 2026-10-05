import { projects } from "@/data/content";

export function ProjectsShowcase() {
  return (
    <section id="work" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-violet-300/90">Case studies</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Recent launches</h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            Selected projects with live deployments, multi-agent AI, and full-stack ownership.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-border bg-gradient-to-b from-violet-950/20 to-transparent p-6 transition hover:border-violet-500/35"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-300/80">
                    {project.label}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-white/5 px-2 py-0.5 text-xs text-violet-100/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-medium">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-violet-200"
                >
                  Source →
                </a>
                {"live" in project && project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-ink"
                  >
                    Live site →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
