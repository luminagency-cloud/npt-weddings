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

## SEO Execution Plan

Goal: build a search-driven site that can rank across high-intent Newport wedding queries without turning into a pile of thin pages.

### Principle

- SEO pages should exist because they answer a real search intent, not because a template can generate them.
- Newport is competitive enough that every page needs a distinct angle, not just a keyword swap.
- The directory should support SEO, but the site cannot rely on directory pages alone.

### Layer 1: Technical SEO Foundation

Goal: make the site crawlable, indexable, and measurable.

#### Must have

- Correct metadata defaults
- Canonical support
- Real sitemap coverage
- `robots.txt`
- Google Search Console verification
- Google Analytics / GA4
- Consistent internal linking

#### Current status

- Metadata base is in place
- Sitemap exists
- `robots.txt` exists
- GA/Search Console hooks exist

#### Still to do

- Add breadcrumb structured data
- Add page-type structured data where appropriate
- Set final production domain everywhere
- Submit sitemap in Search Console
- Connect the site to Google Analytics and Search Console accounts

### Layer 2: Core Indexable Page Types

Goal: define the page system that should carry search demand.

#### Directory/entity pages

- category pages
- vendor pages

#### Editorial pages

- planning guides
- local Newport guidance
- budget/timeline/help pages

#### Hybrid SEO landing pages

- category + style
- category + venue type
- planning topic + Newport
- venue intent pages

### Layer 3: Priority SEO Page Program

Goal: build the first serious search inventory by hand before scaling templates.

#### First-tier pages

- Newport wedding venues
- small wedding venues in Newport
- Newport wedding budget guide
- best time of year for a Newport wedding
- Newport wedding weekend itinerary
- Newport wedding photographers
- Newport wedding planners
- Newport wedding florists

#### Second-tier pages

- waterfront wedding venues in Newport
- Newport rehearsal dinner ideas
- Newport wedding timeline
- how to choose a Newport wedding venue
- luxury Newport wedding venues
- intimate wedding venues in Newport

### Layer 3.5: Content Planning System

Goal: decide what to publish, in what order, and why, instead of just writing pages ad hoc.

#### Planning inputs

- search intent
- local relevance
- conversion value
- internal linking value
- content difficulty
- current inventory depth

#### Planning buckets

- money pages
  - category and vendor-adjacent pages that help commercial intent
- authority pages
  - deep guides that build trust and topical authority
- bridge pages
  - pages that connect editorial search intent to directory exploration
- local signal pages
  - pages that reinforce Newport-specific knowledge and relevance

#### Content planning workflow

1. Identify a real query cluster.
2. Decide whether the right page type is category, guide, hybrid landing page, or FAQ.
3. Define the unique angle before drafting.
4. Map the internal links that page should create.
5. Publish only when it strengthens the overall site graph.

#### First content clusters to plan

- venues
  - luxury
  - waterfront
  - intimate
  - small wedding
- planning
  - timeline
  - budget
  - venue selection
- local Newport
  - best time of year
  - wedding weekend itinerary
  - rehearsal dinner ideas

### Layer 4: Semantic Content Model

Goal: support scale without hardcoding every page forever.

#### Content types we will likely need

- `guides`
  - title
  - slug
  - summary
  - body
  - meta title
  - meta description
  - publish status
- `seo_pages`
  - page type
  - slug
  - title
  - intro
  - section blocks
  - faq block
  - status
- `faqs`
  - question
  - answer
  - related page/category

#### Taxonomy we will likely need

- venue type
- wedding style
- guest-count fit
- price band
- area / neighborhood intent
- seasonal relevance

### Layer 5: Internal Linking Strategy

Goal: make the site easier for both users and search engines to navigate by intent.

#### Linking rules

- homepage should link to primary planning and venue pages
- planning pages should link into relevant categories
- category pages should link back to planning guides
- guide pages should link to relevant directory categories and selected vendors
- vendor pages should link up to categories and related planning context

### Layer 6: SEO Guardrails

Goal: prevent scale from creating junk.

#### Do not do

- do not auto-publish empty combinations
- do not create pages with swapped keywords and no distinct substance
- do not index categories with no real depth
- do not ship AI-assisted pages without editorial cleanup

#### Standard for publishing

- page has a real angle
- page has enough unique content to stand alone
- page links into the rest of the site intentionally
- page supports either user decision-making or strong search intent, ideally both

### Immediate SEO Backlog

These are the next concrete SEO tasks:

1. Add breadcrumb structured data.
2. Add page-type structured data to category/vendor/guide pages.
3. Set and verify GA4.
4. Set and verify Google Search Console.
5. Submit sitemap to Search Console.
6. Build the first 5 true SEO landing pages manually.
7. Add category attributes needed for style/type intent pages.
8. Design the future `guides` / `seo_pages` content model.

### SEO Build Sequence

Use this order:

1. Technical foundation
2. First manual search pages
3. Better internal linking
4. Content model for scale
5. Template-driven expansion with editorial review

## SEO Publishing Roadmap

Goal: convert the SEO/content strategy into a real page-production sequence.

### First Query Clusters

These are the first clusters worth building around:

#### Cluster 1: Newport wedding venues

Why first:

- highest commercial intent
- strongest local search demand
- natural bridge between editorial and directory

Core intents:

- newport wedding venues
- small wedding venues in Newport
- luxury Newport wedding venues
- waterfront wedding venues in Newport
- intimate wedding venues in Newport

