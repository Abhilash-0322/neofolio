import { Section } from "@/components/Section";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" index="V" label="Selected work">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="dossier-card flex flex-col p-6 md:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-lg font-medium text-slate-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                  {project.subtitle}
                </p>
              </div>
              {project.fintechRelevant && (
                <span className="shrink-0 border border-trust-gold/50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-trust-gold">
                  Fintech
                </span>
              )}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
              {project.description}
            </p>
            <p className="mt-4 text-xs text-slate-500">{project.stack}</p>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-rule pt-4">
              <a
                href={project.github}
                className="text-sm text-slate-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm text-slate-ink underline-offset-4 hover:underline"
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
