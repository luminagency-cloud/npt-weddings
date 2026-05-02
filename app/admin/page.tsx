import Link from "next/link"

export default async function AdminPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Admin</h1>
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
          View site
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/admin/categories"
          className="block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition-all"
        >
          <h2 className="font-semibold text-neutral-900">Manage Categories</h2>
          <p className="text-sm text-neutral-500 mt-1">Edit category names, copy, order, and visibility</p>
        </Link>
        <Link
          href="/admin/vendors"
          className="block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition-all"
        >
          <h2 className="font-semibold text-neutral-900">Manage Vendors</h2>
          <p className="text-sm text-neutral-500 mt-1">Edit listing details, status, and copy</p>
        </Link>
        <Link
          href="/wedding"
          className="block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition-all"
        >
          <h2 className="font-semibold text-neutral-900">View Directory</h2>
          <p className="text-sm text-neutral-500 mt-1">See the public-facing wedding directory</p>
        </Link>
      </div>
      <p className="mt-8 text-sm text-neutral-400">
        This is still a lean internal admin, but vendor editing now lives here instead of the database console.
      </p>
    </main>
  )
}
