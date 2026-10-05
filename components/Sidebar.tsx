import { sidebarMetrics } from "@/lib/data";

const navItems = [
  { label: "Overview", active: true },
  { label: "Projects", active: false },
  { label: "Deployments", active: false },
  { label: "Analytics", active: false },
  { label: "Settings", active: false },
];

function trendColor(trend: "up" | "down" | "neutral") {
  if (trend === "up") return "text-emerald-400";
  if (trend === "down") return "text-amber-400";
  return "text-slate-500";
}

export function Sidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-panel-border bg-panel-raised">
      <div className="border-b border-panel-border px-5 py-5">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
          Neofolio
        </p>
        <h1 className="mt-1 text-lg font-semibold text-white">Admin</h1>
        <p className="mt-0.5 text-xs text-slate-400">Abhilash Maurya</p>
      </div>

      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              item.active
                ? "bg-accent/15 text-accent-glow"
                : "text-slate-400 hover:bg-panel-border/40 hover:text-slate-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-panel-border p-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
          Metrics
        </p>
        <ul className="space-y-3">
          {sidebarMetrics.map((m) => (
            <li key={m.label}>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs text-slate-400">{m.label}</span>
                <span className={`text-[10px] ${trendColor(m.trend)}`}>
                  {m.delta}
                </span>
              </div>
              <p className="font-mono text-lg font-semibold text-white">
                {m.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
