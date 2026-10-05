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
        readme: {
          bg: "#0d1117",
          surface: "#161b22",
          border: "#30363d",
          muted: "#8b949e",
          text: "#c9d1d9",
          heading: "#e6edf3",
          link: "#58a6ff",
          accent: "#3fb950",
          badge: "#21262d",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        readme: "52rem",
      },
    },
  },
  plugins: [],
};

export default config;
