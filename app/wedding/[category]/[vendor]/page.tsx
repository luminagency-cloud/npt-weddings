import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getVendorByCategoryAndSlug,
  getVendorPhotos,
  getVendorTags,
} from "@/lib/queries"

export const revalidate = 3600

type Props = {
  params: Promise<{ category: string; vendor: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, vendor: vendorSlug } = await params
  const vendor = await getVendorByCategoryAndSlug(category, vendorSlug)
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
  const { category, vendor: vendorSlug } = await params
  const vendor = await getVendorByCategoryAndSlug(category, vendorSlug)

  if (!vendor) notFound()

  const [photos, tags] = await Promise.all([
    getVendorPhotos(vendor.id).catch(() => []),
    getVendorTags(vendor.id).catch(() => []),
  ])

  const description = vendor.description_override ?? vendor.description ?? null
  const promoActive =
    vendor.promo_label &&
    vendor.promo_expires_at &&
    new Date(vendor.promo_expires_at) > new Date()
  const primaryPhoto = photos.find((p) => p.is_primary) ?? photos[0] ?? null

  return (
    <div>
      {/* Page header band */}
      <section
        className="py-10 px-4"
        style={{ background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-dark) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-4" style={{ color: "var(--gold-light)" }}>
            <Link href="/wedding" className="hover:text-white transition-colors">Wedding Directory</Link>
            <span className="opacity-40">/</span>
            <Link href={`/wedding/${vendor.category_slug}`} className="hover:text-white transition-colors">
              {vendor.category_label}
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white/90">{vendor.name}</span>
          </nav>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {vendor.name}
                </h1>
                {vendor.tier === "featured" && (
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-semibold"
                    style={{ background: "#fdf3d8", color: "#8a6a0a" }}
                  >
                    Featured
                  </span>
                )}
                {vendor.verified && (
                  <span className="rounded-full bg-green-100 px-3 py-0.5 text-xs font-semibold text-green-800">
                    Verified
                  </span>
                )}
              </div>
              {promoActive && (
                <p className="mt-2 text-sm font-medium text-rose-300">{vendor.promo_label}</p>
              )}
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                A Newport-area {vendor.category_label?.toLowerCase() ?? "wedding vendor"} listing
                for couples who already have a clearer sense of venue, timing,
                and guest experience priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--gold), var(--gold-light), var(--gold), transparent)" }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {primaryPhoto && (
          <div className="mb-8 rounded-2xl overflow-hidden bg-neutral-100 aspect-video shadow-sm">
            <img
              src={primaryPhoto.r2_url}
              alt={primaryPhoto.alt_text ?? vendor.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div
            className="flex flex-col gap-4 text-sm rounded-2xl p-6"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "var(--gold)" }}
            >
              Contact &amp; Location
            </p>
            <p className="text-xs leading-5 text-neutral-500">
              Use this section to sanity-check convenience and fit before you
              start outreach.
            </p>
            {vendor.address && (
              <div>
                <p className="font-medium text-neutral-800 mb-0.5">Address</p>
                <p className="text-neutral-500">
                  {vendor.address}, {vendor.city}, {vendor.state} {vendor.zip}
                </p>
              </div>
            )}
            {vendor.phone && (
              <div>
                <p className="font-medium text-neutral-800 mb-0.5">Phone</p>
                <a href={`tel:${vendor.phone}`} className="text-neutral-500 hover:underline">
                  {vendor.phone}
                </a>
              </div>
            )}
            {vendor.website && (
              <div>
                <p className="font-medium text-neutral-800 mb-0.5">Website</p>
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                  style={{ color: "var(--primary)" }}
                >
                  {vendor.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>

          {tags.length > 0 && (
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full px-3 py-1 text-xs text-neutral-600"
                    style={{ background: "var(--background)", border: "1px solid var(--border)" }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {description && (
          <div className="mb-10">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
            >
              About {vendor.name}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
          </div>
        )}

        <div
          className="mb-10 grid gap-4 rounded-2xl p-6 md:grid-cols-[1.2fr_0.8fr]"
          style={{ background: "var(--background)", border: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--gold)" }}
            >
              Shortlist check
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Before reaching out, compare this listing against venue fit,
              guest logistics, and the overall tone you want for the weekend.
            </p>
          </div>
          <div className="flex items-center">
            <Link
              href={`/wedding/${vendor.category_slug}`}
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Back to all {vendor.category_label?.toLowerCase()} →
            </Link>
          </div>
        </div>

        {photos.length > 1 && (
          <div className="mb-10">
            <h2
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
            >
              Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div key={photo.id} className="rounded-xl overflow-hidden bg-neutral-100 aspect-square">
                  <img
                    src={photo.r2_url}
                    alt={photo.alt_text ?? vendor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {!vendor.claimed && (
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
          >
            <p
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--primary)" }}
            >
              Is this your business?
            </p>
            <p className="text-sm text-neutral-500 mb-5">
              Claim this listing to add photos, update your description, and get priority placement.
            </p>
            <Link
              href={`/claim/${vendor.slug}`}
              className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Claim &amp; Upgrade This Listing
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
