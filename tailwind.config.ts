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
        navy: {
          950: "#050d18",
          900: "#0a1628",
          800: "#0f2138",
          700: "#152d4a",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e4c65a",
          dim: "#8a7120",
        },
        cream: {
          DEFAULT: "#f0e9dc",
          muted: "#b8aea0",
        },
      },
      fontFamily: {
        display: [
          "var(--font-cormorant)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-josefin)", "Josefin Sans", "sans-serif"],
      },
      maxWidth: {
        grid: "72rem",
      },
      boxShadow: {
        deco: "0 0 0 1px #c9a227, inset 0 0 0 1px #c9a227",
      },
    },
  },
  plugins: [],
};

export default config;
