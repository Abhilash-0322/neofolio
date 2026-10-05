import { type ReactNode } from "react";

type ShadowVariant = "default" | "pink" | "cyan" | "yellow";

const shadowClass: Record<ShadowVariant, string> = {
  default: "shadow-memphis",
  pink: "shadow-memphis-pink",
  cyan: "shadow-memphis-cyan",
  yellow: "shadow-memphis-yellow",
};

type MemphisCardProps = {
  children: ReactNode;
  className?: string;
  shadow?: ShadowVariant;
  accent?: string;
};

export function MemphisCard({
  children,
  className = "",
  shadow = "default",
  accent,
}: MemphisCardProps) {
  return (
    <div
      className={`relative border-[3px] border-memphis-ink bg-white ${shadowClass[shadow]} ${className}`}
    >
      {accent && (
        <div
          className={`absolute left-0 top-0 h-2 w-full ${accent}`}
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
