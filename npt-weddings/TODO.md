# Newport Weddings TODO

## Purpose

Build the first real version of `npt-weddings` as a useful wedding planning product for couples first.

This means:

- Ship an MVP that looks polished and trustworthy, not thin or overbuilt.
- Prioritize the consumer experience before vendor tooling.
- Treat vendor claims, paid listings, and enrichment as later-stage work.
- Focus early work on structure, planning flows, discoverability, and content quality.

## Current State

- Next.js app shell exists.
- Public directory routes exist for wedding categories and vendor detail pages.
- Basic admin auth exists.
- Database schema exists for categories, vendors, photos, tags, and claim/payment-related fields.
- Claim and payment flows are placeholders.
- README is still the default scaffold.
- No visible test setup yet.

## Product Direction

The repo should evolve from a narrow vendor directory into a broader local wedding planning site.

Launch principle:

- Go live with a site that feels intentionally designed, locally useful, and substantively written.
- Do not launch with obvious placeholder copy, fake depth, or empty sections.
- Monetization can wait until the public experience feels credible.

Primary audience right now:

- Couples planning Newport-area weddings
- Families and wedding parties researching options

Not the primary audience yet:

- Vendors managing profiles
- Vendors buying placement
- Internal ops tooling beyond minimal admin access

## Priority Order

1. Ship a credible MVP couples can actually use.
2. Establish a clear couple-first product and site structure.
3. Make the site technically solid enough to ship and iterate on.
4. Add fuller navigation, AI-assisted content, and richer planning pages.
5. Improve directory quality and search.
6. Add vendor claims, payments, and monetization.

## MVP Definition

Goal: launch a site that does not look like crap, does not read like fluff, and is genuinely useful even before monetization.

### MVP must include

- A polished visual system with consistent typography, spacing, color, and page structure
- A clear homepage with strong positioning and obvious next steps
- A limited but real set of business listings
- A small set of strong planning/editorial pages
- A usable directory structure
- Clean SEO basics
- Mobile-friendly layouts

### MVP must not include

- Empty categories
- Placeholder lorem-style copy
- Thin AI-generated pages with no editorial judgment
- Half-built claim or payment flows
- Navigation that promises sections with no substance behind them

## Launch Inventory

Goal: launch with enough businesses to feel real, but not so many that quality collapses.

### Recommendation

- Absolute minimum: 40 businesses
- Better MVP target: 60 to 90 businesses
- Strong launch target: 100 to 150 businesses

### Suggested coverage rule

- Focus on the highest-intent categories first
- Aim for at least 6 to 12 listings in each launch category
- Do not expose categories publicly unless they have enough depth to feel intentional

### Suggested first categories

- venues
- photographers
- planners
- florists
- caterers
- hair and makeup
- bands and DJs
- rentals

### Pushback

- Fewer than roughly 40 total businesses will make the directory feel thin unless the product is much more editorial than directory-led.
- Launching 20 shallow categories is worse than launching 6 to 8 solid ones.
- If business count is low, narrow the public scope and make the site feel curated on purpose.

## MVP Launch Scope

Goal: define the actual version 1 site so work stays constrained.

### Recommended launch categories

- venues: target 12 to 20
- photographers: target 10 to 15
- planners: target 6 to 10
- florists: target 6 to 10
- caterers: target 6 to 10
- hair and makeup: target 6 to 10
- bands and DJs: target 6 to 10
- rentals: target 6 to 10

### MVP business target

- Preferred total: 65 to 95 businesses
- Minimum acceptable total: 45 if the editorial side is strong

### If business count is short

- Keep `venues`, `photographers`, `planners`, and `florists`
- Collapse weaker categories out of the public nav until inventory improves
- Present the directory as curated rather than exhaustive

## MVP Navigation

Goal: keep launch navigation tight and honest.

### Recommended launch nav

- Home
- Venues
- Vendors
- Planning
- Newport Guide
- About

### Recommended launch subpages

- `Venues`
  - Newport wedding venues
  - small wedding venues
  - waterfront wedding venues or ideas
- `Vendors`
  - wedding directory landing page
  - top launch categories only
- `Planning`
  - wedding timeline
  - wedding budget guide
  - how to choose a Newport venue
- `Newport Guide`
  - best time of year for a Newport wedding
  - wedding weekend itinerary
  - rehearsal dinner ideas

### Explicitly not in MVP nav

- Claim your listing
- Advertise
- Full vendor account area
- Empty blog roll
- Generic resource center with thin pages

## MVP Page Inventory

Goal: identify the first pages that make the site feel real.

### First 10 pages to build

