import { ReadmeSection } from "@/components/ReadmeSection";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <ReadmeSection id="projects" title="Projects">
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.name}
            className="rounded-md border border-readme-border bg-readme-bg/30 p-4 md:p-5"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-mono text-base text-readme-heading">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-readme-muted">
                {"// "}
                {project.subtitle}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-readme-text">
              {project.description}
            </p>
            <p className="mt-2 font-mono text-xs text-readme-muted">
              {project.stack}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 font-mono text-sm">
              <a
                href={project.github}
                className="readme-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="readme-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ReadmeSection>
  );
}
