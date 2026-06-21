# Chola Mandala Mahaa Samsthaanam — Website

A single-page website for the **'Bharata' Energy Defence Program**, built from the dossier PDF
and the audio brief. Static HTML/CSS/JS — no backend, no build step. Hosts anywhere.

## Preview locally
Just open the file:
```bash
open index.html
```
Or serve it (any static server works):
```bash
cd chola-mandala-website && python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure
```
index.html              # the whole page
css/style.css           # design system (royal indigo + temple gold)
js/main.js              # sticky nav, mobile menu, scroll-reveal, animated counters, form
assets/img/             # 24 curated + optimized photos pulled from the dossier
assets/extracted/       # all 70 raw images extracted from the PDF (source library)
source/                 # original PDF, the wife's audio, and its transcript
preview-full-page.png   # full-page render of the finished site
```

## Sections
Hero · The Convenor (Prince A. Amithaab) · Mission & Vision · The Journey (2005→2019 timeline) ·
Service · Hospitality · Education · Temples & Future (the Hebbya trinity featured) ·
The Sacred Science · In the Press · The Prince's Pledge · Get Involved/Contact · Footer.

## Open items before going live
1. **Contact details** — email, phone, and donation/havirdana info are placeholders
   (marked `[ to be provided ]` in the Contact section). Fill these in `index.html`.
2. **Contact form** — currently front-end only (shows a thank-you, sends nothing). Wire it to
   an email service or form endpoint (Formspree, Netlify Forms, etc.) when ready. The hook is
   in `js/main.js` → `contactForm` submit handler.
3. **Domain & hosting** — drop the folder on Netlify / Vercel / Cloudflare Pages / GitHub Pages,
   or any web host. It's fully static.

## Notes
- Content is reproduced faithfully from the dossier (per the client's direction). Amitabh reviews
  and edits last — copy is easy to adjust directly in `index.html`.
- A dozen extra curated photos (Auroville, PMO visit, Ganesha, temples, etc.) sit unused in
  `assets/img/` as a ready library if any section's imagery should be swapped.
- Fonts (Cinzel + EB Garamond) load from Google Fonts; needs internet on first paint. Can be
  self-hosted later if desired.
