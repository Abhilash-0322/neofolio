import { stats } from "@/data/content";

export function StatsBar() {
  return (
    <section className="border-y border-border/60 bg-white/[0.02] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="font-display text-2xl font-bold text-gradient md:text-3xl">{item.value}</p>
            <p className="mt-1 text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
