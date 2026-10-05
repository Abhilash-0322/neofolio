import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={`surface sticker-tilt flex flex-col p-6 shadow-sticker-lg md:p-8 ${
              index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl tracking-wide text-[rgb(var(--text))]">
                  {project.name}
                </h3>
                <p className="mt-1 font-tag text-sm text-[rgb(var(--accent))]">
                  {project.subtitle}
                </p>
              </div>
              <span
                className="font-display text-4xl leading-none text-[rgb(var(--border))]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
              {project.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
              {project.stack}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 border-t-2 border-[rgb(var(--border))] pt-4">
              <a href={project.github} className="link-tag text-sm" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {project.live && (
                <a href={project.live} className="link-tag text-sm" target="_blank" rel="noopener noreferrer">
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
