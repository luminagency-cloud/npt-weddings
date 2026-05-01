import Link from "next/link"
import type { Vendor } from "@/lib/types"

interface VendorCardProps {
  vendor: Vendor
  categorySlug: string
}

export function VendorCard({ vendor, categorySlug }: VendorCardProps) {
  const promoActive =
    vendor.promo_label &&
    vendor.promo_expires_at &&
    new Date(vendor.promo_expires_at) > new Date()

  return (
    <Link
      href={`/wedding/${categorySlug}/${vendor.slug}`}
      className="group block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-semibold text-neutral-900 group-hover:text-neutral-700 truncate">
              {vendor.name}
            </h2>
            {vendor.tier === "featured" && (
              <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                Featured
              </span>
            )}
            {vendor.tier === "paid" && (
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                Listed
              </span>
            )}
            {vendor.verified && (
              <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                Verified
              </span>
            )}
          </div>
          {promoActive && (
            <p className="mt-0.5 text-xs font-medium text-rose-600">
              {vendor.promo_label}
            </p>
          )}
          {vendor.description && (
            <p className="mt-1.5 text-sm text-neutral-500 line-clamp-2">
              {vendor.description_override ?? vendor.description}
            </p>
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
        {vendor.address && (
          <span>{vendor.address}, {vendor.city}</span>
        )}
        {!vendor.address && vendor.city && <span>{vendor.city}, RI</span>}
        {vendor.phone && <span>{vendor.phone}</span>}
      </div>
    </Link>
  )
}
