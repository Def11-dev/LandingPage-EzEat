# Ezeat Landing Page

Static marketing site + restaurant diagnostic quiz, built with [Astro 5](https://astro.build) + Tailwind CSS. Contact form sends emails via [Formspree](https://formspree.io) (no backend needed).

## Requirements

- Node.js ≥ 18.17
- A free [Resend](https://resend.com) account (for email)

## Setup

```bash
cd ezeat-astro
npm install
cp .env.example .env   # then fill in your values
```

Edit `.env`:

| Variable | Description |
|---|---|
| `PUBLIC_FORMSPREE_ID` | ID de tu formulario en [formspree.io](https://formspree.io) (gratis) |

## Development

```bash
npm run dev      # http://localhost:4321
```

## Build & preview

```bash
npm run build
npm run preview  # serves the built output
```

## Deploy (Netlify)

1. Conecta el repo en Netlify
2. Configura el build:
   - Base directory: `ezeat-astro`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. En **Environment variables** agrega `PUBLIC_FORMSPREE_ID`

## Project structure

```
ezeat-astro/
├── src/
│   ├── layouts/Layout.astro
│   ├── components/          # Navbar, Footer
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── services.astro
│       ├── pricing.astro
│       ├── contact.astro
│       └── api/contact.ts   # email endpoint
├── public/
├── .env.example
└── astro.config.mjs
```
