import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line/60 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="01"
          title="About"
          subtitle="Employer-ready engineering — APIs, infrastructure, and AI that ships."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-lg border-glow bg-panel/60 p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              {profile.bio}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Focus areas include cloud infrastructure, backend and APIs,
              systems engineering, and AI agents with RAG. Interested in
              cloud-native roles, AI systems, and fintech-oriented engineering —
              and freelance work on APIs, deployments, and production AI
              features.
            </p>
          </div>

          <div className="rounded-lg border-glow bg-panel/40 p-8 font-mono text-sm">
            <dl className="space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-600">
                  Location
                </dt>
                <dd className="mt-1 text-slate-300">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-600">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-teal-glow link-glow"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-600">
                  Phone
                </dt>
                <dd className="text-slate-300">{profile.phone}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
