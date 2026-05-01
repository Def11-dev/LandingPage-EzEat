# Ezeat Landing Page

Static marketing site + restaurant diagnostic quiz, built with [Astro 6](https://astro.build) + Tailwind CSS. Contact form sends emails via [Resend](https://resend.com).

## Requirements

- Node.js ≥ 18.20
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
| `RESEND_API_KEY` | From resend.com → API Keys |
| `CONTACT_EMAIL` | Where form submissions are delivered |

> **Domain note:** Resend requires a verified sender domain. During development you can use the shared `onboarding@resend.dev` address by changing `from` in `src/pages/api/contact.ts`.

## Development

```bash
npm run dev      # http://localhost:4321
```

## Build & preview

```bash
npm run build
npm run preview  # serves the built output
```

## Deploy

The site uses Astro **hybrid** mode — all pages are pre-rendered (static), only `/api/contact` runs server-side. Deploy anywhere that supports Node.js:

- **Vercel / Netlify** — connect the repo, set env vars in dashboard, done.
- **Self-host** — `npm run build` then `node dist/server/entry.mjs`.

For pure-static hosts (GitHub Pages) replace the API route with [Formspree](https://formspree.io): set the form `action` to your Formspree endpoint and remove `src/pages/api/contact.ts`.

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
