import { bio, education, focusAreas, profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="About"
        title="Building calm, reliable systems—with a creative streak"
        description="Professional and client-ready. I emphasize shipped systems, cloud deployment, and AI that holds up outside the demo room."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3 rounded-3xl border border-white/80 bg-white/80 p-8 shadow-soft">
          <p className="text-lg leading-relaxed text-muted">{bio}</p>
          <p className="mt-6 text-sm font-medium text-ink">
            Career interests: cloud roles, AI systems, and finance / fintech
            engineering.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="rounded-3xl bg-gradient-to-br from-peach/30 via-blush/20 to-lavender/30 p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-mint/40 bg-mint/15 p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Education
            </h3>
            <p className="mt-2 font-medium text-ink">{education.degree}</p>
            <p className="text-sm text-muted">{education.school}</p>
            <p className="text-sm text-muted">{education.year}</p>
            <p className="mt-3 text-xs text-muted">{education.prior}</p>
          </div>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-dashed border-lavender/50 p-4 text-center text-sm font-semibold text-ink transition hover:bg-white"
          >
            Download PDF resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
