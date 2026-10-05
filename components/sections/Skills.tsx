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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }, index) => (
          <div
            key={key}
            className={`surface sticker-tilt p-6 shadow-sticker md:p-8 ${
              index === 2 ? "lg:col-span-1" : ""
            }`}
          >
            <p className="label-stencil">{label}</p>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text))]">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
