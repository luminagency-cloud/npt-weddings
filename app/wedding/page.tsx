import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getCategoryCardContent } from "@/lib/directory-content"
import { getCategories } from "@/lib/queries"
import {
  buildBreadcrumbList,
  buildCollectionPageJsonLd,
  serializeJsonLd,
} from "@/lib/structured-data"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Newport Wedding Vendor Directory",
  description: "Browse wedding vendors by category for Newport, Rhode Island — venues, photographers, planners, florists, and more.",
  alternates: { canonical: "/wedding" },
}

const CATEGORY_ICONS: Record<string, string> = {
  venues: "🏛️",
  photographers: "📷",
  florists: "💐",
  caterers: "🍽️",
  bakers: "🎂",
  jewelers: "💍",
  music: "🎶",
  "hair-makeup": "✨",
  transportation: "🚗",
  videographers: "🎬",
  planners: "📋",
}

const directoryPrinciples = [
  {
    title: "Do venue work first",
    body:
      "If the wedding format is still fuzzy, the directory will feel noisier than it actually is. Venue clarity makes every later category easier to judge.",
  },
  {
    title: "Shortlist by fit, not by quantity",
    body:
      "The goal is not to create a giant list. The goal is to get to a tighter set of businesses that match tone, guest count, and operational reality.",
  },
  {
    title: "Use categories at the right moment",
    body:
      "Some categories matter earlier than others. Venues, planners, and photographers usually deserve attention before the rest of the stack.",
  },
]

export default async function WeddingDirectoryPage() {
  const categories = await getCategories()
  const liveCategories = categories.filter((category) => (category.vendor_count ?? 0) > 0)
  const totalVendors = liveCategories.reduce(
    (sum, category) => sum + (category.vendor_count ?? 0),
    0
  )
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Wedding Directory", path: "/wedding" },
  ])
  const collectionJsonLd = buildCollectionPageJsonLd({
    title: "Wedding Directory | Newport, Rhode Island",
    description: "Browse wedding vendors by category for Newport, Rhode Island.",
    path: "/wedding",
    itemPaths: liveCategories.map((category) => `/wedding/${category.slug}`),
  })

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(collectionJsonLd) }}
      />
      <section
        className="relative overflow-hidden px-4 py-28 text-center text-white"
        style={{
          background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)",
        }}
      >
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.15)" }}
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.10)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Wedding Directory" },
            ]}
            className="mb-5 justify-center text-[var(--gold-light)]"
          />
          <p
            className="mb-5 text-xs uppercase tracking-[0.35em]"
            style={{ color: "var(--gold-light)" }}
          >
            Newport County, Rhode Island
          </p>
          <h1
            className="mb-5 text-5xl font-bold leading-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A tighter Newport
            <br />
            <span style={{ color: "var(--gold-light)" }}>wedding directory</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Browse the categories that actually matter, then move into planning
            with a clearer point of view on venues, guest experience, and the
            kind of weekend you want to build.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-white/70">
            <span>{liveCategories.length} live categories</span>
            <span className="opacity-30">•</span>
            <span>{totalVendors} listed vendors</span>
          </div>
        </div>
      </section>

      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), var(--gold-light), var(--gold), transparent)" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-6 md:grid-cols-3">
          {directoryPrinciples.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] bg-[var(--color-cream-strong)] p-5">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2
            className="mb-2 text-3xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
          >
            Browse by Category
          </h2>
          <p className="text-sm text-neutral-500">
            Focus on the categories with enough real depth to be useful.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {liveCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/wedding/${cat.slug}`}
              className="group flex flex-col rounded-2xl p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="mb-3 block select-none text-3xl" aria-hidden>
                    {CATEGORY_ICONS[cat.slug] ?? "✦"}
                  </span>
                  <h3
                    className="text-base font-semibold text-neutral-800"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {cat.vendor_count} {cat.vendor_count === 1 ? "listing" : "listings"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {getCategoryCardContent(cat.slug).bestFor}
              </p>
              <p className="mt-3 text-xs leading-5 text-neutral-400">
                {cat.description ?? getCategoryCardContent(cat.slug).planningHint}
              </p>
              <span
                className="mt-5 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: "var(--gold)" }}
              >
                Browse →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="px-4 py-14"
        style={{ background: "var(--card-bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-[var(--color-line)] bg-white p-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p
              className="mb-2 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
            >
              Start from planning, then browse with fewer open questions.
            </p>
            <p className="text-sm leading-6 text-neutral-500">
              The strongest way to use the directory is to let venue format,
              guest experience, budget shape, and weekend tone narrow the search
              before you start clicking through listings.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="/planning"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Start planning
            </Link>
            <Link
              href="/planning/venues"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Or start with venue guidance →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
