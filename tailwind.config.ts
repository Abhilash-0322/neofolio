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
        arch: {
          deep: "rgb(var(--arch-deep-rgb) / <alpha-value>)",
          paper: "rgb(var(--arch-paper-rgb) / <alpha-value>)",
          chalk: "rgb(var(--arch-chalk-rgb) / <alpha-value>)",
          ink: "rgb(var(--arch-ink-rgb) / <alpha-value>)",
          line: "rgb(var(--arch-line-rgb) / <alpha-value>)",
          accent: "rgb(var(--arch-accent-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        grid: "72rem",
      },
      backgroundImage: {
        "arch-grid":
          "linear-gradient(var(--arch-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--arch-grid-line) 1px, transparent 1px)",
        "arch-grid-major":
          "linear-gradient(var(--arch-grid-major-line) 1px, transparent 1px), linear-gradient(90deg, var(--arch-grid-major-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        arch: "20px 20px",
        "arch-major": "100px 100px",
      },
    },
  },
  plugins: [],
};

export default config;
