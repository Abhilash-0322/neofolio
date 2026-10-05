import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="group flex flex-col rounded-lg border border-studio-border bg-studio-surface/40 p-6 transition-colors hover:border-studio-accent/30 hover:bg-studio-surface/60 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-studio-muted">
                  TRK {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg font-medium tracking-tight text-studio-text">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-studio-accent/80">
                  {project.subtitle}
                </p>
              </div>
              <div
                className="mt-1 flex h-8 items-end gap-0.5 opacity-40 group-hover:opacity-70"
                aria-hidden
              >
                {[10, 18, 12, 22].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-sm spectrum-gradient"
                    style={{ height: h }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-studio-muted">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-[10px] text-studio-muted/90">
              {project.stack}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-studio-border/80 pt-4">
              <a
                href={project.github}
                className="font-mono text-[11px] uppercase tracking-wider text-studio-text underline-offset-4 hover:text-studio-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="font-mono text-[11px] uppercase tracking-wider text-studio-text underline-offset-4 hover:text-studio-accent hover:underline"
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
