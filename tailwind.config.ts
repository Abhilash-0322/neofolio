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
        canvas: "#0a0e17",
        panel: "#111827",
        grid: "#1e293b",
        accent: "#22d3ee",
        accent2: "#a78bfa",
        metric: "#34d399",
        warn: "#fbbf24",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
