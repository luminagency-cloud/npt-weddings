import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getVendorBySlug, getVendorPhotos, getVendorTags } from "@/lib/queries"

export const revalidate = 3600

type Props = {
  params: Promise<{ category: string; vendor: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vendor: vendorSlug } = await params
  const vendor = await getVendorBySlug(vendorSlug)
  if (!vendor) return {}
  const title = vendor.meta_title ?? `${vendor.name} | Newport, RI`
  const description =
    vendor.meta_description ??
    vendor.description_override ??
    vendor.description ??
    `${vendor.name} is a wedding vendor in Newport, Rhode Island.`
  return { title, description }
}

export default async function VendorDetailPage({ params }: Props) {
  const { vendor: vendorSlug } = await params
  const [vendor, photos, tags] = await Promise.all([
    getVendorBySlug(vendorSlug),
    getVendorPhotos(vendorSlug).catch(() => []),
    getVendorTags(vendorSlug).catch(() => []),
  ])

  if (!vendor) notFound()

  const description = vendor.description_override ?? vendor.description ?? null
  const promoActive =
    vendor.promo_label &&
    vendor.promo_expires_at &&
    new Date(vendor.promo_expires_at) > new Date()
  const primaryPhoto = photos.find((p) => p.is_primary) ?? photos[0] ?? null

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-neutral-500 mb-6">
        <Link href="/wedding" className="hover:underline">Wedding Directory</Link>
        {" / "}
        <Link href={`/wedding/${vendor.category_slug}`} className="hover:underline">
          {vendor.category_label}
        </Link>
        {" / "}
        <span className="text-neutral-900">{vendor.name}</span>
      </nav>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              {vendor.name}
            </h1>
            {vendor.tier === "featured" && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                Featured
              </span>
            )}
            {vendor.verified && (
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                Verified
              </span>
            )}
          </div>
          {promoActive && (
            <p className="mt-1 text-sm font-medium text-rose-600">{vendor.promo_label}</p>
          )}
        </div>
      </div>
      {primaryPhoto && (
        <div className="mb-6 rounded-xl overflow-hidden bg-neutral-100 aspect-video">
          <img src={primaryPhoto.r2_url} alt={primaryPhoto.alt_text ?? vendor.name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-2 text-sm text-neutral-600">
          {vendor.address && (
            <p>
              <span className="font-medium text-neutral-900">Address</span><br />
              {vendor.address}, {vendor.city}, {vendor.state} {vendor.zip}
            </p>
          )}
          {vendor.phone && (
            <p>
              <span className="font-medium text-neutral-900">Phone</span><br />
              <a href={`tel:${vendor.phone}`} className="hover:underline">{vendor.phone}</a>
            </p>
          )}
          {vendor.website && (
            <p>
              <span className="font-medium text-neutral-900">Website</span><br />
              <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                {vendor.website.replace(/^https?:\/\//, "")}
              </a>
            </p>
          )}
        </div>
        {tags.length > 0 && (
          <div>
            <p className="text-sm font-medium text-neutral-900 mb-2">Tags</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag.id} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {description && (
        <div className="prose prose-neutral max-w-none mb-8">
          <p>{description}</p>
        </div>
      )}
      {photos.length > 1 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((photo) => (
              <div key={photo.id} className="rounded-lg overflow-hidden bg-neutral-100 aspect-square">
                <img src={photo.r2_url} alt={photo.alt_text ?? vendor.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
      {!vendor.claimed && (
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="font-semibold text-neutral-900 mb-1">Is this your business?</h2>
          <p className="text-sm text-neutral-600 mb-4">
            Claim this listing to add photos, update your description, and get priority placement.
          </p>
          <Link
            href={`/claim/${vendor.slug}`}
            className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 transition-colors"
          >
            Claim &amp; Upgrade This Listing
          </Link>
        </div>
      )}
    </main>
  )
}
