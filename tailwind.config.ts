import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        panel: "var(--panel)",
        green: "var(--green)",
        violet: "var(--violet)",
        cyan: "var(--cyan)",
        magenta: "var(--magenta)",
        text: "var(--text)",
        muted: "var(--muted)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glowGreen: "0 0 24px color-mix(in srgb, var(--green) 35%, transparent)",
        glowViolet: "0 0 24px color-mix(in srgb, var(--violet) 35%, transparent)",
        glowMagenta: "0 0 24px color-mix(in srgb, var(--magenta) 40%, transparent)",
        glass: "0 10px 50px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
