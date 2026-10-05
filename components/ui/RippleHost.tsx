"use client";

import clsx from "clsx";
import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";

type RippleHostProps = {
  children: ReactNode;
  className?: string;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

type RippleDot = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export function RippleHost({
  children,
  className,
  as = "div",
  href,
  target,
  rel,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: RippleHostProps) {
  const hostRef = useRef<HTMLButtonElement & HTMLAnchorElement & HTMLDivElement>(
    null
  );
  const [ripples, setRipples] = useState<RippleDot[]>([]);

  const spawnRipple = useCallback((event: MouseEvent) => {
    const node = hostRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }, []);

  const handleClick = (event: MouseEvent) => {
    spawnRipple(event);
    onClick?.();
  };

  const shared = clsx("md-ripple-host md-state-layer", className);
  const rippleLayer = ripples.map((r) => (
    <span
      key={r.id}
      className="md-ripple"
      style={{
        width: r.size,
        height: r.size,
        left: r.x,
        top: r.y,
      }}
    />
  ));

  if (as === "a" && href) {
    return (
      <a
        ref={hostRef}
        href={href}
        target={target}
        rel={rel}
        className={shared}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
        {rippleLayer}
      </a>
    );
  }

  if (as === "button") {
    return (
      <button
        ref={hostRef}
        type={type}
        disabled={disabled}
        className={shared}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
        {rippleLayer}
      </button>
    );
  }

  return (
    <div ref={hostRef} className={shared} onClick={handleClick}>
      {children}
      {rippleLayer}
    </div>
  );
}
