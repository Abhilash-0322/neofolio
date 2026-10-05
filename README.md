# Abhilash Maurya — Portfolio

A monochrome, photo-led portfolio for Abhilash Maurya, a backend and AI systems developer.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- CSS custom properties with light/dark theme switching

## Run locally

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5125](http://localhost:5125).

## Production

```bash
npm run build
npm start
```

The production server also uses port `5125`. No API keys or environment variables are required.

## Notes

- Theme is toggled from the header and persists for the current page session.
- The hero image is loaded from Unsplash and displayed in a grayscale treatment.
- Portfolio source material lives in `information.txt`.
