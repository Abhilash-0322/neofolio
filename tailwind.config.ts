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
        sans: [
          "var(--font-dm-sans)",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-fraunces)",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        grid: "72rem",
      },
      colors: {
        page: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-fg)",
        muted: "var(--color-muted)",
        line: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        glow: "var(--color-glow)",
      },
      boxShadow: {
        fjord: "0 24px 80px -20px var(--color-shadow)",
      },
    },
  },
  plugins: [],
};

export default config;
