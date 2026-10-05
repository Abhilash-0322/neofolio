import { Section } from "@/components/Section";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string; code: string }[] = [
  { key: "languages", label: "Languages", code: "LNG" },
  { key: "backend", label: "Backend", code: "BCK" },
  { key: "frontend", label: "Frontend", code: "FRT" },
  { key: "data", label: "Data", code: "DAT" },
  { key: "platform", label: "Platform", code: "PLT" },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills" sheetNo="03">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label, code }) => (
          <div
            key={key}
            className="draw-corners border border-blueprint-line/35 bg-blueprint-paper/40 p-6"
          >
            <div className="flex items-baseline justify-between gap-2">
              <p className="dim-line">{label}</p>
              <span className="font-mono text-[9px] text-blueprint-accent">
                {code}
              </span>
            </div>
            <p className="mt-4 font-mono text-xs leading-relaxed text-blueprint-chalk">
              {skills[key].join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
