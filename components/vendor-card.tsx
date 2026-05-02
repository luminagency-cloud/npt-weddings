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

  const isFeatured = vendor.tier === "featured"

  return (
    <Link
      href={`/wedding/${categorySlug}/${vendor.slug}`}
      className="group flex flex-col rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderTop: isFeatured ? "3px solid var(--gold)" : undefined,
      }}
    >
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2
                className="font-semibold text-neutral-800 truncate group-hover:transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {vendor.name}
              </h2>
              {isFeatured && (
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold"
                  style={{ background: "#fdf3d8", color: "#8a6a0a" }}
                >
                  Featured
                </span>
              )}
              {vendor.tier === "paid" && (
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold"
                  style={{ background: "#e8eef6", color: "#2d558a" }}
                >
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
              <p className="mt-0.5 text-xs font-medium text-rose-600">{vendor.promo_label}</p>
            )}
            {vendor.description && (
              <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                {vendor.description_override ?? vendor.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className="px-5 py-3 flex items-center gap-3 text-xs text-neutral-400"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {vendor.address && <span>{vendor.address}, {vendor.city}</span>}
        {!vendor.address && vendor.city && <span>{vendor.city}, RI</span>}
        {vendor.phone && <span>{vendor.phone}</span>}
        <span
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium"
          style={{ color: "var(--primary)" }}
        >
          View →
        </span>
      </div>
    </Link>
  )
}
