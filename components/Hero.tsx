import { profile } from "@/lib/portfolio";
import { BrutalBox, BrutalLink } from "./ui";

export function SiteHeader() {
  const nav = [
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brutal-black bg-brutal-lime">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#"
          className="font-display text-lg font-black uppercase tracking-tight"
        >
          AM<span className="text-brutal-black/60">.</span>
        </a>
        <nav className="flex flex-wrap gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-2 border-brutal-black bg-brutal-paper px-3 py-1 font-display text-xs font-bold uppercase hover:bg-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <BrutalLink href={profile.resumePath} external={false} className="!py-1.5 !text-xs">
          Resume PDF
        </BrutalLink>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-brutal-black bg-brutal-black text-brutal-paper">
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-12">
        <div className="border-b-4 border-brutal-black p-6 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r-4">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.25em] text-brutal-lime">
            Portfolio · 2026
          </p>
          <h1 className="font-display text-[clamp(2.75rem,12vw,7rem)] font-black uppercase leading-[0.9] tracking-tighter">
            Abhilash
            <br />
            <span className="text-brutal-lime">Maurya</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brutal-paper/90 sm:text-xl">
            {profile.bio}
          </p>
        </div>
        <div className="flex flex-col justify-between bg-brutal-yellow p-6 text-brutal-black sm:p-10 lg:col-span-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest">
              Based in
            </p>
            <p className="mt-2 font-display text-2xl font-black uppercase leading-tight">
              {profile.location}
            </p>
          </div>
          <ul className="mt-8 space-y-2">
            {profile.titles.map((title) => (
              <li
                key={title}
                className="border-l-4 border-brutal-black pl-3 font-display text-sm font-bold uppercase sm:text-base"
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            <BrutalLink href={`mailto:${profile.contact.email}`} external={false}>
              Email
            </BrutalLink>
            <BrutalLink href={profile.contact.github}>GitHub</BrutalLink>
          </div>
        </div>
      </div>
      <BrutalBox
        variant="lime"
        className="mx-auto max-w-7xl border-x-0 border-b-0 !shadow-none"
        shadow={false}
      >
        <p className="px-6 py-4 font-body text-sm font-medium sm:px-10 sm:text-base">
          <span className="font-display font-black uppercase">Focus — </span>
          {profile.focus}
        </p>
      </BrutalBox>
    </section>
  );
}
