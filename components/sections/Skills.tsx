import { Section } from "@/components/Section";
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
    <Section id="skills" label="Skills" slide="Slide 04">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-xl border border-line bg-canvas/30 p-6 dark:bg-black/25 md:p-8"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/90">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
