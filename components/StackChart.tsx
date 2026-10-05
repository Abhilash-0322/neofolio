import { stackDistribution } from "@/lib/data";

export function StackChart() {
  const total = stackDistribution.reduce((a, s) => a + s.pct, 0);

  return (
    <section className="panel" aria-labelledby="stack-heading">
      <div className="panel-header">
        <span id="stack-heading">Focus mix</span>
        <span>100%</span>
      </div>
      <div className="p-4">
        <div
          className="flex h-6 overflow-hidden rounded-md border border-grid"
          role="img"
          aria-label="Stack distribution bar chart"
        >
          {stackDistribution.map((seg) => (
            <div
              key={seg.label}
              className={`${seg.color} opacity-80`}
              style={{ width: `${(seg.pct / total) * 100}%` }}
              title={`${seg.label} ${seg.pct}%`}
            />
          ))}
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stackDistribution.map((seg) => (
            <li key={seg.label} className="flex items-center gap-2 font-mono text-xs">
              <span className={`h-2 w-2 rounded-sm ${seg.color}`} />
              <span className="text-slate-400">{seg.label}</span>
              <span className="ml-auto tabular-nums text-slate-500">{seg.pct}%</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-5 gap-1">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 12 }).map((__, col) => {
              const on = (row + col) % 3 === 0;
              return (
                <div
                  key={`${row}-${col}`}
                  className={`aspect-square rounded-sm ${on ? "bg-accent/25" : "bg-slate-800/50"}`}
                />
              );
            })
          )}
        </div>
        <p className="mt-2 font-mono text-[10px] text-slate-600">
          activity heatmap · illustrative
        </p>
      </div>
    </section>
  );
}
