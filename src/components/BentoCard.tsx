import { type ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a";
  href?: string;
  interactive?: boolean;
};

export function BentoCard({
  children,
  className = "",
  as = "div",
  href,
  interactive = true,
}: BentoCardProps) {
  const base =
    "group relative overflow-hidden rounded-bento border border-surface-border bg-surface-card p-4 sm:p-5 transition-all duration-300 ease-out";
  const motion = interactive
    ? "hover:-translate-y-1 hover:border-white/10 hover:shadow-bento-hover"
    : "";

  const combined = `${base} ${motion} ${className}`;

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${combined} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        {children}
      </a>
    );
  }

  return <div className={combined}>{children}</div>;
}
