import { Section } from "@/components/Section";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string; tint: string }[] = [
  { key: "languages", label: "Languages", tint: "from-studio-accent/20" },
  { key: "backend", label: "Backend", tint: "from-studio-violet/20" },
  { key: "frontend", label: "Frontend", tint: "from-studio-rose/20" },
  { key: "data", label: "Data", tint: "from-studio-amber/20" },
  { key: "platform", label: "Platform", tint: "from-studio-accent/15" },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label, tint }) => (
          <div
            key={key}
            className={`rounded-lg border border-studio-border bg-gradient-to-br ${tint} to-studio-surface/80 p-6 md:p-8`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              {label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-studio-dim">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
