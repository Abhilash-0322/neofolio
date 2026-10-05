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
        pink: "var(--pink)",
        lemon: "var(--lemon)",
        text: "var(--text)",
        muted: "var(--muted)",
        soft: "var(--soft)",
        faint: "var(--faint)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glowGreen: "var(--glow-green)",
        glowViolet: "var(--glow-violet)",
        glowPink: "var(--glow-pink)",
        glass: "var(--shadow-glass)"
      }
    }
  },
  plugins: []
};

export default config;
