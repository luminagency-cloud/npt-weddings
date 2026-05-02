# Architecture

## Product Shape

`npt-weddings` is a couple-first wedding planning site with a curated local vendor directory inside it.

For MVP:

- planning and editorial usefulness come first
- vendor monetization comes later
- public polish matters more than feature breadth

## App Structure

### Public routes

- `/`
  - currently redirects to `/wedding`
- `/wedding`
  - directory landing page
- `/wedding/[category]`
  - category listing page
- `/wedding/[category]/[vendor]`
  - vendor detail page
- `/claim/[vendor]`
  - placeholder claim route for a later phase

### Admin routes

- `/admin/login`
- `/admin`

### API routes

- `/api/auth/[...nextauth]`

## Code Layout

### `app/`

Holds route segments and page-level UI.

### `components/`

Reusable UI components.

Current notable component:

- `vendor-card.tsx`

### `lib/`

Shared server-side logic and data access.

- `db.ts`
  - database connection setup
- `queries.ts`
  - read queries used by routes
- `types.ts`
  - shared TypeScript models
- `schema.sql`
  - current database schema
- `seed.sql`
  - local seed data

### Root files

- `auth.ts`
  - auth configuration
- `middleware.ts`
  - admin route protection
- `README.md`
  - project overview and setup
- `TODO.md`
  - roadmap and execution plan

## Rendering Model

The app currently uses App Router pages with server-side data fetching from the database layer in `lib/queries.ts`.

Current pattern:

- routes fetch server-side data directly
- pages render simple presentational markup
- auth is handled at the route level for admin pages

## Data Model

Current schema is centered on the vendor directory.

Main tables:

- `categories`
- `subcategories`
- `vendors`
- `vendor_photos`
- `tags`
- `vendor_tags`
- `vendor_hours`

There are also fields already present for later business workflows:

- claim status
- verification status
- Stripe customer/subscription references
- promo fields

## Current Architectural Constraints

- The schema is stronger than the current product surface.
- Editorial/planning content does not yet have its own model.
- Admin tooling is minimal.
- Claim and payment routes are not real product flows yet.

## Near-Term Direction

The next architectural layer should support the MVP, not future monetization.

That means:

- improve public page structure first
- add reusable layout and section patterns
- introduce planning/editorial page support
- keep vendor claims and billing isolated until Phase 2+

## Working Rules

- Keep data access centralized in `lib/queries.ts` unless there is a strong reason to split it.
- Avoid leaking unfinished monetization concerns into MVP browsing flows.
- Add public nav only for pages that are actually ready.
- Prefer reusable sections and templates over one-off page builds.
