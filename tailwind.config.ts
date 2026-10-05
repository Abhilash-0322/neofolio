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
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        brass: "var(--brass)",
        rail: "var(--rail)",
        signal: "var(--signal)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        ticket: "var(--shadow-ticket)",
        lamp: "var(--shadow-lamp)"
      }
    }
  },
  plugins: []
};

export default config;
