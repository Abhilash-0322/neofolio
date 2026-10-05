import { ReactNode } from "react";

type BrutalBoxProps = {
  children: ReactNode;
  className?: string;
  variant?: "paper" | "lime" | "black" | "yellow";
  shadow?: boolean;
};

const variants = {
  paper: "bg-brutal-paper text-brutal-black",
  lime: "bg-brutal-lime text-brutal-black",
  yellow: "bg-brutal-yellow text-brutal-black",
  black: "bg-brutal-black text-brutal-paper",
};

export function BrutalBox({
  children,
  className = "",
  variant = "paper",
  shadow = true,
}: BrutalBoxProps) {
  return (
    <div
      className={[
        "border-4 border-brutal-black",
        shadow ? "shadow-brutal" : "",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function SectionLabel({
  id,
  index,
  children,
}: {
  id: string;
  index: number;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end gap-3">
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brutal-muted">
        {String(index).padStart(2, "0")}
      </span>
      <h2
        id={id}
        className="font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl"
      >
        {children}
      </h2>
    </div>
  );
}

export function BrutalLink({
  href,
  children,
  external = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={[
        "inline-block border-4 border-brutal-black bg-brutal-yellow px-4 py-2 font-display text-sm font-bold uppercase tracking-wide shadow-brutal transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-[6px] active:translate-y-[6px]",
        className,
      ].join(" ")}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-2 border-brutal-black bg-white px-2 py-0.5 font-body text-xs font-semibold uppercase">
      {children}
    </span>
  );
}
