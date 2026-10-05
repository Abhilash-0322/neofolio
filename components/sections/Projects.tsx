import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px border border-rule bg-rule md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col bg-surface-elevated p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <p className="mt-4 font-sans text-xs text-ink-faint">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-rule pt-4">
              <a
                href={project.github}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 hover:text-accent hover:decoration-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 hover:text-accent hover:decoration-accent"
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
