# Jamrock Fashion Week

An editorial runway-archive website for **Jamrock Fashion Week** — Kingston, Jamaica.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Motion**. The
design is a premium editorial archive: bone-paper palette, Playfair Display
serif, hairline rules, film-grain image plates, asymmetric grids, and subtle
scroll motion — no cards, gradients, emoji, or stock icons.

## Sections

- Cinematic intro curtain (first load, once per session)
- Cinematic hero
- Running marquee ticker
- Manifesto + statistics
- Full-bleed campaign portrait (parallax)
- Asymmetric designer grid
- Full-bleed horizontal lookbook
- Parallax interlude
- Runway schedule
- Venues index
- Press pull-quotes
- RSVP / invitation form
- Footer

## Routes

- `/` — the single-page runway archive (all sections above)
- `/designers/[slug]` — a statically generated profile per house (bio, details,
  full collection lookbook, prev/next navigation)
- A styled editorial `not-found` (404) page
- A generated Open Graph share image (`/opengraph-image`)
- `sitemap.xml` and `robots.txt`

## SEO & accessibility

- schema.org `Festival` JSON-LD with each show as a sub-event
- Open Graph image and rich metadata
- Skip-to-content link, focus-visible states, and reduced-motion support

## Photography

Image areas render art-directed *plates* by default, so the layout never breaks
and never falls back to placeholder icons. Drop in real runway photography by
passing a `src` to the `Plate` component (`src/components/plate.tsx`), or by
setting `src` on entries in `src/lib/content.ts` (`DESIGNERS`, `LOOKS`). Place
files under `/public` (e.g. `/public/images/look-01.jpg`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Editorial copy and data live in `src/lib/content.ts`. Design tokens are defined
in `src/app/globals.css`.

## Deploy (Netlify)

The repo includes `netlify.toml` declaring the `@netlify/plugin-nextjs`
runtime; Netlify auto-detects the rest.

Set one environment variable so canonical, Open Graph, sitemap, robots and
JSON-LD URLs match your domain:

```
NEXT_PUBLIC_SITE_URL = https://your-domain.com
```

In **Site settings → Environment variables**. If unset, the build falls back to
Netlify's `URL`, then to the production domain. `NODE_VERSION` is pinned to 22.
