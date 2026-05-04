import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getCategoryBySlug, getVendorsByCategory } from "@/lib/queries"
import { getCategoryInsight } from "@/lib/directory-content"
import {
  buildBreadcrumbList,
  buildCollectionPageJsonLd,
  serializeJsonLd,
} from "@/lib/structured-data"
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
    title: category.label,
    description:
      category.description ??
      `Find ${category.label.toLowerCase()} for your Newport, Rhode Island wedding.`,
    alternates: { canonical: `/wedding/${slug}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params
  const [category, vendors] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getVendorsByCategory(categorySlug),
  ])

  if (!category) notFound()

  const description =
    category.description ??
    `Find ${category.label.toLowerCase()} for your Newport, Rhode Island wedding.`
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Wedding Directory", path: "/wedding" },
    { name: category.label, path: `/wedding/${category.slug}` },
  ]
  const collectionJsonLd = buildCollectionPageJsonLd({
    title: `${category.label} in Newport, RI`,
    description,
    path: `/wedding/${category.slug}`,
    itemPaths: vendors.map((vendor) => `/wedding/${category.slug}/${vendor.slug}`),
  })
  const breadcrumbJsonLd = buildBreadcrumbList(breadcrumbItems)
  const insight = getCategoryInsight(category.slug)

  const featured = vendors.filter((v) => v.tier === "featured")
  const rest = vendors.filter((v) => v.tier !== "featured")

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
        className="relative overflow-hidden px-4 py-16 text-white"
        style={{ background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
      >
        <div
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.12)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/wedding", label: "Wedding Directory" },
              { label: category.label },
            ]}
            className="mb-5 text-[var(--gold-light)]"
          />
          <h1
            className="mb-2 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.label}
          </h1>
          <p className="mt-2 max-w-2xl text-white/70">
            {category.description ?? insight.intro}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
            <span>{vendors.length} {vendors.length === 1 ? "listing" : "listings"}</span>
            <span className="opacity-30">•</span>
            <span>{featured.length} featured</span>
          </div>
        </div>
      </section>

      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), var(--gold-light), var(--gold), transparent)" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 grid gap-4 rounded-[1.75rem] bg-white p-6 md:grid-cols-[1.2fr_0.8fr]" style={{ border: "1px solid var(--border)" }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              How to use this page
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {insight.intro}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[1.25rem] bg-[var(--background)] p-5">
            <p className="text-sm leading-6 text-neutral-600">
              {insight.decisionLens}
            </p>
            <Link
              href="/planning/venues"
              className="inline-flex text-sm font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Read the venue planning guide →
            </Link>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {insight.nextSteps.map((step) => (
            <Link
              key={step.href}
              href={step.href}
              className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-5 transition-colors hover:border-[var(--color-line-strong)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                {step.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{step.description}</p>
            </Link>
          ))}
          <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              Shortlist rule
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{insight.shortlistPrompt}</p>
          </div>
        </div>

        {vendors.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-neutral-500">This category is not populated yet.</p>
            <p className="mt-2 text-sm text-neutral-400">
              Use the planning guides for now, then come back once more listings are live.
            </p>
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
