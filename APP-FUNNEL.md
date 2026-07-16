# Planning App - Funnel Workplan

Separate workplan for the location-independent couple app. The app is
top-of-funnel demand for the directory (see [STRATEGY.md](./STRATEGY.md)), not a
standalone product. Kept separate because it will be its own codebase; when it
gets its own repo, this doc moves with it.

## Role

- Attract couples cheaply (SEO, referral, genuine AI utility).
- Build audience and email list.
- In covered markets, hand couples to directory vendors.
- Everywhere else: a free brand / SEO surface with no monetization expectation
  yet.

It does not carry revenue. Do not price couples. Do not add features that only
exist to justify a subscription.

## Sequencing (pushback baked in)

- This is Phase 3+ work in [ROADMAP.md](./ROADMAP.md), not now.
- Do not build it before the directory is launched (Phase 1) and generating
  traceable leads (Phase 2). A funnel into a store with no paid shelves and no
  proven traffic is wasted effort.
- Its monetization value is gated to markets where directory inventory exists.
  Location-independent is right for audience and SEO; just know that
  "conversion" (vendor revenue) only happens in covered markets.

## Scope - do (minimal, genuinely AI)

The one place incumbents are weak is genuine, personalized AI help. Keep to a
tight set a couple would actually use and share:

- Smart timeline: generate and adapt a planning timeline from wedding date,
  guest count, and venue status.
- Budget helper: allocate and track a realistic budget from total + region +
  priorities; flag over / under.
- "What's next" copilot: given where they are, name the next few decisions in
  order (the real pain: 200+ decisions, wrong order).
- Vendor shortlist / tracker: track vendors under consideration, questions to
  ask, quotes received. In covered markets, seed from the directory.

## Scope - cut

- No vendor communication automation, quote negotiation, or CRM.
- No registry, websites, RSVP, or seating - incumbents own these and they are
  not funnel.
- No couple payments or tiers.
- No attempt at feature parity with The Knot / Zola.

## Handoff to the directory

- Detect market (wedding location).
- If covered: surface relevant directory vendors in shortlist / next-steps; pass
  through as direct (non-shared) leads.
- If not covered: capture interest (email, location) as a signal for which
  market to build next.

## Build notes

- Separate codebase from the directory. Do not merge into `npt-weddings`.
- Reuse infra patterns (Next.js, Neon) and, where useful, read directory vendor
  data through a clean interface - but keep the two products decoupled.

## Success measures

- Cheap couple acquisition (organic / referral share high; paid near zero - paid
  does not clear for a free couple tool).
- Audience / email growth.
- In covered markets: qualified leads handed to vendors (the number that makes
  vendors renew).
