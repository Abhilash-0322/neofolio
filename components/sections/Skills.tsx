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
      <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }) => (
          <div key={key} className="bg-surface-elevated p-6 md:p-8">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              {label}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-ink">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
