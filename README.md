# Abhilash Maurya — Portfolio

A Slate museum-inspired portfolio for Abhilash Maurya, a backend and AI systems developer. The site presents selected systems, experience, toolkit, and availability in a deliberately editorial, archive-like layout.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS / PostCSS
- CSS custom properties for the light and dark themes

## Run locally

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5135](http://localhost:5135).

## Production build

```bash
npm run build
npm run start
```

The theme toggle stores the preference in `localStorage`. The site does not require a database, API keys, or a dev server at build time.

## Content

Project and profile details are sourced from `information.txt`. Update the project and experience arrays in `app/page.tsx` when the portfolio content changes.
