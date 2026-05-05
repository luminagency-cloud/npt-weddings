# MVP Launch Punch List

This file is the current working checklist for shipping `npt-weddings` as a credible public MVP.

## Current Read

The repo is in better shape than the old roadmap suggested.

Already done in code:

- polished homepage and visual system
- planning hub and venue-guidance pages
- Newport guide section with real editorial pages
- directory landing page
- category pages with featured/basic separation
- vendor detail pages with metadata and JSON-LD
- sitemap, robots, canonical support, and GA/Search Console hooks
- admin login plus category/vendor editing
- passing test and production build

The biggest remaining risk is not framework work. It is launch readiness:

- real listing depth
- image coverage
- final public QA
- keeping weak pages and weak categories out of the launch surface

## MVP Blockers

These are the remaining items that still matter before launch.

### 1. Populate the directory with real launch inventory

- Confirm the actual live categories in Neon.
- Keep public launch focused on categories with real depth.
- Target at least 45 real businesses total.
- Prefer 65 to 95 if the data quality holds up.
- If counts are short, launch with fewer categories instead of thin coverage.

### 2. Add one image per venue listing

- Every venue page should have a usable cover image.
- Pull temporary images from venue sites or press kits until claim flows exist.
- Store alt text with each image.
- Do not launch venue pages that feel blank or visually dead.

### 3. Decide the image workflow you will actually use for MVP

- There is schema support for `vendor_photos`.
- Public vendor pages already render images if data exists.
- There is not yet a real in-admin image upload workflow.

For MVP, choose one of these and stick to it:

- manual insert plus R2 URLs
- simple helper script/process for image loading
- defer non-venue galleries and only guarantee one primary image for venues

### 4. Verify live directory quality

- Check every launch category page for unique intro quality.
- Tighten weak AI-assisted vendor descriptions by hand.
- Make sure featured listings visibly earn the distinction.
- Remove empty or low-signal categories from the public path.

### 5. Review public claim messaging

- Claim pages exist.
- Claim CTAs also appear on unclaimed vendor detail pages.
- The workflow is still manual.

Decision for MVP:

- either keep the current manual-review claim flow
- or hide/de-emphasize claim CTAs until the listing base is stronger

### 6. Final prelaunch QA on real data

- Review homepage, planning pages, category pages, and several vendor pages on mobile.
- Check that each launch page feels complete with live content, not just good empty-state design.
- Verify vendor images render correctly in production.
- Verify canonical URLs, OG images, and sitemap URLs on the real domain.

## Already Covered

Assuming production config is current, these items appear handled or mostly handled:

- Google Search Console connected
- sitemap submitted
- schema in place
- analytics hook installed

Post-launch, the real task is validation:

- confirm GA4 is receiving traffic
- watch Search Console coverage and indexing
- fix any production URL or metadata mismatches quickly

## Nice To Have, Not Launch Blocking

- broader route-level smoke tests
- richer vendor tags and related-listing logic
- admin image management
- better internal content workflow
- stronger featured-listing templates
- vendor claim automation

## Explicitly Not MVP

- Stripe or paid upgrades
- polished vendor self-service
- full CMS
- shortlist/save tools
- reviews and ratings
- large-scale AI page generation
- broad public navigation that outruns content quality

## Launch Decision Rule

Launch when all of this is true:

- the public site feels polished on desktop and mobile
- the nav only points to pages that feel real
- launch categories have enough inventory to be useful
- venue pages have images
- weak listings and weak categories have been trimmed
- production metadata and analytics are behaving correctly
