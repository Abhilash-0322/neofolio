import { metrics } from "@/lib/data";

export function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-lg border border-navy/10 bg-white/60 p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
            {m.label}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-gold-muted">
            {m.value}
          </p>
          <p className="mt-1 text-sm text-navy/70">{m.detail}</p>
        </div>
      ))}
    </div>
  );
}
