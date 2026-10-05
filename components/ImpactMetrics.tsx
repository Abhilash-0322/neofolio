import { impactMetrics } from "@/lib/data";

export function ImpactMetrics() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {impactMetrics.map((m) => (
        <div key={m.label} className="panel p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
            {m.label}
          </p>
          <p className="metric-value mt-1">{m.value}</p>
          <p className="mt-2 font-mono text-xs text-metric">{m.delta}</p>
          <div className="mt-3 flex h-8 items-end gap-0.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="mini-bar w-full flex-1"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
