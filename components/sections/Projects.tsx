import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px border border-sol-border bg-sol-border md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col bg-sol-bg p-6 transition-colors hover:bg-sol-bg-alt/40 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium tracking-tight text-sol-emphasis">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-sol-muted">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-sol-fg">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-xs text-sol-green">
              {project.stack}
            </p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-sol-border pt-4">
              <a
                href={project.github}
                className="sol-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="sol-link text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
