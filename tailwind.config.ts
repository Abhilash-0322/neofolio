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
        ink: "#09111f",
        frost: "#edf4f5",
        glacier: "#b9f2ec",
        electric: "#8ce9dd",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 24px 70px rgba(5, 25, 43, .12)",
      },
    },
  },
  plugins: [],
};

export default config;
