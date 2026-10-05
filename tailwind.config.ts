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
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        noir: {
          bg: "var(--noir-bg)",
          wash: "var(--noir-wash)",
          card: "var(--noir-card)",
          ink: "var(--noir-ink)",
          muted: "var(--noir-muted)",
          faint: "var(--noir-faint)",
          rule: "var(--noir-rule)",
          accent: "var(--noir-accent)",
          bar: "var(--noir-bar)",
          "bar-text": "var(--noir-bar-text)",
          spotlight: "var(--noir-spotlight)",
        },
      },
      maxWidth: {
        brief: "68rem",
      },
      boxShadow: {
        dossier:
          "0 1px 0 0 rgb(0 0 0 / 0.12), 0 12px 40px -8px rgb(0 0 0 / 0.25)",
        marquee: "0 0 60px -12px var(--noir-spotlight)",
      },
    },
  },
  plugins: [],
};

export default config;
