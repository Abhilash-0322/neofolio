import type { Config } from "tailwindcss";

const config: Config = {
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
        muted: "var(--muted)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        glowGreen: "0 0 24px rgba(111, 255, 94, 0.28)",
        glowViolet: "0 0 24px rgba(166, 122, 255, 0.25)",
        glass: "0 10px 50px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
