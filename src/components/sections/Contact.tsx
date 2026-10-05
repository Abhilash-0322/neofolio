import { profile } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 border-t border-term-border/50">
      <div className="mx-auto max-w-5xl">
        <ShellPrompt path="~/bin" command="./contact.sh --send" className="mb-6" />
        <div className="term-window p-4 md:p-6 space-y-4 text-sm md:text-base">
          <p className="term-dim">
            # Professional, employer- and client-ready. Shipped systems, cloud deployment, AI beyond demos.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="border border-term-border p-4 hover:border-term-green/50 hover:bg-term-green/5 transition-colors"
            >
              <span className="term-dim block text-xs">EMAIL</span>
              <span className="text-term-cyan">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="border border-term-border p-4 hover:border-term-green/50 hover:bg-term-green/5 transition-colors"
            >
              <span className="term-dim block text-xs">PHONE</span>
              <span>{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-term-border p-4 hover:border-term-cyan/50 hover:bg-term-cyan/5 transition-colors"
            >
              <span className="term-dim block text-xs">LINKEDIN</span>
              <span className="term-link">Connect</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-term-border p-4 hover:border-term-cyan/50 hover:bg-term-cyan/5 transition-colors"
            >
              <span className="term-dim block text-xs">GITHUB</span>
              <span className="term-link">@Abhilash-0322</span>
            </a>
          </div>
          <p className="pt-4 term-dim text-xs">
            exit 0 — thanks for visiting. Pair with resume: abhilash_python.pdf
          </p>
        </div>
      </div>
    </section>
  );
}
