import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getCategoryBySlug, getVendorsByCategory } from "@/lib/queries"
import { VendorCard } from "@/components/vendor-card"

export const revalidate = 3600

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) return {}
  return {
    title: `${category.label} in Newport, RI`,
    description:
      category.description ??
      `Find ${category.label.toLowerCase()} for your Newport, Rhode Island wedding.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params
  const [category, vendors] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getVendorsByCategory(categorySlug),
  ])

  if (!category) notFound()

  const featured = vendors.filter((v) => v.tier === "featured")
  const rest = vendors.filter((v) => v.tier !== "featured")

  return (
    <div>
      <section
        className="relative overflow-hidden px-4 py-16 text-white"
        style={{ background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
      >
        <div
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.12)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-5 flex items-center gap-2 text-sm" style={{ color: "var(--gold-light)" }}>
            <Link href="/wedding" className="transition-colors hover:text-white">
              Wedding Directory
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white/90">{category.label}</span>
          </nav>
          <h1
            className="mb-2 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.label}
          </h1>
          {category.description && (
            <p className="mt-2 max-w-xl text-white/70">{category.description}</p>
          )}
        </div>
      </section>

      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), var(--gold-light), var(--gold), transparent)" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {vendors.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-neutral-400">No vendors listed in this category yet.</p>
            <Link
              href="/wedding"
              className="mt-4 inline-block text-sm hover:underline"
              style={{ color: "var(--primary)" }}
            >
              ← Back to directory
            </Link>
          </div>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="mb-10">
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--gold)" }}
                >
                  Featured
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {featured.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} categorySlug={categorySlug} />
                  ))}
                </div>
              </div>
            )}

            {rest.length > 0 && (
              <div>
                {featured.length > 0 && (
                  <p
                    className="mb-4 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--primary)" }}
                  >
                    All Vendors
                  </p>
                )}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} categorySlug={categorySlug} />
                  ))}
                </div>
              </div>
            )}

            <p className="mt-8 text-center text-xs text-neutral-400">
              {vendors.length} {vendors.length === 1 ? "vendor" : "vendors"} in Newport County, RI
            </p>
          </>
        )}
      </section>
    </div>
  )
}
