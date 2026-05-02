import type { Metadata } from "next"
import Link from "next/link"
import { getCategories } from "@/lib/queries"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Wedding Directory | Newport, Rhode Island",
  description: "Browse wedding vendors by category for Newport, Rhode Island.",
}

const CATEGORY_ICONS: Record<string, string> = {
  venues: "🏛️",
  photographers: "📷",
  florists: "💐",
  caterers: "🍽️",
  jewelers: "💍",
  music: "🎶",
  "hair-makeup": "✨",
  transportation: "🚗",
  videographers: "🎬",
  planners: "📋",
}

export default async function WeddingDirectoryPage() {
  const categories = await getCategories()
  const liveCategories = categories.filter((category) => (category.vendor_count ?? 0) > 0)
  const totalVendors = liveCategories.reduce(
    (sum, category) => sum + (category.vendor_count ?? 0),
    0
  )

  return (
    <div>
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
              className="group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="mb-3 select-none text-3xl" aria-hidden>
                {CATEGORY_ICONS[cat.slug] ?? "✦"}
              </span>
              <h3
                className="text-sm font-semibold text-neutral-800 sm:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.label}
              </h3>
              {cat.description && (
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-neutral-400">
                  {cat.description}
                </p>
              )}
              <span className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {cat.vendor_count} {cat.vendor_count === 1 ? "listing" : "listings"}
              </span>
              <span
                className="mt-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: "var(--gold)" }}
              >
                Browse →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="px-4 py-14 text-center"
        style={{ background: "var(--card-bg)", borderTop: "1px solid var(--border)" }}
      >
        <p
          className="mb-2 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
        >
          Need help narrowing your options?
        </p>
        <p className="mb-5 text-sm text-neutral-500">
          Start with venues, timing, and guest experience before treating the
          directory like a giant checklist.
        </p>
        <Link
          href="/planning"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          Start planning
        </Link>
      </section>
    </div>
  )
}
