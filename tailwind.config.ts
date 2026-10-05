import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0a0b",
          raised: "#141416",
          card: "#1c1c1f",
          border: "#2a2a2e",
        },
        accent: {
          DEFAULT: "#2997ff",
          muted: "#64b5ff",
        },
        text: {
          primary: "#f5f5f7",
          secondary: "#a1a1a6",
          tertiary: "#6e6e73",
        },
      },
      boxShadow: {
        bento: "0 4px 24px rgba(0, 0, 0, 0.45)",
        "bento-hover": "0 12px 40px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        bento: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
