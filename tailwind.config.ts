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
        paper: {
          DEFAULT: "#FFF8F0",
          dark: "#F5E6D3",
        },
        ink: {
          DEFAULT: "#3D3B39",
          muted: "#6B6560",
          faint: "#9A948C",
        },
        sketch: {
          coral: "#E07A5F",
          sage: "#81B29A",
          sky: "#6B9AC4",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-nunito)",
          "system-ui",
          "sans-serif",
        ],
        sketch: [
          "var(--font-patrick)",
          "cursive",
        ],
      },
      maxWidth: {
        grid: "72rem",
      },
      boxShadow: {
        sketch: "3px 3px 0 0 rgba(61, 59, 57, 0.12)",
        "sketch-sm": "2px 2px 0 0 rgba(61, 59, 57, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