1. Home
2. Newport wedding venues
3. Wedding directory landing page
4. One strong category page template, starting with venues
5. Newport wedding timeline
6. Rhode Island wedding budget guide
7. Best time of year for a Newport wedding
8. Newport wedding weekend itinerary
9. About
10. Contact or request recommendations page

### Next 10 pages after that

1. Photographers category page
2. Planners category page
3. Florists category page
4. Caterers category page
5. Hair and makeup category page
6. Bands and DJs category page
7. Rentals category page
8. Small wedding venues in Newport
9. Newport waterfront wedding ideas
10. How to choose a Newport wedding venue

## Definition Of Done For MVP

The MVP is ready to launch when all of the following are true:

- The homepage looks polished on desktop and mobile
- The nav contains only real pages
- There are at least 45 real businesses live, with a target of 65+
- At least 5 strong editorial/planning pages are published
- Core directory pages have unique intros and clean layout
- SEO basics are in place:
  - metadata
  - sitemap
  - canonical handling
  - indexable public routes
- The site has no obvious placeholder states in public flows
- Public pages are visually consistent and do not look scaffolded
- Basic quality checks run clean before deploy

## Execution Order

Goal: give us a straight path for implementation.

### Step 1: Product framing

- Rewrite [README.md](/D:/_work/npt-weddings/README.md) to reflect the actual product and MVP scope
- Lock the launch categories
- Lock the launch nav
- Lock the first 10 pages

### Step 2: Visual system

- Establish the core visual direction
- Update layout, typography, spacing, cards, buttons, and section patterns
- Redesign the homepage and directory landing page first

### Step 3: Editorial foundation

- Build the first planning page template
- Publish the first 5 strong editorial pages
- Make sure each page has a specific local angle and clear next step

### Step 4: Directory foundation

- Improve category page template
- Fix vendor-detail data issues
- Make sure category coverage matches launch inventory
- Hide categories that do not meet the launch bar

### Step 5: Technical stabilization

- Add minimal tests
- Improve env handling and setup docs
- Tighten SEO defaults and route behavior
- Verify mobile layout and content density

### Step 6: Prelaunch pass

- Review every public page for fluff, repetition, and unfinished states
- Remove anything weak from nav
- Check site copy for confidence and specificity
- Prepare deploy checklist

## Phase 0: Foundation Cleanup

Goal: make the codebase safe to build on.

### Must do

- Replace the default [README.md](/D:/_work/npt-weddings/README.md) with project-specific setup and purpose.
- Fix route/data mismatches and other correctness bugs in vendor detail flows.
- Add a basic test setup for query and route logic.
- Define environment variables clearly and separate required vs optional config.
- Add error handling for missing site URL and missing database configuration.
- Confirm current Next.js 16 patterns against local docs before adding new app behavior.

### Nice to have

- Add a simple architecture note for routes, data access, and auth.
- Add seed/reset instructions for local development.

## Phase 1: Couple-First Experience

Goal: ship the MVP and make the site valuable even if vendor tooling is incomplete.

### Core work

- Reframe homepage around planning first, directory second.
- Design a visual system that feels premium and local rather than template-like.
- Build a tight launch navigation with only the sections that will be real on day one.
- Add top-level wedding planning pages:
  - venues
  - timelines
  - budgets
  - local area guidance
  - ceremony and reception ideas
- Add editorial landing pages for Newport wedding topics.
- Add clearer information scent so users can understand where to start.
- Add lightweight calls to action such as:
  - save this page
  - contact us
  - request recommendations
  - start planning

### Content model decisions

- Decide whether “wedding” remains the root section or becomes one section within a broader planning site.
- Define canonical page types:
  - guide page
  - category page
  - vendor page
  - itinerary or planning page
  - FAQ page

### Launch bar

- Every page in the nav should feel complete enough to stand on its own.
- Every public page should have a clear point of view and specific local usefulness.
- Editorial pages should be concise and sharp, not padded for word count.

## Phase 2: Full Navigation, Vendor Claim, and Solid AI Pages

Goal: expand breadth only after the MVP is coherent and live.

### Add in this phase

- Full site navigation
- More complete planning page coverage
- Vendor listing claim flow
- Stronger directory/category page content
- AI-assisted page production with human review

### Rules for AI pages

- Use AI to accelerate drafting, structuring, and variation
- Do not publish AI copy that sounds generic, repetitive, or locally uninformed
- Every AI-assisted page needs human editing for specificity, tone, and usefulness
- Prefer fewer strong pages over many weak ones

### Vendor claim scope in this phase

- Claim request flow
- Verification process
- Internal review path
- Basic vendor update capability after approval

### Pushback

- Full nav should come after there is enough page quality to support it
- Claim flow should exist only after the public listing experience feels worth claiming
- AI page expansion should follow an editorial standard, not a page-count target

