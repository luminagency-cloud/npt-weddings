# Married in Newport

Married in Newport is a Newport-area wedding planning site with a curated vendor directory inside it.

The brand is `Married in Newport`. The search-facing language stays anchored in `Newport weddings`, `weddings in Newport`, and related venue and planning terms.

The MVP is not a vendor platform. The MVP is a polished, useful site for couples:

- strong homepage
- useful planning pages
- curated local directory
- clean design
- mobile-friendly experience

Monetization, vendor claims, and paid listing flows come later.

## Current Direction

The launch goal is simple:

- get a credible site live quickly
- make it visually strong enough to show people
- keep scope tight
- avoid fluff, placeholders, and half-built business features

Primary audience:

- couples planning Newport-area weddings
- families and wedding parties researching options

Not the priority yet:

- vendor dashboards
- paid placements
- subscription billing

## MVP Scope

The MVP should include:

- a polished homepage
- a wedding directory landing page
- a tight set of real launch categories
- at least 45 real businesses live, with 65 to 95 preferred
- at least 5 strong editorial/planning pages
- solid mobile layout
- SEO basics in place

The MVP should not include:

- empty categories
- filler copy
- fake content depth
- half-built payment flows
- public nav items with weak or missing destinations

## Recommended Launch Categories

- venues
- photographers
- planners
- florists
- caterers
- hair and makeup
- bands and DJs
- rentals

If inventory is short, narrow the public scope rather than exposing thin categories.

## Project Structure

```text
app/
  admin/                   admin routes
  api/auth/                auth route handlers
  claim/                   future vendor-claim flow
  wedding/                 public directory routes
components/                reusable UI
lib/
  db.ts                    database connection
  queries.ts               data access
  schema.sql               current database schema
  seed.sql                 local seed data
auth.ts                    auth configuration
middleware.ts              admin route protection
TODO.md                    roadmap and execution plan
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Neon Postgres
- NextAuth v5 beta

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create local environment config:

```bash
copy .env.example .env.local
```

3. Fill in the required variables in `.env.local`:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

Optional for later phases:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `CLOUDFLARE_R2_ACCOUNT_ID`
- `CLOUDFLARE_R2_ACCESS_KEY_ID`
- `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
- `CLOUDFLARE_R2_BUCKET_NAME`

4. Start the app:

```bash
npm run dev
```

5. Open:

- `http://localhost:3000`

## Database Notes

The schema lives in [lib/schema.sql](/D:/_work/npt-weddings/lib/schema.sql).

Current schema support exists for:

- categories
- vendors
- vendor photos
- tags
- vendor hours
- future claim/payment-related fields

For now, the admin UI is minimal and some content/data management is still expected to happen directly in the database.

## Routes

Current public routes:

- `/`
- `/wedding`
- `/wedding/[category]`
- `/wedding/[category]/[vendor]`
- `/claim/[vendor]`

Current admin routes:

- `/admin/login`
- `/admin`

## Working Priorities

The current order of work is:

1. tighten product framing and MVP scope
2. improve the public-facing design system
3. build the first strong planning/editorial pages
4. improve the directory landing page and category templates
5. fix route/data correctness issues
6. add minimal test coverage
7. prepare for deployment

Full details live in [TODO.md](/D:/_work/npt-weddings/TODO.md).

## Design Standard

The public site should feel:

- editorial, not template-like
- local and specific, not generic
- clean and premium, not busy
- concise and confident, not padded

If a page is weak, cut it from launch scope instead of filling it with fluff.

## Deployment Plan

The app is currently local-only.

Deployment target when ready:

- Vercel

Before deployment:

- remove obvious placeholder states
- confirm environment variables
- verify mobile layout
- check metadata and sitemap behavior
- make sure launch nav only includes real pages
- connect Google Analytics and Search Console when ready

## Notes

- This repo includes a `TODO.md` planning document that acts as the working roadmap.
- Vendor claims are intentionally deferred until after the public MVP is strong.
- Monetization is not the launch priority.
