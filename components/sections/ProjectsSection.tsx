import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-forest-bark">Portfolio</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forest-ink md:text-5xl">
            Shipped systems
          </h2>
          <p className="mt-4 max-w-2xl text-forest-muted">
            Production APIs, agents, and full-stack products—emphasizing cloud deployment and AI
            beyond demos.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <li className="group glass-panel flex h-full flex-col rounded-2xl p-6 transition hover:border-forest-fern/40 hover:bg-forest-surface/90">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-forest-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-forest-fern">{project.label}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-forest-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-forest-mist px-2 py-0.5 text-xs text-forest-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-moss transition hover:text-forest-fern"
                  >
                    GitHub →
                  </a>
                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-muted transition hover:text-forest-ink"
                    >
                      Live demo →
                    </a>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