## Phase 3: Planning Tools

Goal: make the product smarter for couples without depending on vendor participation.

### Candidate features

- Wedding planning checklist
- Timeline builder
- Budget estimator
- Guest-count planning guidance
- Venue comparison workflow
- Shortlist or favorites system
- Inquiry tracker or planning notes

### Smart features worth building early

- Personalized checklist generation based on wedding month, venue style, and guest count
- Suggested next steps based on what a user has already viewed
- Related content recommendations between guides, venues, and categories
- Simple intake flow that turns user answers into a planning path

### Defer for now

- Full vendor dashboard
- Automated vendor onboarding
- Paid placement logic
- Subscription management

## Phase 4: Content and SEO System

Goal: create scalable organic growth around local wedding intent.

### Must do

- Add proper metadata patterns for all public page types.
- Add structured data where relevant.
- Add canonical handling.
- Build a real sitemap strategy.
- Expand thin category pages with unique copy and intent-specific content.
- Publish pages for geographic and intent combinations where quality can be maintained.

### Content backlog

- Newport wedding venues
- small wedding venues in Newport
- Newport waterfront wedding ideas
- Newport wedding timeline
- best time of year for a Newport wedding
- Newport rehearsal dinner ideas
- Newport wedding weekend itinerary
- Rhode Island wedding budget guide

## Phase 5: Admin and Internal Workflow

Goal: stop relying on direct database edits for normal content work.

### Core work

- Replace barebones admin with a minimal internal CMS.
- Support category editing.
- Support guide page editing.
- Support vendor create/edit only as needed.
- Add publish/unpublish controls.
- Add image management.
- Add basic activity visibility.

### Security work

- Replace env-only credential checks with a safer auth model.
- Add session hardening and basic auditability.
- Separate read/write admin capabilities if needed.

## Phase 6: Directory Quality

Goal: make the vendor directory good, but only after the planning experience exists.

### Improvements

- Search and filters
- Better sort options
- Stronger category intros
- Better vendor page layouts
- Photo handling improvements
- Tag hygiene and data quality rules
- Related vendor recommendations

### Smart data enhancements

- Listing completeness scoring
- Missing-field detection
- Suggested tags from existing copy
- Staleness detection for old records

## Phase 7: Vendor Claims and Monetization

Goal: add business-side functionality only after consumer value is established.

### Build later

- Stripe checkout and webhook handling
- Paid listing upgrades
- Featured placement management
- Subscription state and billing support

### Rule

Do not prioritize monetization until the couple-facing product is clearly useful without it.

## Technical Backlog

### App architecture

- Keep data access isolated in `lib/`.
- Avoid mixing unfinished monetization concerns into core browsing routes.
- Add reusable page sections/components before expanding route count.

### Data model

- Revisit whether guides, FAQs, and planning resources need their own tables or a CMS-backed model.
- Decide if subcategories are actually needed in the near term.
- Add content models that support couple-first workflows, not just vendor records.

### Quality

- Add lint, test, and build checks to the normal workflow.
- Add route-level smoke coverage.
- Add a small set of fixture data for local development.

## Near-Term TODO

These are the next concrete tasks I’d do in order:

1. Rewrite [README.md](/D:/_work/npt-weddings/README.md) so the repo explains the actual product and MVP.
2. Confirm the MVP launch categories and target counts in this doc.
3. Build the MVP navigation and homepage structure.
4. Establish the visual system and upgrade the public-facing design quality.
5. Create the first planning/editorial page template.
6. Add the first 5 strong editorial pages.
7. Improve the directory landing page and first category template.
8. Fix known route/query correctness issues in vendor detail pages.
9. Add a minimal test setup.
10. Build a simple internal content workflow before touching vendor claims.

## Working Rules

- Work on `main` until there is a reason to branch differently.
- Do not add public nav items unless the destination page is real.
- Do not add monetization UI in MVP.
- Cut weak pages instead of padding them.
- Favor fewer better components over many one-off sections.

## Anti-TODO

Things to explicitly avoid doing too early:

- Building a polished vendor dashboard before the consumer product is useful
- Spending time on Stripe before the claim flow and value proposition are real
- Overfitting the schema around paid listings
- Generating large volumes of thin SEO pages
- Treating the directory as the entire product
- Launching with more nav than the content can support
- Using AI to manufacture surface area instead of usefulness

## Decision Notes

- Vendors are not the immediate bottleneck.
- The current repo already points toward a directory, but the better product is a planning destination with a directory inside it.
- Admin and vendor systems should follow content usefulness, not lead it.
- MVP quality matters more than breadth.
- Narrow and polished beats broad and unfinished for launch.
