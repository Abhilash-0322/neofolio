import type { Config } from "tailwindcss";

const config: Config = {
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
          "sans-serif",
        ],
        display: [
          "var(--font-dm-serif)",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        nav: {
          DEFAULT: "#0c0f14",
          muted: "#8b95a8",
          border: "#1e2430",
          accent: "#6ee7b7",
        },
        panel: {
          DEFAULT: "#f4f2ee",
          card: "#ffffff",
          border: "#e4e0d8",
          ink: "#1a1c22",
          muted: "#5c6370",
        },
      },
    },
  },
  plugins: [],
};

export default config;
