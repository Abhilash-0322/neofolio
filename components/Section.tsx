import { ReactNode } from "react";
import { DecoDivider } from "@/components/DecoDivider";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`deco-section-rule py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <p className="deco-eyebrow">{label}</p>
          <DecoDivider />
        </header>
        {children}
      </div>
    </section>
  );
}
