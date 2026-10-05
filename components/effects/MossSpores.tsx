"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Spore = {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
};

export function MossSpores() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let spores: Spore[] = [];
    let frame = 0;
    let raf = 0;
    const dark = resolvedTheme === "dark";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 14000);
      spores = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.2 + 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.9,
      }));
    };

    const draw = () => {
      frame += 0.016;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const spore of spores) {
        const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(frame * spore.speed + spore.phase));
        const [r, g, b] = dark ? [124, 184, 122] : [77, 122, 82];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${pulse * (dark ? 0.35 : 0.22)})`;
        ctx.arc(spore.x, spore.y, spore.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-90"
      aria-hidden
    />
  );
}
