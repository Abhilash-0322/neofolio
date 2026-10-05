import { skillsMan, codingProfiles } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

function ManSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-term-green font-bold uppercase tracking-wide">{title}</h3>
      <p className="mt-2 pl-4 term-dim leading-relaxed">
        {items.join(", ")}
      </p>
    </div>
  );
}

export function SkillsMan() {
  return (
    <section id="skills" className="px-4 py-16 border-t border-term-border/50">
      <div className="mx-auto max-w-5xl">
        <ShellPrompt path="/usr/share/man" command="man skills" className="mb-6" />
        <div className="term-window p-4 md:p-8 text-sm md:text-base">
          <pre className="text-term-amber text-center mb-8 hidden sm:block">
            SKILLS(1)                  User Commands                  SKILLS(1)
          </pre>
          <p className="term-dim mb-6">NAME — technical skills from resume</p>
          <ManSection title="Languages" items={skillsMan.languages} />
          <ManSection title="Backend" items={skillsMan.backend} />
          <ManSection title="Frontend" items={skillsMan.frontend} />
          <ManSection title="Data" items={skillsMan.data} />
          <ManSection title="Platform" items={skillsMan.platform} />

          <div className="mt-10 pt-6 border-t border-term-border">
            <h3 className="text-term-amber mb-3">CODING PROFILES</h3>
            <ul className="space-y-2">
              {codingProfiles.map((cp) => (
                <li key={cp.label}>
                  <span className="text-term-green w-28 inline-block">{cp.label}</span>
                  <a href={cp.url} className="term-link break-all" target="_blank" rel="noopener noreferrer">
                    {cp.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
