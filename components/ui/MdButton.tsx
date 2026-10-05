import clsx from "clsx";
import { RippleHost } from "./RippleHost";

type MdButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "filled" | "tonal" | "outlined" | "text";
  className?: string;
  external?: boolean;
};

export function MdButton({
  children,
  href,
  variant = "filled",
  className,
  external,
}: MdButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center gap-2 rounded-md-full px-6 py-2.5 md-label-large transition-colors duration-200 ease-standard",
    variant === "filled" &&
      "bg-md-primary text-md-on-primary hover:shadow-md-1",
    variant === "tonal" &&
      "bg-md-secondary-container text-md-on-secondary-container",
    variant === "outlined" &&
      "border border-md-outline text-md-primary bg-transparent",
    variant === "text" && "text-md-primary bg-transparent px-4",
    className
  );

  if (href) {
    return (
      <RippleHost
        as="a"
        href={href}
        className={styles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </RippleHost>
    );
  }

  return (
    <RippleHost as="button" className={styles}>
      {children}
    </RippleHost>
  );
}
