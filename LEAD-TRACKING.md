# Lead Tracking (Phase 2)

Goal: turn directory traffic into per-vendor engagement and lead data that (a)
proves value so featured listings become sellable (Phase 3), and (b) becomes the
recurring report a vendor renews for. See [ROADMAP.md](./ROADMAP.md) Phase 2 and
[STRATEGY.md](./STRATEGY.md).

Nothing here blocks launch. Build it once the site is live and taking real
traffic.

## Two data surfaces

- `vendor_events` - append-only, high volume. Views and outbound clicks. Powers
  rollups ("42 profile views, 9 website clicks in 30 days").
- `vendor_leads` - low volume, high value. Inquiries a couple submits through the
  site. This is the direct, non-shared lead we sell against The Knot.

## Schema additions

```sql
CREATE TABLE vendor_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),      -- denormalized for fast category rollups
  event_type TEXT NOT NULL CHECK (event_type IN (
    'profile_view','website_click','phone_click','email_click','directions_click'
  )),
  session_id TEXT,                                  -- anonymous first-party cookie
  referrer TEXT,
  utm_source TEXT,
  path TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_vendor_events_rollup ON vendor_events(vendor_id, event_type, created_at);
CREATE INDEX idx_vendor_events_recent ON vendor_events(created_at);

CREATE TABLE vendor_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_date DATE,                                  -- couple's wedding date if given
  message TEXT,
  session_id TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','sent','read','archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_vendor_leads_vendor ON vendor_leads(vendor_id, created_at);
```

Keep `vendor_events` PII-free (anonymous session id only). `vendor_leads` holds
couple-entered contact info - that is the product, forwarded to the vendor.

## Where it fires (App Router)

- Ingest endpoint: `app/api/events/route.ts` (POST). Validates `event_type`
  against the allowlist, drops obvious bots (UA check), rate-limits by
  session/IP, inserts a `vendor_events` row. Client calls it with
  `navigator.sendBeacon` so it never blocks navigation.
- profile_view: a tiny client component (`<TrackView vendorId categoryId />`)
  mounted on `app/wedding/[category]/[vendor]/page.tsx`. Fire on mount, not in
  the server component (keeps RSC pure and avoids counting every bot render).
- outbound clicks: wrap the website / phone / email CTAs on the vendor detail
  page to beacon `website_click` / `phone_click` / `email_click` before the
  browser follows the link.
- lead submit: an inquiry form on vendor pages (featured first) POSTs to
  `app/api/leads/route.ts` -> inserts `vendor_leads`, emails the vendor (their
  `vendors.email`), and logs a `vendor_events` row. This is the couple -> vendor
  direct lead.

## queries.ts additions

Follow the existing `` db`...` `` tagged-template style; guard with `if (!db)`.

- `logVendorEvent(input)` - insert one event (called by the API route).
- `createVendorLead(input)` - insert a lead, return id.
- `getVendorEngagement(vendorId, sinceDays)` - counts by event_type for the
  window. The per-vendor rollup.
- `getVendorLeads(vendorId, sinceDays)` - lead list for the vendor report.
- `getCategoryEngagement(categorySlug, sinceDays)` - category totals, for the
  pitch ("photographers on the site got N inquiries last quarter").

## The report (the sellable artifact)

- Extend `app/admin/vendors/[id]` with a 30 / 90-day panel: views, outbound
  clicks, leads, plus the lead list.
- That panel is the screenshot / email you send a vendor to justify going
  featured, and the recurring value that drives renewal.

## Guardrails

- Anonymous only in `vendor_events`; no cross-site tracking.
- Bot filtering + rate limiting on ingest, or the numbers you show vendors are
  junk.
- GA4 stays for site-level analytics; this is first-party, per-vendor, and
  attributable - GA can't be the sales proof.
