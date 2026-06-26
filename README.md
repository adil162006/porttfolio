# Mohd Adil Shaikh — Portfolio

A dark, editorial-style single-page portfolio built with React + Vite.

## Stack

- React 18 + Vite 5
- Plain CSS (no framework) using CSS custom properties for the design tokens
- Fonts: Instrument Serif (display), Inter Tight (body), JetBrains Mono (labels/nav) — loaded via Google Fonts in `index.html`

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/content.js     ← all resume content lives here (edit this to update copy)
  components/         ← Nav, Hero, Marquee, Work, About, Skills, Contact, Grain
  styles/index.css    ← design tokens + all section styles
```

## Things to personalize before shipping

- `src/data/content.js` → `CONTACT.linkedin` and `CONTACT.github` are placeholders (`'#'`).
  Swap in the real profile URLs.
- `PROJECTS[].link` entries are placeholders too — point them at live demos or
  GitHub repos once available.
- Swap the favicon / add an OG image if you want richer link previews.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0a0908` |
| Accent | `oklch(0.82 0.17 78)` (warm amber) |
| Display type | Instrument Serif |
| Body type | Inter Tight |
| Mono/label type | JetBrains Mono |
