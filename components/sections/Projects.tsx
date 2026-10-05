import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" label="Projects" sheetNo="04">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="flex flex-col border border-blueprint-line/35 bg-blueprint-paper/35 p-6 md:p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] text-blueprint-line/60">
                  DWG-{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-mono text-lg font-medium text-blueprint-chalk">
                  {project.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-blueprint-accent">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-blueprint-ink">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-[10px] text-blueprint-line/75">
              {project.stack}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-dashed border-blueprint-line/25 pt-4">
              <a
                href={project.github}
                className="font-mono text-[10px] uppercase tracking-wider text-blueprint-chalk underline-offset-4 hover:text-blueprint-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="font-mono text-[10px] uppercase tracking-wider text-blueprint-chalk underline-offset-4 hover:text-blueprint-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
