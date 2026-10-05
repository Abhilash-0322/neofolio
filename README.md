# Abhilash Maurya — Portfolio

A forest-canopy inspired portfolio for Abhilash Maurya, a backend and AI
systems developer. The interface is intentionally quiet and technical:
layered greens, orbital system diagrams, monospace metadata, and a clear
“open to work” signal.

## Stack

- Next.js 14.2 with the App Router
- React 18 and TypeScript
- CSS custom properties for the full visual system
- `lucide-react` for lightweight interface icons
- Light and dark themes with local preference persistence

## Run locally

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:5128](http://localhost:5128).

## Production

```bash
npm run build
npm run start
```

The production server also uses port `5128`. `next lint` is available as a
separate check.

## Structure

- `app/page.tsx` — portfolio content and page composition
- `app/globals.css` — responsive forest-canopy design system
- `components/theme-toggle.tsx` — persisted accessible theme switcher
- `information.txt` — source material for profile, experience, and projects

## Content

Selected project links and contact details are sourced from
`information.txt`. Update that file and the corresponding content constants in
`app/page.tsx` when the portfolio needs new work or experience.
