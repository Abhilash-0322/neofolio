import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-forge-copper">Portfolio</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-forge-ink md:text-5xl">
            Shipped systems
          </h2>
          <p className="mt-4 max-w-2xl text-forge-muted">
            Production APIs, agents, and full-stack products—emphasizing cloud deployment and AI
            beyond demos.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <li className="group forge-card flex h-full flex-col p-6 transition hover:border-forge-accent/30 hover:bg-forge-concrete/30 dark:hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-forge-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-forge-copper">{project.label}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-forge-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-forge-iron/5 px-2 py-0.5 text-xs text-forge-muted dark:bg-white/5"
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
                    className="text-forge-accent transition hover:text-forge-copper"
                  >
                    GitHub →
                  </a>
                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forge-muted transition hover:text-forge-ink"
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
