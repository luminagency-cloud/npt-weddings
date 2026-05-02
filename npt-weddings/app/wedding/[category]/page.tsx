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
  const { category } = await params
  const cat = await getCategoryBySlug(category)
  if (!cat) return {}
  return {
    title: `${cat.label} in Newport, RI`,
    description:
      cat.description ??
      `Find the best ${cat.label.toLowerCase()} for your Newport, Rhode Island wedding.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const [cat, vendors] = await Promise.all([
    getCategoryBySlug(category),
    getVendorsByCategory(category),
  ])

  if (!cat) notFound()

  const featured = vendors.filter((v) => v.tier === "featured")
  const paid = vendors.filter((v) => v.tier === "paid")
  const basic = vendors.filter((v) => v.tier === "basic")

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-neutral-500 mb-6">
        <Link href="/wedding" className="hover:underline">Wedding Directory</Link>
        {" / "}
        <span className="text-neutral-900">{cat.label}</span>
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          {cat.label} in Newport, RI
        </h1>
        {cat.description && (
          <p className="mt-2 text-neutral-600">{cat.description}</p>
        )}
        <p className="mt-1 text-sm text-neutral-400">
          {vendors.length} {vendors.length === 1 ? "vendor" : "vendors"}
        </p>
      </div>
      {vendors.length === 0 ? (
        <p className="text-neutral-500">No vendors listed yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {[...featured, ...paid, ...basic].map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} categorySlug={cat.slug} />
          ))}
        </div>
      )}
    </main>
  )
}
