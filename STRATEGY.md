# Strategy

## What this is

`npt-weddings` (public brand: Married in Newport, live at weddingsinnewport.com)
is a local, couple-first wedding planning site with a curated vendor directory.
This document sets the business strategy the product and roadmap serve. It
supersedes the earlier "AI Wedding Planner" execution doc, which was built on a
model that does not hold.

## The correction

The earlier plan framed a national, couple-facing AI wedding-planner app as a
recurring-revenue SaaS. That model fails for reasons that are structural, not
fixable by execution:

- A wedding is a one-time event. The couple churns ~100% right after it. There
  is no recurring subscription to defend, and MRR / "continuity" framing does
  not apply to a 6-12 month customer.
- The couple-facing layer is free everywhere. The Knot, Zola, and WeddingWire
  give couples planning tools for $0 and monetize vendors. Charging couples
  $49-99/mo fights free.
- Couples spend on the wedding, not on software. Willingness to pay for a
  planning tool is low and one-time.
- The market sizing was inflated. ~$261B is total wedding spend (venues, rings,
  dresses), not the wedding-software market, which is far smaller.

Net: couples are the audience, not the customer.

## The model that does hold

Two surfaces, one funnel:

- Directory (this repo) = the product and the money. Local, curated,
  couple-first. Vendors are the paying customer. Recurring B2B revenue via
  featured / priority listings, sold market by market.
- Planning app (separate, later) = top-of-funnel demand. Horizontal and
  location-independent. Couples use it free. Its job is to earn couple attention
  cheaply (SEO, referral, genuine AI utility) and route couples in covered
  markets to paying vendors.

The app is marketing for the directory, not a business on its own.

## Why this fits

- Recurring revenue on the vendor side, not one-and-done couples.
- B2B local sales plus SEO defensibility.
- Uses what already exists: a live, polished directory with real inventory and
  working SEO / JSON-LD.

## Positioning vs incumbents

The Knot / WeddingWire (same company, TKWW) are the reference point vendors
already resent:

- Expensive: base ~$50-150/mo rural, ~$200-450/mo mid-size, ~$500-1,200+/mo
  metro; featured listings ~$5,000-15,000/yr.
- 12-month contracts, no early exit.
- Leads are shared with competing vendors.
- Effective cost per booking reported at ~$500-2,000.

Married in Newport's wedge:

- Local and curated, not a national dump.
- Direct leads, never resold to competitors.
- No 12-month lock.
- Priced as an obvious yes against a $5,000+ featured listing.

Newport is a premium destination market (Bellevue estates, high average booking
value), so vendors there can rationalize real ad spend even at low volume. Good
first market for this model.

## Monetization model (illustrative, needs local validation)

Numbers are directional, to be replaced with real ones once lead volume is
instrumented (see ROADMAP Phase 2).

Anchor (what vendors pay incumbents): featured listings ~$5,000-15,000/yr on
12-month contracts.

Married in Newport pricing (undercut, direct leads, no lock):

- Basic listing: free (inventory and SEO).
- Featured (category priority + enhanced profile): ~$99/mo (~$1,188/yr).
- Venue premium (highest booking-value category): ~$250/mo (~$3,000/yr).

Single mature market (Newport), conservative:

- Grow to ~120 real listed businesses.
- ~25 featured @ $99/mo -> ~$2,475/mo -> ~$29.7k/yr.
- ~8 venue premium @ $250/mo -> ~$2,000/mo -> ~$24k/yr.
- Newport run-rate: roughly $50k/yr recurring, before upsells / seasonal boosts.

Scaling: the model is per-market. ~8-10 comparable markets at similar maturity
-> ~$300-500k/yr recurring. Each new market is a content + inventory +
local-sales build, not new engineering.

Reality check: this revenue is earned through vendor sales, which is high-touch
(incumbents run sales teams). It is recurring, but not passive. Market expansion
is gated by sales / content time, which is the scarce resource to protect.

## What we keep from the old plan

- Target couple profile: mid-budget, DIY-leaning, 20s-30s. The right audience to
  attract with free tools and content.
- Channel research: wedding subreddits, Facebook groups, YouTube. Valid for
  content / SEO and audience, feeding directory traffic.
- Content topics: budget, timeline, vendor coordination. Already the directory's
  editorial / planning pages; also the app's core utility.
- Competitor set (The Knot, Zola, WeddingWire). Repositioned above as the
  vendors' pain, not a couple-subscription battleground.

## What we discard

- Couple subscriptions ($49-99/mo), continuity / MRR, and the $500-5,000
  "backend" package.
- The $261B TAM, 15.5% CAGR, and the $850k MRR / $10.2M ARR projections, and the
  34:1 LTV:CAC.
- "1-2 week MVP" for a full AI orchestrator, and "first-mover in AI planning"
  (incumbents already ship AI).

## Related docs

- [ROADMAP.md](./ROADMAP.md) - the phased sequence everything follows.
- [APP-FUNNEL.md](./APP-FUNNEL.md) - the separate planning-app workplan.
- [TODO.md](./TODO.md) - the current directory launch punch list (Phase 1).
