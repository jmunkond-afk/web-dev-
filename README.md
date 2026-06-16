# Personal Website

A fast, dark-themed personal portfolio built with **React + Vite**.

## Sections
- **Hero / About** — intro, tagline, and social links
- **Projects** — portfolio cards with tech tags and links
- **Skills & Experience** — skill groups and a timeline
- **Contact** — email call-to-action and socials

## Editing your content
All text lives in [`src/data.js`](src/data.js). Update your name, bio,
projects, skills, experience, and social links there — no need to touch the
components.

## Local development
```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deployment (Vercel)
This project is Vercel-ready. Vercel auto-detects Vite:
- **Build command:** `npm run build`
- **Output directory:** `dist`

Import the repo on [vercel.com](https://vercel.com/new) and deploy — every push
to `main` will redeploy automatically.
