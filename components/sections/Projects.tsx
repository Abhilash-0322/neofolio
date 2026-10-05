import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col bg-surface p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-faint">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-ink-faint">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-line pt-4">
              <a
                href={project.github}
                className="text-sm text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm text-ink underline-offset-4 hover:underline"
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
