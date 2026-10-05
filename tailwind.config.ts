import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          faint: "var(--color-ink-faint)",
        },
        rule: "var(--color-rule)",
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
        },
        accent: "var(--color-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "72rem",
      },
      typography: {
        DEFAULT: {},
      },
    },
  },
  plugins: [],
};

export default config;
