import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#22211f",
        paper: "#f4f0e8",
        cream: "#fbf9f4",
        line: "#d8d1c4",
        rust: "#b54b30",
        olive: "#5f6e47",
      },
      boxShadow: {
        paper: "0 2px 0 rgba(34, 33, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
