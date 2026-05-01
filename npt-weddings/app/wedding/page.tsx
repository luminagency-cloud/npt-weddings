import Link from "next/link"
import { getCategories } from "@/lib/queries"

export const revalidate = 3600

export const metadata = {
  title: "Wedding Directory | Newport, Rhode Island",
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

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-28 px-4 text-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)",
        }}
      >
        {/* Decorative rings */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.15)" }}
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.10)" }}
          aria-hidden
        />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-5"
            style={{ color: "var(--gold-light)" }}
          >
            Newport County, Rhode Island
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find Your Perfect
            <br />
            <span style={{ color: "var(--gold-light)" }}>Wedding Vendors</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            From intimate gatherings in historic mansions to grand celebrations by the sea — discover Newport&rsquo;s finest.
          </p>
        </div>
      </section>

      {/* Gold accent bar */}
      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), var(--gold-light), var(--gold), transparent)" }}
      />

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
          >
            Browse by Category
          </h2>
          <p className="text-sm text-neutral-500">
            Everything you need for your Newport wedding, in one place
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/wedding/${cat.slug}`}
              className="group flex flex-col items-center text-center rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-3xl mb-3 select-none" aria-hidden>
                {CATEGORY_ICONS[cat.slug] ?? "✦"}
              </span>
              <h3
                className="font-semibold text-neutral-800 group-hover:transition-colors text-sm sm:text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.label}
              </h3>
              {cat.description && (
                <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              )}
              <span
                className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--gold)" }}
              >
                Browse →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Subtle CTA strip */}
      <section
        className="py-14 px-4 text-center"
        style={{ background: "var(--card-bg)", borderTop: "1px solid var(--border)" }}
      >
        <p
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
        >
          Are you a Newport wedding vendor?
        </p>
        <p className="text-sm text-neutral-500 mb-5">
          Claim your listing and reach couples planning their Newport wedding.
        </p>
        <Link
          href="/claim"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          Claim your listing
        </Link>
      </section>
    </div>
  )
}
