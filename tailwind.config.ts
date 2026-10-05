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
          DEFAULT: "#0c2340",
          light: "#14325a",
          dark: "#071628",
        },
        cream: {
          DEFAULT: "#f7f3eb",
          dark: "#ebe4d6",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#ddb84a",
          muted: "#a68b1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-source-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
