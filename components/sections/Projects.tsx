import { Section } from "@/components/Section";
import { projects } from "@/data/content";

const linkClass =
  "text-sm text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px border border-border bg-divider md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col bg-surface p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-accent/90">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4">
              <a
                href={project.github}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className={linkClass}
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
