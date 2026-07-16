import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "For Vendors",
  description:
    "List your Newport wedding business where couples actually plan. Direct leads, never resold. Local, curated, and priced as an obvious yes against The Knot.",
  alternates: { canonical: "/for-vendors" },
  openGraph: {
    type: "website",
    title: "For Vendors | Married in Newport",
    description:
      "Direct leads, never resold. Local, curated, and priced as an obvious yes against The Knot.",
  },
}

const differentiators = [
  {
    step: "01",
    title: "Direct leads, never resold.",
    body: "An inquiry through your page goes to you — not a shared pool the vendor down the street also answers.",
  },
  {
    step: "02",
    title: "Local and curated.",
    body: "Newport couples, Newport vendors. Not a national directory dump you get lost in.",
  },
  {
    step: "03",
    title: "No 12-month lock.",
    body: "Stay because it works, not because a contract says you have to.",
  },
  {
    step: "04",
    title: "A real report.",
    body: "Monthly views, clicks, and leads for your listing — see exactly what you pay for.",
  },
]

const comparison = [
  { label: "Featured cost", us: "~$99–$250 / mo", them: "$5,000–$15,000 / yr" },
  { label: "Contract", us: "None — cancel anytime", them: "12 months, no early exit" },
  { label: "Leads", us: "Direct to you", them: "Shared with competitors" },
  { label: "Focus", us: "Newport only, curated", them: "National directory" },
  { label: "Reporting", us: "Monthly per-listing report", them: "Opaque" },
]

const tiers = [
  {
    name: "Basic",
    price: "Free",
    featured: false,
    features: ["Listed in the directory", "Standard placement", "Core profile"],
  },
  {
    name: "Featured",
    price: "~$99 / mo",
    featured: true,
    features: [
      "Top-of-category placement",
      "Enhanced profile",
      "Direct inquiry form",
      "Monthly lead report",
    ],
  },
  {
    name: "Venue Premium",
    price: "~$250 / mo",
    featured: false,
    features: [
      "Everything in Featured",
      "Priority across venue surfaces",
      "Richer gallery",
    ],
  },
]

export default function ForVendorsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_#f6efe4_0%,_#fffaf4_54%,_#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_right,_rgba(201,169,110,0.22),_transparent_34%),radial-gradient(circle_at_left_center,_rgba(44,74,107,0.12),_transparent_36%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:pb-20 lg:pt-24">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
            For Newport wedding vendors
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get found by the couples actually getting married in Newport.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
            A local, curated wedding directory couples actually use — where every
            lead is yours, never resold to the vendor down the street.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary)]"
            >
              See pricing
            </Link>
            <Link
              href="/wedding"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/75 px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-white"
            >
              Browse the directory
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              You&apos;re paying thousands for leads your competitors also answer.
            </h2>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7">
            <p className="text-base leading-7 text-[var(--color-muted)]">
              The Knot and WeddingWire — the same company — charge{" "}
              <span className="font-semibold text-[var(--color-ink)]">
                $5,000–$15,000 a year
              </span>{" "}
              for a featured listing, lock you into a{" "}
              <span className="font-semibold text-[var(--color-ink)]">
                12-month contract
              </span>
              , and share the leads they send you with competing vendors.
              Reported effective cost per booking runs $500–$2,000.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-[var(--color-line)] bg-[color:color-mix(in_oklab,var(--color-cream)_76%,white)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              Why Married in Newport
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              Local, curated, and yours.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_16px_36px_rgba(66,45,28,0.05)]"
              >
                <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                  {item.step}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[var(--color-cream-strong)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  <th className="px-5 py-4 font-semibold">What matters</th>
                  <th className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                    Married in Newport
                  </th>
                  <th className="px-5 py-4 font-semibold">The Knot / WeddingWire</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.label}
                    className="border-t border-[var(--color-line)] text-sm"
                  >
                    <td className="px-5 py-4 text-[var(--color-muted)]">{row.label}</td>
                    <td className="px-5 py-4 font-semibold text-[var(--color-ink)]">
                      {row.us}
                    </td>
                    <td className="px-5 py-4 text-[var(--color-muted)]">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
            Priced as an obvious yes.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? "flex flex-col rounded-[1.8rem] border-2 border-[var(--color-ink)] bg-white p-7 shadow-[0_22px_48px_rgba(66,45,28,0.12)]"
                  : "flex flex-col rounded-[1.8rem] border border-[var(--color-line)] bg-white p-7"
              }
            >
              {tier.featured ? (
                <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-cream-strong)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-deep)]">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                {tier.name}
              </h3>
              <p className="mt-2 text-lg font-semibold text-[var(--color-gold-deep)]">
                {tier.price}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold-deep)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[var(--color-muted)]">
          No contract. Cancel anytime. Featured and Venue Premium are rolling out
          now — claim your listing and we&apos;ll get you set up.
        </p>
      </section>

      {/* ROI / CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-[2rem] bg-[var(--primary-dark)] px-8 py-14 text-center sm:px-14">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--gold-light)]">
            The math
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            One booking pays for the year — many times over.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
            A Newport wedding booking is worth thousands; venues commonly $15,000
            and up. Featured at roughly $1,200 a year pays for itself with a
            single booking. The question isn&apos;t the cost — it&apos;s whether
            you want the couples already on the site.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/wedding"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold-light)] px-6 py-3 text-sm font-semibold text-[var(--primary-dark)] transition-colors hover:bg-white"
            >
              Find &amp; claim your listing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
