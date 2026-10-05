import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={`flex flex-col ${
              index % 3 === 0
                ? "sketch-border-lg p-6 shadow-sketch md:p-8"
                : index % 2 === 0
                  ? "sketch-card"
                  : "sketch-card-alt"
            }`}
          >
            <div>
              <h3 className="sketch-title text-2xl md:text-3xl">{project.name}</h3>
              <p className="mt-1 font-sketch text-lg text-ink-faint">
                {project.subtitle}
              </p>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-ink-faint">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-3 border-t-2 border-dashed border-ink/25 pt-4">
              <a
                href={project.github}
                className="sketch-link !text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="sketch-link !text-base"
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
