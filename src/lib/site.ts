/**
 * Canonical site origin, resolved at build/runtime.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL — set this to your production domain
 *   2. URL                  — provided automatically by Netlify (production)
 *   3. the production fallback below
 *
 * On Netlify, set NEXT_PUBLIC_SITE_URL in Site settings → Environment
 * variables once you have your final domain.
 */
function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "https://jamrockfashionweek.com";
  return raw.replace(/\/$/, "");
}

export const SITE_URL = resolveSiteUrl();
