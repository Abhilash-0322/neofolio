import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="deco-frame deco-frame-inner flex flex-col"
          >
            <div>
              <h3 className="font-display text-2xl text-cream">
                {project.name}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                {project.subtitle}
              </p>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-gold-dim">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-gold/25 pt-4">
              <a
                href={project.github}
                className="deco-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="deco-link"
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
