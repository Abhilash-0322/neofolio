# Neofolio · Neon Tokyo

A story-driven portfolio for Abhilash Maurya, styled as a rain-slick Tokyo
alley: terminal typography, signal colors, glass panels, and an ambient 3D
skill constellation.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS with custom Neon Tokyo design tokens
- Framer Motion + GSAP ScrollTrigger
- React Three Fiber / Drei for the responsive ambient scene

## Run locally

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:5061`. Production start uses
the same port after `npm run build`.

## Verify

```bash
npm run build
```

## Deploy

Optimized for Vercel. The portfolio content lives in `data/content.ts`, while
the visual language is centralized in `app/globals.css`.
