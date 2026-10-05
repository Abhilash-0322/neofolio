import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px border border-border bg-border md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col bg-surface/90 p-6 transition-colors hover:bg-panel/80 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold/90">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-muted/80">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4">
              <a
                href={project.github}
                className="link-luxe text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="link-luxe text-sm"
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
