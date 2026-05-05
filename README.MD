# Married in Newport

Married in Newport is a couple-first Newport wedding planning site with a curated local directory inside it.

The current product is already beyond a bare directory. The public site includes:

- a polished homepage
- planning guides
- Newport-specific editorial pages
- category and vendor detail routes
- a lean internal admin for categories and vendors

The MVP is still content- and inventory-constrained, not architecture-constrained.

## MVP Reality

What is already in place:

- public site shell and design system
- homepage, planning, and Newport guide sections
- category pages and vendor detail pages
- metadata, sitemap, robots, and JSON-LD
- admin login, category editing, vendor editing, and import-prep guidance
- production build and current test pass

What still matters most before launch:

- enough real listings in launch categories
- one usable image per venue listing
- tighter verification of public copy and category depth
- final launch QA on mobile and live data

## Launch Scope

Keep launch narrow and honest.

Recommended public focus:

- `venues`
- `photographers`
- `planners`
- `florists`
- `caterers`
- `hair-makeup`
- `music`
- `rentals`

If any category is thin, hide it from the launch experience rather than stretching it with weak listings.

## Project Structure

```text
app/
  admin/                   internal category/vendor management
  api/auth/                auth route handlers
  claim/                   manual claim-request page
  newport-guide/           Newport-local editorial pages
  planning/                planning and venue-guidance pages
  wedding/                 directory routes
components/                reusable UI
lib/
  db.ts                    database connection
  queries.ts               data access
  schema.sql               current schema
  structured-data.ts       JSON-LD helpers
  site.ts                  site config and static route list
scripts/
  import-vendors.ts        CSV import helper
  geocode-venues.ts        venue geocoding helper
TODO.md                    current MVP launch punch list
DEPLOY.md                  lean deploy and launch checklist
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Neon Postgres
- NextAuth v5 beta

## Local Setup

1. Install dependencies.
2. Copy `.env.example` to `.env.local`.
3. Fill in the required variables:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

Optional but currently referenced:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Reserved for later or manual asset work:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `CLOUDFLARE_R2_ACCOUNT_ID`
- `CLOUDFLARE_R2_ACCESS_KEY_ID`
- `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
- `CLOUDFLARE_R2_BUCKET_NAME`

4. Start the app with `npm run dev`.

## Current Routes

Public:

- `/`
- `/planning`
- `/planning/venues`
- `/planning/venues/luxury`
- `/planning/venues/small-weddings`
- `/planning/venues/waterfront`
- `/planning/choose-a-venue`
- `/planning/budget-guide`
- `/planning/newport-wedding-cost`
- `/planning/timeline`
- `/newport-guide`
- `/newport-guide/best-time-of-year`
- `/newport-guide/weekend-itinerary`
- `/newport-guide/rehearsal-dinner-ideas`
- `/newport-guide/marriage-license-ri`
- `/wedding`
- `/wedding/[category]`
- `/wedding/[category]/[vendor]`
- `/claim/[vendor]`

Admin:

- `/admin`
- `/admin/login`
- `/admin/categories`
- `/admin/vendors`
- `/admin/import`

## Working Standard

- Keep the public experience couple-first.
- Keep launch navigation tight.
- Hide weak categories instead of padding them.
- Treat claims, billing, and vendor self-service as post-MVP unless a minimal manual flow is enough.

The active launch checklist lives in [TODO.md](/D:/_work/npt-weddings/TODO.md).
