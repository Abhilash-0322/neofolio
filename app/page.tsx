import { FadeIn } from "@/components/FadeIn";
import { GlassCard } from "@/components/GlassCard";
import {
  AwsIcon,
  AzureIcon,
  DockerIcon,
} from "@/components/icons/CloudPlatformIcons";
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
    icon: AwsIcon,
    color: "text-amber-400",
  },
  {
    name: "Azure",
    label: "App Service & PostgreSQL deployments",
    icon: AzureIcon,
    color: "text-sky-400",
  },
  {
    name: "Docker",
    label: "Containerized APIs & CI/CD",
    icon: DockerIcon,
    color: "text-blue-400",
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
      {/* Hero */}
      <section className="mb-20">
        <FadeIn>
          <GlassCard strong className="relative overflow-hidden p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
              aria-hidden
            />
            <p className="section-eyebrow mb-4">Cloud & AI Systems</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              {profile.titles.join(" · ")}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-500 hover:to-indigo-500"
              >
                View shipped systems
              </Link>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/30"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* Cloud platforms */}
      <section id="cloud" className="mb-20 scroll-mt-24">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <Cloud className="h-6 w-6 text-cyan-400" />
            <div>
              <p className="section-eyebrow">Infrastructure</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Cloud platforms & delivery
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          {cloudPlatforms.map((platform, i) => (
            <FadeIn key={platform.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-6 transition hover:border-cyan-400/20">
                <platform.icon className={`mb-4 ${platform.color}`} />
                <h3 className="text-lg font-semibold text-white">
                  {platform.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{platform.label}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <GlassCard className="mt-6 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-cyan-300/90">
              <Server className="h-5 w-5" />
              <h3 className="font-semibold text-white">Platform stack</h3>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(
                Object.entries(profile.skills) as [
                  string,
                  string[],
                ][]
              ).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-300/80">
                    {category}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-xs text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                <span className="text-slate-300">Certifications:</span>{" "}
                {profile.certifications.join(" · ")}
              </p>
            </div>
          </GlassCard>
        </FadeIn>
      </section>

      {/* AI Systems */}
      <section id="ai-systems" className="mb-20 scroll-mt-24">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <Bot className="h-6 w-6 text-violet-400" />
            <div>
              <p className="section-eyebrow">Intelligence layer</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                AI systems that ship
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <GlassCard className="h-full p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">
                Agents & orchestration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Multi-agent hiring pipelines, Hermes-based agents, and
                LangChain workflows—designed for real APIs, streaming updates,
                and production guardrails rather than demo-only chatbots.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· TalentInfra — six specialist agents on Azure</li>
                <li>· Spearmint — TTS, fine-tuning, agent features</li>
                <li>· SolSniff — narrative detection & idea generation</li>
              </ul>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GlassCard className="h-full p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">
                RAG & knowledge systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Custom knowledge bases with vector stores, FastAPI backends, and
                Docker-packaged services—built for retrieval accuracy and
                deployable infrastructure.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Quadrant RAG — LangChain + vector DBs</li>
                <li>· Resume Analyzer — production AI feedback</li>
                <li>· Zen Heaven — sentiment & safety flows</li>
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-20 scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Career</p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
            Experience & education
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {profile.experience.map((job, i) => (
            <FadeIn key={job.role + job.company} delay={i * 0.06}>
              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-cyan-200/80">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">
                    {job.period}
                    {job.modality ? ` · ${job.modality}` : ""}
                  </p>
                </div>
                {"summary" in job && job.summary && (
                  <p className="mt-4 text-sm text-slate-400">{job.summary}</p>
                )}
                {"bullets" in job && job.bullets && (
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-400">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {"skills" in job && job.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-violet-500/15 px-2 py-0.5 text-xs text-violet-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </FadeIn>
          ))}
          <FadeIn delay={0.15}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              <ul className="mt-4 space-y-3">
                {profile.education.map((edu) => (
                  <li key={edu.degree} className="text-sm">
                    <span className="text-slate-200">{edu.degree}</span>
                    <span className="text-slate-500"> — {edu.school}</span>
                    {edu.detail && (
                      <span className="text-slate-500"> ({edu.detail})</span>
                    )}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20 scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Production work</p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
            Selected projects
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 4) * 0.05}>
              <GlassCard className="flex h-full flex-col p-6 transition hover:border-indigo-400/25">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white">{project.name}</h3>
                  {"context" in project && project.context && (
                    <span className="shrink-0 text-xs text-violet-300/90">
                      {project.context}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm text-slate-400">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-300/90 hover:text-cyan-200"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-300/90 hover:text-cyan-200"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-20">
        <FadeIn>
          <div className="mb-8 flex items-end gap-3">
            <Award className="h-6 w-6 text-amber-400/90" />
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Recognition
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <GlassCard className="p-6 sm:p-8">
            <ul className="space-y-3">
              {profile.achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-400 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-cyan-400/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <FadeIn>
          <p className="section-eyebrow mb-2">Connect</p>
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
            Contact & profiles
          </h2>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-2">
          <FadeIn>
            <GlassCard strong className="p-6 sm:p-8">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-cyan-200"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <a href={`tel:${profile.phone}`} className="hover:text-cyan-200">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  {profile.location}
                </li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                Open to cloud engineering, backend, and AI systems roles—as well
                as freelance API and deployment work.
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-slate-200">
                <Code2 className="h-5 w-5 text-violet-400" />
                <h3 className="font-semibold">Coding profiles</h3>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {codingProfiles.map((cp) => (
                  <li key={cp.name}>
                    <a
                      href={cp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-400 transition hover:border-cyan-400/25 hover:text-cyan-200"
                    >
                      {cp.name}
                    </a>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </footer>
      </section>
    </main>
  );
}
