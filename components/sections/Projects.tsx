import { ContentPanel } from "@/components/ContentPanel";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <ContentPanel id="projects" title="Projects" subtitle="Selected work">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col rounded-xl border border-panel-border bg-panel p-5 transition hover:border-panel-muted/80"
          >
            <h3 className="text-lg font-semibold text-panel-ink">
              {project.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-panel-muted">
              {project.subtitle}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-panel-muted">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-panel-muted">{project.stack}</p>
            <div className="mt-5 flex flex-wrap gap-4 border-t border-panel-border pt-4">
              <a
                href={project.github}
                className="text-sm font-medium text-panel-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm font-medium text-panel-ink underline-offset-4 hover:underline"
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
    </ContentPanel>
  );
}
