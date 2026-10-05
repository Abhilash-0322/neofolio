type ProjectCardProps = {
  name: string;
  label: string;
  period: string;
  impact: string;
  stack: readonly string[];
  href: string;
  live?: string;
};

export function ProjectCard({
  name,
  label,
  period,
  impact,
  stack,
  href,
  live,
}: ProjectCardProps) {
  return (
    <article className="exhibit-frame exhibit-mat flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="plaque-label">{period}</p>
          <h3 className="headline-serif mt-1 text-2xl text-text">{name}</h3>
          <p className="mt-1 text-sm text-accent">{label}</p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{impact}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 border-t border-frame pt-4">
        <a
          className="text-sm font-medium text-accent hover:underline"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          Source →
        </a>
        {live ? (
          <a
            className="text-sm text-muted hover:text-text"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
