import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col bg-surface/80 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-medium tracking-tight text-primary">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-accent-soft">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-line pt-4">
              <a
                href={project.github}
                className="text-sm text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm text-primary underline-offset-4 hover:text-accent hover:underline"
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
