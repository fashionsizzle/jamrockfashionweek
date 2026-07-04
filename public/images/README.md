# Photography

Drop real runway photography here, then point the site at it. The layout shows
art-directed placeholder plates until a real `src` is set, so nothing ever
breaks.

Black-and-white, high-contrast images suit the design best — and any colour
photo is given an editorial monochrome treatment automatically (this can be
turned off per image with `mono={false}` on the `Plate`).

## How to add the campaign image

1. Save the photo here, e.g. `public/images/campaign.jpg`
2. In `src/lib/content.ts`, set `CAMPAIGN.src = "/images/campaign.jpg"`
   (optionally tweak `CAMPAIGN.focus`, e.g. `"50% 25%"`, to frame the subject)

## How to add designer / look / hero photos

- **Designers:** set `src` on a designer in `DESIGNERS` (`src/lib/content.ts`)
- **Lookbook:** set `src` on an entry in `LOOKS`
- **Hero plate:** pass `src` to the `<Plate>` in `src/components/site/hero.tsx`

Recommended sizes: campaign/hero ≥ 1600px wide; grid/lookbook ≥ 1000px wide.
