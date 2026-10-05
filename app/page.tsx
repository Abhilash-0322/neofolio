import { Masthead } from "@/components/Masthead";
import { PullQuote } from "@/components/PullQuote";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  pullQuotes,
  skills,
} from "@/lib/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Masthead />

      <main className="mx-auto max-w-spread px-6 py-14 md:px-10 md:py-20">
        <section aria-labelledby="lede-heading" className="mb-16 md:mb-24">
          <h2
            id="lede-heading"
            className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60"
          >
            Lede
          </h2>
          <p className="mt-6 max-w-4xl font-display text-3xl leading-snug md:text-4xl">
            Shipped systems for cloud, APIs, and production-minded AI—not demo-day
            fiction.
          </p>
          <div className="mt-10 columns-body">
            <p className="drop-cap mb-5 break-inside-avoid">{profile.bio}</p>
            <p className="mb-5 break-inside-avoid">
              Based in {profile.location}, I work with teams and clients who need
              FastAPI services, Azure or AWS deployments, agent orchestration, and
              retrieval pipelines that survive contact with real users. Campus
              leadership at Innogeeks Club trained me to mentor, review architecture,
              and keep hackathon squads focused on deployable outcomes.
            </p>
            <p className="mb-5 break-inside-avoid">
              Reach me at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-accent/40 underline-offset-2"
              >
                {profile.email}
              </a>{" "}
              or {profile.phone}. Download the full résumé for role-specific depth.
            </p>
          </div>
        </section>

        <section aria-labelledby="recognition-heading" className="editorial-rule pt-16">
          <h2
            id="recognition-heading"
            className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60"
          >
            Recognition
          </h2>
          <ul className="mt-8 grid gap-4 font-sans text-sm md:grid-cols-2">
            {achievements.map((item) => (
              <li key={item} className="border-l-2 border-accent pl-4 leading-snug">
                {item}
              </li>
            ))}
          </ul>
          {pullQuotes.map((pq) => (
            <PullQuote key={pq.attribution} quote={pq.quote} attribution={pq.attribution} />
          ))}
        </section>

        <section
          aria-labelledby="dispatch-heading"
          className="editorial-rule pt-16"
        >
          <h2
            id="dispatch-heading"
            className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60"
          >
            Field dispatch — selected work
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-ink/80">
            Long-form notes on systems I designed, deployed, and defended in review.
          </p>
          <div className="mt-14 space-y-0">
            {projects.map((project, index) => (
              <ProjectCaseStudy key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="cv-heading"
          className="editorial-rule mt-20 grid gap-12 pt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          <div>
            <h2
              id="cv-heading"
              className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60"
            >
              Experience
            </h2>
            <ul className="mt-6 space-y-8">
              {experience.map((job) => (
                <li key={job.role}>
                  <p className="font-display text-xl">{job.role}</p>
                  <p className="font-sans text-sm uppercase tracking-wide text-accent">
                    {job.org}
                  </p>
                  <p className="mt-1 font-sans text-xs text-ink/60">{job.period}</p>
                  <p className="mt-3 text-sm leading-relaxed">{job.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60">
              Education & credentials
            </h2>
            <p className="mt-6 font-display text-xl">{education.degree}</p>
            <p className="font-sans text-sm text-ink/70">{education.school}</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-wide">
              {education.year}
            </p>
            <ul className="mt-8 space-y-2 font-sans text-sm">
              {certifications.map((cert) => (
                <li key={cert}>· {cert}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="font-sans text-xs uppercase tracking-[0.35em] text-ink/60">
              Technical stack
            </h2>
            <dl className="mt-6 space-y-4 font-sans text-sm">
              <div>
                <dt className="uppercase tracking-wide text-ink/50">Languages</dt>
                <dd className="mt-1 font-serif">{skills.languages}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-ink/50">Backend</dt>
                <dd className="mt-1 font-serif">{skills.backend}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-ink/50">Frontend</dt>
                <dd className="mt-1 font-serif">{skills.frontend}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-ink/50">Data</dt>
                <dd className="mt-1 font-serif">{skills.data}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wide text-ink/50">Platform</dt>
                <dd className="mt-1 font-serif">{skills.platform}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-ink">
        <div className="mx-auto flex max-w-spread flex-col gap-2 px-6 py-8 font-sans text-xs uppercase tracking-[0.2em] text-ink/50 md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · Editorial layout</span>
        </div>
      </footer>
    </div>
  );
}
