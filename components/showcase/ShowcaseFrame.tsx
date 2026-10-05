import { type ReactNode } from "react";

type ShowcaseFrameProps = {
  id: string;
  chapter: string;
  index: number;
  children: ReactNode;
  variant?: "default" | "dark" | "warm";
};

const variantClasses = {
  default:
    "bg-gradient-to-br from-cinema-panel via-cinema-bg to-cinema-panel",
  dark: "bg-cinema-bg",
  warm:
    "bg-gradient-to-tr from-[#12100e] via-cinema-bg to-[#0f1218]",
};

export function ShowcaseFrame({
  id,
  chapter,
  index,
  children,
  variant = "default",
}: ShowcaseFrameProps) {
  return (
    <section
      id={id}
      data-chapter={chapter}
      data-index={index}
      className={`relative flex h-screen w-screen shrink-0 snap-center snap-always flex-col justify-center overflow-hidden px-8 py-16 md:px-16 lg:px-24 ${variantClasses[variant]}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(201,169,98,0.15) 50%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
