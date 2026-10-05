import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: {
          bg: "var(--arena-bg)",
          surface: "var(--arena-surface)",
          elevated: "var(--arena-elevated)",
          border: "var(--arena-border)",
          text: "var(--arena-text)",
          muted: "var(--arena-muted)",
          heading: "var(--arena-heading)",
        },
        neon: {
          cyan: "var(--neon-cyan)",
          magenta: "var(--neon-magenta)",
          lime: "var(--neon-lime)",
          violet: "var(--neon-violet)",
        },
      },
      fontFamily: {
        display: [
          "var(--font-orbitron)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-rajdhani)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        arena: "76rem",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgb(0 245 255 / 0.35)",
        "neon-magenta": "0 0 20px rgb(255 0 170 / 0.35)",
      },
      backgroundImage: {
        "rgb-sweep":
          "linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta), var(--neon-lime), var(--neon-violet))",
      },
      animation: {
        "rgb-shift": "rgb-shift 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "rgb-shift": {
          from: { filter: "hue-rotate(0deg)" },
          to: { filter: "hue-rotate(35deg)" },
        },
        "pulse-glow": {
          from: { opacity: "0.55" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