#### Cluster 2: Planning a Newport wedding

Why next:

- broad informational intent
- strong authority-building content
- high internal-link value into venues and vendors

Core intents:

- Newport wedding timeline
- Newport wedding budget
- how to plan a Newport wedding
- how to choose a Newport wedding venue

#### Cluster 3: Newport wedding weekend

Why next:

- highly local
- strong differentiation
- reinforces destination-wedding angle

Core intents:

- Newport wedding weekend itinerary
- best time of year for a Newport wedding
- Newport rehearsal dinner ideas

#### Cluster 4: Category-commercial pages

Why after the above:

- supports directory depth
- converts category demand once editorial foundation is stronger

Core intents:

- Newport wedding photographers
- Newport wedding planners
- Newport wedding florists
- Newport wedding caterers

### First 10 SEO/Content Pages

These are the first pages to build intentionally.

1. `Newport Wedding Venues`
   - page type: hybrid landing page
   - goal: capture top venue intent and route traffic into venue category pages and listings

2. `Small Wedding Venues in Newport`
   - page type: editorial + hybrid landing page
   - goal: rank for intimate/small venue intent and connect into venue browsing

3. `Luxury Newport Wedding Venues`
   - page type: hybrid landing page
   - goal: align with high-end Newport positioning and commercial venue demand

4. `Waterfront Wedding Venues in Newport`
   - page type: hybrid landing page
   - goal: capture one of the strongest destination-specific venue angles

5. `Newport Wedding Budget Guide`
   - page type: guide page
   - goal: attract planning traffic and qualify users before vendor exploration

6. `Newport Wedding Timeline`
   - page type: guide page
   - goal: planning authority and internal links into venue/planner/vendor pages

7. `How to Choose a Newport Wedding Venue`
   - page type: guide page
   - goal: bridge early planning intent into venue and directory pages

8. `Best Time of Year for a Newport Wedding`
   - page type: local guide page
   - goal: seasonal/local search intent and authority

9. `Newport Wedding Weekend Itinerary`
   - page type: local guide page
   - goal: destination-weekend positioning and high local specificity

10. `Newport Rehearsal Dinner Ideas`
   - page type: local guide page
   - goal: expand wedding-weekend cluster and support surrounding pages

### Page Type Rules

Use these definitions when deciding what to build:

#### Guide page

- best for planning and authority
- should answer one core question well
- should link to categories and adjacent guides

#### Hybrid landing page

- best for high-intent SEO plus directory discovery
- should combine useful editorial framing with directory/category routing
- should not feel like a thin list page

#### Local guide page

- best for Newport-specific destination intent
- should feel locally informed, not generic wedding content with Newport pasted in

#### Category page

- best for direct commercial directory browsing
- should be strengthened by linking in from related guides and hybrid pages

### Internal Linking Plan

Each of the first 10 pages should create deliberate links.

#### `Newport Wedding Venues`

- link to:
  - `/planning/venues`
  - `/wedding/venues`
  - small/luxury/waterfront venue pages

#### `Small Wedding Venues in Newport`

- link to:
  - `/wedding/venues`
  - `How to Choose a Newport Wedding Venue`
  - `Newport Wedding Budget Guide`

#### `Luxury Newport Wedding Venues`

- link to:
  - `/wedding/venues`
  - `Best Time of Year for a Newport Wedding`
  - planners and photographers categories later

#### `Waterfront Wedding Venues in Newport`

- link to:
  - `/wedding/venues`
  - `Newport Wedding Weekend Itinerary`
  - `Best Time of Year for a Newport Wedding`

#### `Newport Wedding Budget Guide`

- link to:
  - `/planning/venues`
  - `/wedding/venues`
  - `/wedding/planners`

#### `Newport Wedding Timeline`

- link to:
  - `/wedding/planners`
  - `/wedding/photographers`
  - `How to Choose a Newport Wedding Venue`

#### `How to Choose a Newport Wedding Venue`

- link to:
  - `/wedding/venues`
  - `Newport Wedding Budget Guide`
  - `Newport Wedding Venues`

#### `Best Time of Year for a Newport Wedding`

- link to:
  - `Newport Wedding Venues`
  - `Waterfront Wedding Venues in Newport`
  - `Newport Wedding Weekend Itinerary`

#### `Newport Wedding Weekend Itinerary`

- link to:
  - `Newport Rehearsal Dinner Ideas`
  - `Best Time of Year for a Newport Wedding`
  - `/newport-guide`

#### `Newport Rehearsal Dinner Ideas`

- link to:
  - `Newport Wedding Weekend Itinerary`
  - `/newport-guide`
  - venue or planning pages where relevant

### Publish Order

Build in this order:

1. `Newport Wedding Venues`
2. `How to Choose a Newport Wedding Venue`
3. `Newport Wedding Budget Guide`
4. `Best Time of Year for a Newport Wedding`
5. `Newport Wedding Weekend Itinerary`
6. `Small Wedding Venues in Newport`
7. `Waterfront Wedding Venues in Newport`
8. `Luxury Newport Wedding Venues`
9. `Newport Wedding Timeline`
10. `Newport Rehearsal Dinner Ideas`

### Content Brief Standard

Before writing each page, define:

- primary query
- page type
- user stage
- conversion goal
- 3 to 5 key internal links
- what makes this page distinct from similar pages

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
