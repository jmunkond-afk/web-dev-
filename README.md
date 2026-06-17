# Personal Website — Cinematic Portfolio

A single-file, cinematic personal portfolio with a **persistent animated
starfield**, built with plain HTML, CSS, and Canvas — no build step, no
dependencies.

## Highlights
- **Starfield canvas** fixed behind the entire page (550 twinkling stars,
  glowing feature stars, cross sparkles, and shooting stars)
- **Dark space aesthetic** — deep black `#06070b`, warm gold + steel-blue accents
- **Typography:** DM Serif Display · Inter · Space Mono (Google Fonts)
- **Sections:** About, Projects (2×2), Experience timeline, Contact
- **Scroll reveals** via IntersectionObserver, fixed blurred nav, responsive

## Editing your content
Everything is in [`index.html`](index.html). Update the text directly in the
markup — name, bio, project cards, timeline entries, and contact links.

## Run locally
It's a static file. Either open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment (Vercel)
No build needed. On [vercel.com/new](https://vercel.com/new), import this repo
and deploy as a **static site**:
- **Framework Preset:** Other
- **Build Command:** *(leave empty)*
- **Output Directory:** `.` (root)

Every push to `main` redeploys automatically.
