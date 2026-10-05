import { ContentPanel } from "@/components/ContentPanel";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "data", label: "Data" },
  { key: "platform", label: "Platform" },
];

export function Skills() {
  return (
    <ContentPanel id="skills" title="Skills" subtitle="Stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-xl border border-panel-border bg-panel p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              {label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-panel-ink">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </ContentPanel>
  );
}
