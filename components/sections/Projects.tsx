import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects" slide="Slide 05">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="flex flex-col rounded-xl border border-line bg-canvas/25 p-6 dark:bg-black/20 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  Case {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/85">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-muted">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-line pt-4">
              <a
                href={project.github}
                className="text-sm font-medium text-accent underline-offset-4 hover:underline dark:text-stage-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm font-medium text-accent underline-offset-4 hover:underline dark:text-stage-gold"
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
