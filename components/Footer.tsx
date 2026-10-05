import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-readme-border py-6">
      <div className="mx-auto flex max-w-readme flex-col gap-2 px-4 font-mono text-xs text-readme-muted md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          <span className="text-readme-accent">{"//"}</span> © {new Date().getFullYear()}{" "}
          {site.name}
        </p>
        <p>Licensed under MIT — maintain with care.</p>
      </div>
    </footer>
  );
}
