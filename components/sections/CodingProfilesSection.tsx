import { codingProfiles } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CodingProfilesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Practice"
        title="Coding profiles"
        description="Algorithms, contests, and daily practice—links from the resume."
        align="center"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {codingProfiles.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <span
              className="inline-block h-2 w-8 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-lavender">
              {p.name}
            </h3>
            <p className="text-sm text-muted">@{p.handle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
