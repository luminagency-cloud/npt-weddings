import Link from "next/link"
import { getAdminCategories } from "@/lib/queries"

export default async function AdminCategoriesPage() {
  const categories = await getAdminCategories()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Admin</p>
          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">Manage categories</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Control category labels, descriptions, sort order, and public visibility.
          </p>
        </div>
        <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">
          Back to admin
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <div className="grid grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr] gap-4 border-b border-neutral-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          <span>Category</span>
          <span>Slug</span>
          <span>Listings</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-neutral-200">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/admin/categories/${category.id}`}
              className="grid grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr] gap-4 px-5 py-4 transition-colors hover:bg-neutral-50"
            >
              <div>
                <p className="font-medium text-neutral-900">{category.label}</p>
                <p className="mt-1 text-sm text-neutral-500">Order {category.sort_order}</p>
              </div>
              <div className="text-sm text-neutral-600">/{category.slug}</div>
              <div className="text-sm text-neutral-600">{category.vendor_count ?? 0}</div>
              <div className="text-xs">
                {category.active ? (
                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-green-700">live</span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">hidden</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
