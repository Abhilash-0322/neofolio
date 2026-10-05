import { FadeIn } from "@/components/FadeIn";
import { MemphisCard } from "@/components/MemphisCard";
import { SquiggleDivider } from "@/components/MemphisDecor";
import { profile } from "@/data/profile";
import {
  Award,
  Bot,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Server,
} from "lucide-react";
import Link from "next/link";

const cloudPlatforms = [
  {
    name: "AWS",
    label: "Cloud Practitioner certified",
    bg: "bg-memphis-orange",
    shadow: "yellow" as const,
  },
  {
    name: "Azure",
    label: "App Service & PostgreSQL deployments",
    bg: "bg-memphis-cyan",
    shadow: "pink" as const,
  },
  {
    name: "Docker",
    label: "Containerized APIs & CI/CD",
    bg: "bg-memphis-lime",
    shadow: "cyan" as const,
  },
];

const codingProfiles = [
  { name: "LeetCode", href: profile.links.leetcode },
  { name: "Codeforces", href: profile.links.codeforces },
  { name: "GeeksForGeeks", href: profile.links.geeksforgeeks },
  { name: "HackerRank", href: profile.links.hackerrank },
];

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6">
      <section className="mb-16">
        <FadeIn>
          <MemphisCard shadow="cyan" accent="bg-memphis-pink" className="p-8 sm:p-12">
            <p className="section-eyebrow mb-3">Shipped systems · Cloud · AI</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base font-semibold sm:text-lg">
              {profile.titles.join(" · ")}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-700">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span key={item} className="memphis-tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#projects" className="memphis-btn">
                View projects
              </Link>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="memphis-btn-outline"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </MemphisCard>
        </FadeIn>
      </section>

      <SquiggleDivider className="mb-16 h-6" />

      <section id="cloud" className="mb-16 scroll-mt-24">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <span className="flex h-12 w-12 items-center justify-center border-[3px] border-memphis-ink bg-memphis-yellow">
              <Cloud className="h-6 w-6" />
            </span>
            <div>
              <p className="section-eyebrow">Infrastructure</p>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Cloud platforms & delivery
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          {cloudPlatforms.map((platform, i) => (
            <FadeIn key={platform.name} delay={i * 0.08}>
              <MemphisCard shadow={platform.shadow} className="h-full p-6">
                <div
                  className={`mb-4 inline-block border-2 border-memphis-ink px-3 py-1 text-sm font-bold ${platform.bg}`}
                >
                  {platform.name}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {platform.label}
                </p>
              </MemphisCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <MemphisCard shadow="yellow" className="mt-6 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold">Platform stack</h3>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(
                Object.entries(profile.skills) as [string, string[]][]
              ).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-bold uppercase tracking-wider text-memphis-purple">
                    {category}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="border-2 border-memphis-ink bg-memphis-cream px-2 py-0.5 text-xs font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-[3px] border-dashed border-memphis-ink pt-6">
              <p className="text-sm text-neutral-700">
                <span className="font-bold">Certifications:</span>{" "}
                {profile.certifications.join(" · ")}
              </p>
            </div>
          </MemphisCard>
        </FadeIn>
      </section>

      <section id="ai-systems" className="mb-16 scroll-mt-24">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <span className="flex h-12 w-12 items-center justify-center border-[3px] border-memphis-ink bg-memphis-pink">
              <Bot className="h-6 w-6" />
            </span>
            <div>
              <p className="section-eyebrow">Intelligence layer</p>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                AI systems that ship
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <MemphisCard shadow="pink" className="h-full p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold">
                Agents & orchestration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Multi-agent hiring pipelines, Hermes-based agents, and LangChain
                workflows—designed for real APIs, streaming updates, and
                production guardrails rather than demo-only chatbots.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-medium">
                <li>→ TalentInfra — six specialist agents on Azure</li>
                <li>→ Spearmint — TTS, fine-tuning, agent features</li>
                <li>→ SolSniff — narrative detection & idea generation</li>
              </ul>
            </MemphisCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <MemphisCard shadow="cyan" className="h-full p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold">
                RAG & knowledge systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Custom knowledge bases with vector stores, FastAPI backends, and
                Docker-packaged services—built for retrieval accuracy and
                deployable infrastructure.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-medium">
                <li>→ Quadrant RAG — LangChain + vector DBs</li>
                <li>→ Resume Analyzer — production AI feedback</li>
                <li>→ Zen Heaven — sentiment & safety flows</li>
              </ul>
            </MemphisCard>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="mb-16 scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Career</p>
          <h2 className="mb-8 font-display text-2xl font-extrabold sm:text-3xl">
            Experience & education
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {profile.experience.map((job, i) => (
            <FadeIn key={job.role + job.company} delay={i * 0.06}>
              <MemphisCard
                shadow={i % 2 === 0 ? "yellow" : "default"}
                className="p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {job.role}
                    </h3>
                    <p className="font-semibold text-memphis-purple">
                      {job.company}
                    </p>
                  </div>
                  <p className="border-2 border-memphis-ink bg-memphis-cream px-2 py-1 text-xs font-bold">
                    {job.period}
                    {job.modality ? ` · ${job.modality}` : ""}
                  </p>
                </div>
                {"summary" in job && job.summary && (
                  <p className="mt-4 text-sm text-neutral-700">{job.summary}</p>
                )}
                {"bullets" in job && job.bullets && (
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-neutral-700">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {"skills" in job && job.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span key={s} className="memphis-tag bg-memphis-cyan">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </MemphisCard>
            </FadeIn>
          ))}
          <FadeIn delay={0.15}>
            <MemphisCard shadow="pink" className="p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold">Education</h3>
              <ul className="mt-4 space-y-3">
                {profile.education.map((edu) => (
                  <li key={edu.degree} className="text-sm">
                    <span className="font-bold">{edu.degree}</span>
                    <span className="text-neutral-700"> — {edu.school}</span>
                    {edu.detail && (
                      <span className="text-neutral-600"> ({edu.detail})</span>
                    )}
                  </li>
                ))}
              </ul>
            </MemphisCard>
          </FadeIn>
        </div>
      </section>

      <section id="projects" className="mb-16 scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Production work</p>
          <h2 className="mb-8 font-display text-2xl font-extrabold sm:text-3xl">
            Selected projects
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 4) * 0.05}>
              <MemphisCard
                shadow={
                  (["cyan", "pink", "yellow", "default"] as const)[i % 4]
                }
                className="flex h-full flex-col p-6 transition hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-bold">{project.name}</h3>
                  {"context" in project && project.context && (
                    <span className="shrink-0 border border-memphis-ink bg-memphis-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase">
                      {project.context}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm text-neutral-700">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wide text-memphis-orange"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </MemphisCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <span className="flex h-12 w-12 items-center justify-center border-[3px] border-memphis-ink bg-memphis-orange text-white">
              <Award className="h-6 w-6" />
            </span>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Recognition
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <MemphisCard shadow="yellow" className="p-6 sm:p-8">
            <ul className="space-y-3">
              {profile.achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-neutral-800 before:mt-2 before:h-2 before:w-2 before:shrink-0 before:bg-memphis-pink before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </MemphisCard>
        </FadeIn>
      </section>

      <section id="contact" className="scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Connect</p>
          <h2 className="mb-8 font-display text-2xl font-extrabold sm:text-3xl">
            Contact & profiles
          </h2>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <MemphisCard shadow="cyan" className="p-6 sm:p-8">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="font-semibold hover:underline">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href={`tel:${profile.phone}`} className="font-semibold hover:underline">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {profile.location}
                </li>
              </ul>
              <p className="mt-6 border-l-4 border-memphis-pink pl-3 text-xs text-neutral-700">
                Open to cloud engineering, backend, and AI systems roles—as well
                as freelance API and deployment work.
              </p>
            </MemphisCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <MemphisCard shadow="pink" className="p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                <h3 className="font-display font-bold">Coding profiles</h3>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {codingProfiles.map((cp) => (
                  <li key={cp.name}>
                    <a
                      href={cp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-memphis-ink bg-memphis-lime px-3 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#0D0D0D] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                      {cp.name}
                    </a>
                  </li>
                ))}
              </ul>
            </MemphisCard>
          </FadeIn>
        </div>
        <footer className="mt-16 border-t-[3px] border-memphis-ink pt-8 text-center text-xs font-semibold">
          © {new Date().getFullYear()} {profile.name}. Memphis vibes · Next.js &
          Tailwind.
        </footer>
      </section>
    </main>
  );
}
