import { Masthead } from "@/components/newspaper/Masthead";
import { ArticleHeadline } from "@/components/newspaper/ArticleHeadline";
import { Byline } from "@/components/newspaper/Byline";
import {
  achievements,
  certifications,
  education,
  experience,
  links,
  projects,
  site,
  skills,
} from "@/data/content";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-ink/40 underline-offset-2 hover:decoration-ink"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Masthead />
      <main className="mx-auto max-w-broadsheet px-4 pb-16 md:px-6">
        {/* Lead story */}
        <article id="lead" className="mb-10">
          <ArticleHeadline
            kicker="Front Page"
            headline={`${site.name} Ships Production AI & Cloud Systems`}
            subhead={site.title}
            size="lead"
          />
          <Byline section="Technology Desk" dateline="Ghaziabad Bureau" />
          <div className="mt-4 columns-1 gap-8 md:columns-2 lg:columns-3">
            <p className="drop-cap mb-4 break-inside-avoid text-justify">
              {site.bio}
            </p>
            <p className="mb-4 break-inside-avoid text-justify">
              <span className="font-semibold small-caps">Focus: </span>
              {site.focusAreas.join(" · ")}.
            </p>
            <p className="mb-4 break-inside-avoid text-justify italic">
              {site.freelanceNote}
            </p>
            <p className="break-inside-avoid text-justify">
              <span className="font-semibold small-caps">Career beat: </span>
              {site.careerInterests.join("; ")}.
            </p>
          </div>
          <p className="mt-4 text-sm">
            <ExternalLink href={site.resumePath}>Download full résumé (PDF)</ExternalLink>
          </p>
        </article>

        <div className="rule-double my-8" />

        {/* Experience & education — three columns */}
        <section id="dispatch" className="mb-10">
          <ArticleHeadline
            kicker="Correspondence"
            headline="From the Field: Experience & Credentials"
            size="section"
          />
          <div className="mt-6 grid gap-0 md:grid-cols-3">
            <div className="column-divider px-0 py-0 md:px-4 md:py-2">
              <h3 className="mb-3 font-headline text-lg font-bold border-b border-rule pb-1">
                Employment
              </h3>
              {experience.map((job) => (
                <div key={job.company} className="mb-6 last:mb-0">
                  <p className="text-[10px] small-caps tracking-wider text-ink/60">
                    {job.period}
                  </p>
                  <h4 className="font-headline text-base font-bold leading-snug">
                    {job.role}
                  </h4>
                  <p className="text-sm font-semibold italic">{job.company}</p>
                  <p className="text-xs text-ink/70">{job.meta}</p>
                  {"summary" in job && job.summary && (
                    <p className="mt-2 text-sm text-justify">{job.summary}</p>
                  )}
                  {"bullets" in job && job.bullets && (
                    <ul className="mt-2 list-disc pl-4 text-sm">
                      {job.bullets.map((b) => (
                        <li key={b} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  )}
                  {"skills" in job && job.skills && (
                    <p className="mt-2 text-xs text-ink/75">
                      {job.skills.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="column-divider mt-8 px-0 md:mt-0 md:px-4 md:py-2">
              <h3 className="mb-3 font-headline text-lg font-bold border-b border-rule pb-1">
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="mb-4">
                  <p className="text-[10px] small-caps tracking-wider text-ink/60">
                    {edu.period}
                  </p>
                  <h4 className="font-headline text-base font-bold">{edu.degree}</h4>
                  <p className="text-sm">{edu.school}</p>
                  {edu.detail && (
                    <p className="mt-1 text-xs text-ink/75">{edu.detail}</p>
                  )}
                </div>
              ))}
              <h3 className="mb-3 mt-8 font-headline text-lg font-bold border-b border-rule pb-1">
                Certifications
              </h3>
              <ul className="text-sm">
                {certifications.map((c) => (
                  <li key={c} className="mb-1">— {c}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 px-0 md:mt-0 md:px-4 md:py-2">
              <h3 className="mb-3 font-headline text-lg font-bold border-b border-rule pb-1">
                In Brief
              </h3>
              <ul className="text-sm leading-snug">
                {achievements.map((a) => (
                  <li key={a} className="mb-3 border-l-2 border-ink/20 pl-3">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="rule-double my-8" />

        {/* Skills */}
        <section id="desk" className="mb-10">
          <ArticleHeadline
            kicker="The Desk"
            headline="Technical Inventory"
            subhead="Languages, platforms, and tooling filed for the record"
            size="section"
          />
          <Byline section="Systems & Tools" />
          <div className="mt-6 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {(
              [
                ["Languages", skills.languages],
                ["Backend", skills.backend],
                ["Frontend", skills.frontend],
                ["Data", skills.data],
                ["Platform", skills.platform],
              ] as const
            ).map(([label, items]) => (
              <div key={label} className="mb-6 break-inside-avoid">
                <h3 className="font-headline text-sm font-bold small-caps tracking-widest border-b border-rule/50 pb-1">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule-double my-8" />

        {/* Projects */}
        <section id="reports" className="mb-10">
          <ArticleHeadline
            kicker="Special Reports"
            headline="Deployed Systems & Field Projects"
            size="section"
          />
          <Byline section="Engineering Wire" dateline="Wire Services" />
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="break-inside-avoid border border-rule/25 bg-white/30 p-4"
              >
                <p className="text-[10px] small-caps tracking-wider text-ink/55">
                  {project.subtitle}
                </p>
                <h3 className="font-headline text-xl font-bold leading-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-justify">{project.description}</p>
                <p className="mt-2 text-xs italic text-ink/70">{project.stack}</p>
                <p className="mt-3 text-sm">
                  <ExternalLink href={project.github}>Source</ExternalLink>
                  {project.live && (
                    <>
                      <span className="mx-2 text-ink/40">|</span>
                      <ExternalLink href={project.live}>Live edition</ExternalLink>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="rule-double my-8" />

        {/* Contact */}
        <section id="classifieds" className="mb-8">
          <ArticleHeadline
            kicker="Classifieds"
            headline="Contact & Correspondence"
            subhead="Employers, collaborators, and clients — inquiries welcome"
            size="section"
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="border-2 border-dashed border-rule/50 p-4">
              <h3 className="font-headline text-lg font-bold small-caps">
                Direct Line
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="underline decoration-ink/40"
                  >
                    {site.email}
                  </a>
                </li>
                <li>Telephone: {site.phone}</li>
                <li>{site.location}</li>
              </ul>
            </div>
            <div className="border-2 border-dashed border-rule/50 p-4">
              <h3 className="font-headline text-lg font-bold small-caps">
                Wire &amp; Profiles
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <li><ExternalLink href={links.github}>GitHub</ExternalLink></li>
                <li><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink></li>
                <li><ExternalLink href={links.x}>X</ExternalLink></li>
                <li><ExternalLink href={links.leetcode}>LeetCode</ExternalLink></li>
                <li><ExternalLink href={links.codeforces}>Codeforces</ExternalLink></li>
                <li><ExternalLink href={links.hackerrank}>HackerRank</ExternalLink></li>
                <li className="col-span-2">
                  <ExternalLink href={links.geeksforgeeks}>GeeksForGeeks</ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="rule-single pt-4 text-center text-[11px] small-caps tracking-widest text-ink/55">
          © {new Date().getFullYear()} {site.name} · The Neofolio Herald · All systems nominal
        </footer>
      </main>
    </>
  );
}
