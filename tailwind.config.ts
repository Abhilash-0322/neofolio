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
        paper: "#f7f4ef",
        ink: "#1a1814",
        rule: "#c9c0b4",
        accent: "#8b3a2a",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "Helvetica Neue", "sans-serif"],
      },
      maxWidth: {
        spread: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
