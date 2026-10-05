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
        text: "var(--text)",
        muted: "var(--muted)",
        glass: "var(--glass-border)",
        chip: "var(--chip-bg)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glowFrost: "0 0 24px color-mix(in srgb, var(--cyan) 32%, transparent)",
        glowGlacier: "0 0 24px color-mix(in srgb, var(--violet) 28%, transparent)",
        glass: "0 10px 50px rgba(14, 90, 138, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
