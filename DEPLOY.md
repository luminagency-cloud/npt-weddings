# Deploy

This is the lean deploy and launch checklist for the current MVP.

## Before Deploy

Product:

- homepage feels finished on desktop and mobile
- launch nav only includes real pages
- launch categories have enough depth to be useful
- venue pages have at least one usable image
- obvious weak listings or weak categories have been removed

Technical:

- `npm test` passes
- `npm run build` passes
- production environment variables are set
- production domain is correct in metadata and sitemap output
- a few real vendor and category pages have been checked with live data

Content:

- category intros read as intentional, not placeholder copy
- AI-assisted descriptions have been tightened where they feel generic
- featured listings look meaningfully different from basic listings

## Environment Variables

Required:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

Optional but currently used when available:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Not required for MVP launch unless you are actively using them:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `CLOUDFLARE_R2_ACCOUNT_ID`
- `CLOUDFLARE_R2_ACCESS_KEY_ID`
- `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
- `CLOUDFLARE_R2_BUCKET_NAME`

## After Deploy

- open the homepage
- open the planning hub
- open the Newport guide hub
- open at least two category pages
- open at least three vendor pages, including one with images
- inspect `sitemap.xml`
- confirm canonical and OG URLs use the real domain
- confirm GA4 is receiving traffic
- watch Search Console for indexing issues

## Do Not Block Launch On

- Stripe
- paid upgrades
- vendor self-service
- a full image management UI
- a full CMS
