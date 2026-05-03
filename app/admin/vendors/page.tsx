import Link from "next/link"
import { getAdminVendors } from "@/lib/queries"

export default async function AdminVendorsPage() {
  const vendors = await getAdminVendors()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Admin</p>
          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">Manage vendors</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Edit listing details, status, and the copy that appears on public pages.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">
            Back to admin
          </Link>
          <Link
            href="/admin/vendors/new"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Add vendor
          </Link>
        </div>
      </div>

      {vendors.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
          <p className="text-lg font-semibold text-neutral-900">No vendors yet.</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
            Start by importing leads or adding the first listing manually. Once a few rows exist,
            this page becomes the fastest way to tighten copy and status.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/admin/vendors/new"
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Add vendor
            </Link>
            <Link
              href="/admin/import"
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-white"
            >
              Open import prep
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_0.8fr_0.6fr] gap-4 border-b border-neutral-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            <span>Vendor</span>
            <span>Category</span>
            <span>Status</span>
            <span>Updated</span>
          </div>
          <div className="divide-y divide-neutral-200">
            {vendors.map((vendor) => (
              <Link
                key={vendor.id}
                href={`/admin/vendors/${vendor.id}`}
                className="grid grid-cols-[1.4fr_1fr_0.8fr_0.6fr] gap-4 px-5 py-4 transition-colors hover:bg-neutral-50"
              >
                <div>
                  <p className="font-medium text-neutral-900">{vendor.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">/{vendor.slug}</p>
                </div>
                <div className="text-sm text-neutral-600">{vendor.category_label}</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-600">
                    {vendor.tier}
                  </span>
                  {vendor.active ? (
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-green-700">live</span>
                  ) : (
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">hidden</span>
                  )}
                  {vendor.verified && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">verified</span>
                  )}
                </div>
                <div className="text-sm text-neutral-400">
                  {new Date(vendor.updated_at).toLocaleDateString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
