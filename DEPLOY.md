# Deploying Jamrock Fashion Week

A static-first Next.js 16 app. Build: `next build`. Output: prerendered HTML +
a few dynamic image routes. No database, no server env required to run.

---

## 1. Get the branch onto GitHub

All work lives on the branch `claude/continue-previous-yk77tt`.

If you received a git bundle (`jamrockfashionweek.bundle`), import and push it
from a local clone:

```bash
cd /path/to/jamrockfashionweek
git checkout main 2>/dev/null || true
git fetch /path/to/jamrockfashionweek.bundle \
  "claude/continue-previous-yk77tt:claude/continue-previous-yk77tt"
git push -u origin claude/continue-previous-yk77tt
```

For production you may prefer to merge it into `main`:

```bash
git checkout main
git merge --ff-only claude/continue-previous-yk77tt
git push origin main
```

---

## 2a. Deploy on Vercel (recommended)

1. vercel.com → **Add New → Project** → import `fashionsizzle/jamrockfashionweek`.
2. **Framework preset:** Next.js (auto-detected). No build settings to change.
3. **Production branch:** set to the branch you pushed (or `main` if merged).
4. **Environment variables** (optional but recommended):
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
5. **Deploy.** You get a `*.vercel.app` URL. Add a custom domain under
   **Settings → Domains**.

## 2b. Deploy on Netlify

1. app.netlify.com → **Add new site → Import an existing project** →
   pick the repo.
2. Build command `next build`; the Next.js runtime is detected automatically
   (the repo includes a web manifest + theme color).
3. Set `NEXT_PUBLIC_SITE_URL` under **Site settings → Environment variables**.
4. **Deploy.**

---

## Environment variables

| Variable               | Required | Purpose                                          |
| ---------------------- | -------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical/OG/sitemap base URL. Falls back to a   |
|                        |          | sensible default if unset (see `src/lib/site.ts`).|

---

## After it's live

- **Hero video** streams from YouTube in the visitor's browser (muted, looping
  from 1:00). Change the clip or start time in
  `src/components/site/hero-video.tsx` (`VIDEO_ID`, `START`).
- **Photography:** image areas show art-directed placeholders until you add real
  photos. See `public/images/README.md`. In short: drop a file in
  `public/images/` and set the matching `src` in `src/lib/content.ts`
  (`CAMPAIGN`, `DESIGNERS`, `LOOKS`) or in `src/components/site/hero.tsx`.
- **Content** (designers, schedule, venues, press, dates) all lives in
  `src/lib/content.ts`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```
