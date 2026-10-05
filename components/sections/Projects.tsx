import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="arena-panel rgb-border-top flex flex-col p-6 md:p-8"
          >
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-arena-heading">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neon-magenta">
                {project.subtitle}
              </p>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-arena-muted">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-xs text-neon-lime">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-arena-border pt-4">
              <a
                href={project.github}
                className="neon-link text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="neon-link text-sm font-semibold"
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
