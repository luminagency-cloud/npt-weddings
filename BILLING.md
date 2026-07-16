# Vendor Billing (Phase 3)

Goal: recurring vendor revenue via featured / premium placement. See
[ROADMAP.md](./ROADMAP.md) Phase 3, pricing in [STRATEGY.md](./STRATEGY.md), and
the pitch in [FOR-VENDORS.md](./FOR-VENDORS.md).

Do not start until Phase 2 lead data exists - you sell featured with the report,
not on faith.

## The schema is mostly ready

`vendors` already has `tier` ('basic' | 'paid' | 'featured'), `claimed`,
`claimed_by`, `claimed_at`, `verified`, `stripe_customer_id`,
`stripe_subscription_id`, `promo_label`, `promo_expires_at`. Placement already
respects tier (`getVendorsByCategory` orders featured -> paid -> basic).

Minimal additions:

```sql
ALTER TABLE vendors ADD COLUMN stripe_price_id TEXT;
ALTER TABLE vendors ADD COLUMN subscription_status TEXT;   -- active, past_due, canceled
ALTER TABLE vendors ADD COLUMN current_period_end TIMESTAMPTZ;
```

Stripe stays the source of truth for money; these columns are a local cache so
the site can render and sort without calling Stripe.

## Products / prices (Stripe)

- Featured - ~$99/mo recurring.
- Venue Premium - ~$250/mo recurring.

Create as Stripe Products with monthly Prices. Store the price ids in env:
`STRIPE_PRICE_FEATURED`, `STRIPE_PRICE_VENUE_PREMIUM` (alongside the reserved
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`).

## Claim -> paid flow

1. Claim (exists): `/claim/[vendor]`, manual review -> `claimed = true`,
   `claimed_by`, then `verified` after you confirm ownership.
2. Checkout: a "Go featured" button (vendor dashboard or a signed link you send)
   hits `app/api/stripe/checkout/route.ts`, which creates a Stripe Checkout
   Session for the chosen price, keyed to the vendor id (`client_reference_id`)
   and reusing `stripe_customer_id` if present.
3. Webhook: `app/api/stripe/webhook/route.ts` verifies the signature with
   `STRIPE_WEBHOOK_SECRET` and handles:
   - `checkout.session.completed` -> save `stripe_customer_id`,
     `stripe_subscription_id`, set `tier = 'featured'`, `subscription_status`,
     `current_period_end`.
   - `customer.subscription.updated` -> sync status / period end; keep or drop
     tier based on status.
   - `customer.subscription.deleted` / past_due -> downgrade `tier` to 'basic'
     (or 'paid' if you keep a mid tier).
4. Render: existing tier ordering + a featured badge. No further work - the
   directory already reads `tier`.

## queries.ts additions

- `getVendorByStripeCustomer(customerId)` - webhook lookup.
- `setVendorSubscription(vendorId, { customerId, subscriptionId, priceId, status, tier, currentPeriodEnd })`.
- `downgradeVendor(vendorId)` - back to basic on cancel / lapse.

## Start manual, then self-serve

Per the repo's ethos (DEPLOY.md: "Do Not Block Launch On ... Stripe"), close the
first paying vendors by hand:

- Create the Checkout link, or set `tier` via the existing admin `updateVendor`,
  and attach the Stripe customer in the dashboard.
- Add the self-serve checkout button only once the manual motion proves the price
  and the pitch.

## Guardrails

- Verify webhook signatures; treat unsigned calls as hostile.
- Idempotent webhook handling (Stripe retries).
- Never trust the client for tier - only the webhook flips paid status.
- Keep comps / manual deals possible via admin `updateVendor` (tier +
  promo_label).
