import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          ink: "#b8d4f0",
          chalk: "#e8f4fc",
          line: "#5ba3e8",
          grid: "rgba(91, 163, 232, 0.22)",
          paper: "#0c2340",
          deep: "#071a2e",
          accent: "#f0c674",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plex-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-plex-mono)",
          "ui-monospace",
          "monospace",
        ],
      },
      maxWidth: {
        grid: "72rem",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(91, 163, 232, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 163, 232, 0.18) 1px, transparent 1px)",
        "blueprint-grid-major":
          "linear-gradient(rgba(91, 163, 232, 0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 163, 232, 0.28) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "20px 20px",
        "blueprint-major": "100px 100px",
      },
    },
  },
  plugins: [],
};

export default config;
