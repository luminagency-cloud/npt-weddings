import Link from "next/link"
import { createVendorAction } from "@/app/admin/vendors/actions"
import { getCategories } from "@/lib/queries"

export default async function NewVendorPage() {
  const categories = await getCategories()

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <Link href="/admin/vendors" className="text-sm text-neutral-500 hover:text-neutral-900">
            ← Back to vendors
          </Link>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">Create vendor</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Add the basic listing first, then sharpen copy and metadata once the lead is verified.
          </p>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
          <p className="text-lg font-semibold text-neutral-900">Create a category before adding vendors.</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
            Vendors need a category assignment to render properly in the public directory and the admin list.
          </p>
          <Link
            href="/admin/categories/new"
            className="mt-5 inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Create category
          </Link>
        </div>
      ) : (
        <form action={createVendorAction} className="space-y-8">
          <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-neutral-900">Core details</h2>
            </div>

            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Name
              <input name="name" required className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Slug
              <input name="slug" required className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Category
              <select name="category_id" className="rounded-lg border border-neutral-300 px-3 py-2">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Tier
              <select name="tier" defaultValue="basic" className="rounded-lg border border-neutral-300 px-3 py-2">
                <option value="basic">basic</option>
                <option value="paid">paid</option>
                <option value="featured">featured</option>
              </select>
            </label>
            <label className="flex items-center gap-3 text-sm text-neutral-700">
              <input type="checkbox" name="active" defaultChecked />
              Active
            </label>
            <label className="flex items-center gap-3 text-sm text-neutral-700">
              <input type="checkbox" name="verified" />
              Verified
            </label>
          </section>

          <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
            </div>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Address
              <input name="address" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              City
              <input name="city" defaultValue="Newport" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              State
              <input name="state" defaultValue="RI" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              ZIP
              <input name="zip" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Phone
              <input name="phone" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Website
              <input name="website" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700 md:col-span-2">
              Email
              <input name="email" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
          </section>

          <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">Copy</h2>
            </div>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Description
              <textarea name="description" rows={5} className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Description override
              <textarea name="description_override" rows={5} className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Promo label
              <input name="promo_label" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Meta title
              <input name="meta_title" className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-neutral-700">
              Meta description
              <textarea name="meta_description" rows={3} className="rounded-lg border border-neutral-300 px-3 py-2" />
            </label>
          </section>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Create vendor
            </button>
          </div>
        </form>
      )}
    </main>
  )
}
