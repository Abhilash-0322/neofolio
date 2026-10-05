# Abhilash Maurya — Portfolio

An ice-blue, clinical portfolio for Abhilash Maurya: backend and AI systems
engineering, cloud deployments, agent workflows, and production-minded
full-stack work.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS with custom light/dark design tokens
- Framer Motion + GSAP ScrollTrigger
- React Three Fiber / Drei for the ambient skill constellation

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5127](http://localhost:5127).

The navigation includes a light/dark theme switcher. The preference is saved
in `localStorage` under `neofolio-theme`.

## Production

```bash
npm run build
npm run start
```

The app is ready for Vercel or any Node.js host. The default production
command uses the same port convention:

```bash
PORT=5127 npm run start
```
