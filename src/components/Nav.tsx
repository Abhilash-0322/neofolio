const links = [
  { href: "#boot", label: "boot" },
  { href: "#whoami", label: "whoami" },
  { href: "#experience", label: "experience.log" },
  { href: "#projects", label: "projects/" },
  { href: "#skills", label: "man skills" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-term-border bg-term-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 text-xs md:text-sm">
        <a href="#boot" className="term-prompt font-semibold">
          ~/neofolio
        </a>
        <ul className="flex flex-wrap justify-end gap-x-3 gap-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="term-dim hover:text-term-cyan transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
