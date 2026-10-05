# Abhilash Maurya — Portfolio

An industrial, Rust-foundry inspired portfolio for Abhilash Maurya, built with Next.js 14, React, TypeScript, and custom CSS. It presents shipped backend, AI, and cloud systems with a responsive layout and a persisted dual-theme toggle.

## Run locally

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5142](http://localhost:5142).

## Production build

```bash
npm run build
npm run start
```

## Stack

- Next.js 14 App Router
- React 18 + TypeScript
- CSS custom properties for dark/light themes
- CSS-only visual system: no image or icon dependencies

## Project structure

```text
app/
  globals.css   # theme tokens, layout, responsive visual system
  layout.tsx    # metadata and root shell
  page.tsx      # portfolio content and interactions
```
