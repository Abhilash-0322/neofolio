import { BentoCard } from "./BentoCard";
import type { Project } from "@/lib/data";

type ProjectCellProps = {
  project: Project;
  large?: boolean;
};

export function ProjectCell({ project, large }: ProjectCellProps) {
  return (
    <BentoCard
      as="article"
      interactive={false}
      className={`flex flex-col ${large ? "min-h-[220px] sm:min-h-[260px]" : "min-h-[180px]"}`}
    >
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight text-text-primary sm:text-lg">
            {project.name}
          </h3>
          <div className="flex shrink-0 gap-2 text-xs">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-1 text-text-secondary transition hover:bg-white/5 hover:text-accent"
            >
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-2 py-1 text-text-secondary transition hover:bg-white/5 hover:text-accent"
              >
                Live
              </a>
            )}
          </div>
        </div>
        <p className="mb-3 flex-1 text-sm leading-snug text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-raised px-2 py-0.5 text-[10px] uppercase tracking-wide text-text-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
