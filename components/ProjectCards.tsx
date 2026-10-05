import { projects } from "@/lib/data";

export function ProjectCards() {
  return (
    <section aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500"
      >
        Shipped systems · impact readout
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="panel overflow-hidden">
            <div className="panel-header">
              <span className="text-slate-300">{p.name}</span>
              <span className="text-accent2">{p.stack.length} layers</span>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-slate-400">{p.impact}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-grid bg-slate-900/80 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 font-mono text-xs">
                  {p.github && (
                    <a
                      href={p.github}
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      className="text-metric hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between border-l border-grid pl-4 sm:min-w-[120px]">
                <div className="text-right">
                  <p className="metric-value text-2xl">{p.metric}</p>
                  <p className="max-w-[8rem] font-mono text-[10px] leading-tight text-slate-500">
                    {p.metricLabel}
                  </p>
                </div>
                <div
                  className="mt-4 flex h-16 w-full items-end justify-end gap-1"
                  aria-hidden
                >
                  {p.bars.map((h, i) => (
                    <div
                      key={i}
                      className="mini-bar w-2 bg-accent2/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
