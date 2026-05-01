# Newport Wedding Directory

A programmatic SEO directory of wedding vendors in Newport County, Rhode Island. Built on Next.js with dynamic routing, ISR caching, and a Neon PostgreSQL backend.

## What it is

A public-facing vendor directory with three listing tiers (basic, paid, featured), vendor claim/upgrade flow via Stripe, and photo hosting via Cloudflare R2. Pages are generated dynamically from the database and cached at the edge via Vercel ISR.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Database | Neon (PostgreSQL) |
| Auth | Clerk |
| Hosting | Vercel |
| Image Storage | Cloudflare R2 |
| Payments | Stripe |

## Project Structure

```
/app
  /wedding
    page.tsx                        # Directory home
    /[category]
      page.tsx                      # Category listing (e.g. /wedding/jewelers)
      /[vendor]
        page.tsx                    # Vendor detail page
  /admin
    page.tsx                        # Clerk-protected admin
  /claim
    /[vendor]
      page.tsx                      # Claim + upgrade flow
/lib
  db.ts                             # Neon client
  r2.ts                             # Cloudflare R2 client
  revalidate.ts                     # revalidatePath helpers
/app
  sitemap.ts                        # Dynamic sitemap from DB
```

## Listing Tiers

| Tier | Price | Features |
|---|---|---|
| Basic | Free | Seeded data, not claimed |
| Paid | TBD | Claimed, enriched content, photos |
| Featured | TBD | Paid + priority placement in listings |

## Dev Notes

- Vendor claim requires Stripe payment — no free claim flow
- Cache revalidation fires automatically on any DB write
- Images stored in R2, URLs stored in DB — never on Vercel
- Sitemap is generated from the DB, reflects only active vendors
- Admin UI is minimal — most data entry via Neon console during early build
