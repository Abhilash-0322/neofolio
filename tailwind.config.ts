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
        md: {
          primary: "#1a73e8",
          "on-primary": "#ffffff",
          "primary-container": "#d3e3fd",
          "on-primary-container": "#041e49",
          secondary: "#5f6368",
          "on-secondary": "#ffffff",
          "secondary-container": "#e8eaed",
          "on-secondary-container": "#1f1f1f",
          surface: "#fefbff",
          "surface-dim": "#ded8e1",
          "surface-bright": "#fefbff",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f7f2fa",
          "surface-container": "#f3edf7",
          "surface-container-high": "#ece6f0",
          "surface-container-highest": "#e6e0e9",
          "on-surface": "#1f1f1f",
          "on-surface-variant": "#444746",
          outline: "#747775",
          "outline-variant": "#c4c7c5",
          error: "#b3261e",
          tertiary: "#146c2e",
          "tertiary-container": "#c4eed0",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "Arial", "sans-serif"],
        display: ["var(--font-roboto)", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        "md-1":
          "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        "md-2":
          "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)",
        "md-3":
          "0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3)",
        "md-4":
          "0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.3)",
        "md-5":
          "0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "md-xs": "4px",
        "md-sm": "8px",
        "md-md": "12px",
        "md-lg": "16px",
        "md-xl": "28px",
        "md-full": "9999px",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
