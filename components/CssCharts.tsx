import { stackDistribution, weeklyActivity } from "@/lib/data";

const maxActivity = Math.max(...weeklyActivity.map((d) => d.value));

export function CssCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-panel-border bg-panel-raised p-5">
        <h2 className="text-sm font-medium text-slate-300">
          Weekly commit activity
        </h2>
        <p className="mt-1 text-xs text-slate-500">Last 7 days (index)</p>
        <div
          className="mt-6 flex h-40 items-end justify-between gap-2"
          role="img"
          aria-label="Bar chart of weekly activity"
        >
          {weeklyActivity.map((d) => {
            const heightPct = (d.value / maxActivity) * 100;
            return (
              <div
                key={d.day}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    className="chart-bar w-full max-w-[2.5rem]"
                    style={{ height: `${heightPct}%` }}
                    title={`${d.day}: ${d.value}`}
                  />
                </div>
                <span className="text-[10px] text-slate-500">{d.day}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-xl border border-panel-border bg-panel-raised p-5">
        <h2 className="text-sm font-medium text-slate-300">Stack focus</h2>
        <p className="mt-1 text-xs text-slate-500">Share of recent work</p>
        <ul className="mt-6 space-y-4">
          {stackDistribution.map((row) => (
            <li key={row.label}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-slate-400">{row.label}</span>
                <span className="font-mono text-slate-300">{row.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-panel">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${row.pct}%`,
                    backgroundColor: row.color,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="text-xs font-medium text-slate-500">Uptime trend</h3>
          <div
            className="relative mt-3 h-24 overflow-hidden rounded-lg bg-panel"
            role="img"
            aria-label="CSS line chart approximation"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,45 L25,38 L50,42 L75,28 L100,32 L125,18 L150,22 L175,12 L200,8 L200,60 L0,60 Z"
                fill="url(#lineFill)"
              />
              <polyline
                points="0,45 25,38 50,42 75,28 100,32 125,18 150,22 175,12 200,8"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
