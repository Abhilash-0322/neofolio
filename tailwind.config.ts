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
        washi: {
          DEFAULT: "#f6f3ec",
          deep: "#ebe6dc",
        },
        sumi: {
          DEFAULT: "#2c2a28",
          muted: "#5c5854",
          faint: "#8a8580",
        },
        moss: {
          DEFAULT: "#6b7f6a",
          light: "#9aab98",
        },
        clay: "#a89f94",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-noto-sans)", "Helvetica Neue", "sans-serif"],
      },
      maxWidth: {
        zen: "42rem",
      },
      letterSpacing: {
        zen: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
