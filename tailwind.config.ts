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
        accent: "var(--accent)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glowGreen: "var(--shadow-glow-green)",
        glowViolet: "var(--shadow-glow-violet)",
        glowAccent: "var(--shadow-glow-accent)",
        glass: "var(--shadow-glass)"
      }
    }
  },
  plugins: []
};

export default config;
