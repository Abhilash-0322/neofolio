import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#13110f",
          900: "#1d1a17",
          800: "#302b25",
          700: "#554b41",
          600: "#766b5e",
          500: "#9a8e7e",
          300: "#d8cfc1",
          200: "#e7dfd4",
          100: "#f3eee7",
          50: "#faf8f4",
        },
        ledger: {
          green: "#2f6657",
          amber: "#c67b39",
          red: "#b85c4b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
