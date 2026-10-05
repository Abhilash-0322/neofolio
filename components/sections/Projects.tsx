import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="card-vellum flex flex-col p-6 transition-colors duration-200 hover:border-wine/40 md:p-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-medium text-parchment">
                {project.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-wine-light">
                {project.subtitle}
              </p>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-xs text-ink-faint">
              {project.stack}
            </p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-forest-border pt-4">
              <a
                href={project.github}
                className="link-scholar text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="link-scholar text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
