# Architecture

## Product Shape

`npt-weddings` is a couple-first Newport wedding planning site with a curated directory inside it.

The current app shape is:

- editorial/planning pages that help couples make early decisions
- a directory that supports venue and vendor discovery
- a lean internal admin for maintaining categories and listings

## Public Surface

Main route groups:

- `/`
- `/planning/*`
- `/newport-guide/*`
- `/wedding`
- `/wedding/[category]`
- `/wedding/[category]/[vendor]`
- `/claim/[vendor]`

The claim route is a manual-review flow, not a full product workflow.

## Internal Surface

Admin routes:

- `/admin`
- `/admin/login`
- `/admin/categories`
- `/admin/vendors`
- `/admin/import`

Auth is configured in [auth.ts](/D:/_work/npt-weddings/auth.ts). There is no separate `middleware.ts` file in the current repo.

## Code Layout

### `app/`

App Router routes and page-level UI.

### `components/`

Reusable presentation pieces for directory, layout, and editorial pages.

### `lib/`

Shared application logic:

- [db.ts](/D:/_work/npt-weddings/lib/db.ts): Neon connection
- [queries.ts](/D:/_work/npt-weddings/lib/queries.ts): data access layer
- [site.ts](/D:/_work/npt-weddings/lib/site.ts): site config and route inventory
- [structured-data.ts](/D:/_work/npt-weddings/lib/structured-data.ts): JSON-LD helpers
- [guide-content.ts](/D:/_work/npt-weddings/lib/guide-content.ts): structured page content
- [schema.sql](/D:/_work/npt-weddings/lib/schema.sql): database schema

### `scripts/`

Operational helpers for vendor import and venue geocoding.

## Rendering Model

The public site is App Router-based and fetches data server-side through `lib/queries.ts`.

Current behavior:

- editorial pages are static
- directory landing page revalidates
- category and vendor pages are rendered from database-backed queries
- metadata is generated per route where needed

## Data Model

Core tables:

- `categories`
- `subcategories`
- `vendors`
- `vendor_photos`
- `tags`
- `vendor_tags`
- `vendor_hours`

The schema already supports more than the current product surface. In practice, the live MVP still depends mostly on:

- categories
- vendors
- vendor photos
- tags

## Current Constraint

The repo is not blocked on architecture.

The main launch constraints are:

- listing depth
- image coverage
- copy quality
- final live QA
