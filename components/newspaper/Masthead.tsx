import { site } from "@/data/content";
import { Dateline } from "./Dateline";

export function Masthead() {
  return (
    <header className="mx-auto max-w-broadsheet px-4 pt-6 md:px-6">
      <p className="text-center text-[10px] small-caps tracking-[0.25em] text-ink/70 md:text-xs">
        Vol. I · Portfolio Edition · Est. 2023 · {site.location}
      </p>
      <div className="rule-double my-2 py-3">
        <h1 className="font-masthead text-center text-5xl leading-none text-ink md:text-7xl lg:text-8xl">
          The Neofolio Herald
        </h1>
        <p className="mt-2 text-center font-headline text-sm font-semibold italic tracking-wide md:text-base">
          {site.title} — Systems, Cloud & Intelligence
        </p>
      </div>
      <Dateline />
      <nav
        className="rule-single flex flex-wrap justify-center gap-x-4 gap-y-1 py-2 text-[11px] small-caps tracking-widest"
        aria-label="Sections"
      >
        {[
          { href: "#lead", label: "Lead Story" },
          { href: "#dispatch", label: "Dispatch" },
          { href: "#desk", label: "The Desk" },
          { href: "#reports", label: "Field Reports" },
          { href: "#classifieds", label: "Classifieds" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="rule-double mb-6" />
    </header>
  );
}
