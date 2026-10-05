import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        panel: "var(--panel)",
        ink: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        gold: "var(--accent)",
        "gold-soft": "var(--accent-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        grid: "72rem",
      },
      boxShadow: {
        luxe: "var(--shadow-luxe)",
        crown: "var(--shadow-crown)",
      },
    },
  },
  plugins: [],
};

export default config;
