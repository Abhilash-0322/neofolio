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
    <Section id="skills" label="Skills">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }) => (
          <div key={key} className="bg-surface/80 p-6 backdrop-blur-sm md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
