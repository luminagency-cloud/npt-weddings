import Link from "next/link"
import { notFound } from "next/navigation"
import { getCategories, getVendorById } from "@/lib/queries"
import { saveVendorAction } from "@/app/admin/vendors/actions"

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ saved?: string }>
}

export default async function AdminVendorDetailPage({ params, searchParams }: Props) {
  const [{ id }, { saved }] = await Promise.all([params, searchParams])
  const [vendor, categories] = await Promise.all([getVendorById(id), getCategories()])

  if (!vendor) notFound()

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <Link href="/admin/vendors" className="text-sm text-neutral-500 hover:text-neutral-900">
            ← Back to vendors
          </Link>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">{vendor.name}</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Edit the fields that power the public listing and category pages.
          </p>
        </div>
        {saved === "1" && (
          <div className="rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
            Saved
          </div>
        )}
      </div>

      <form action={saveVendorAction} className="space-y-8">
        <input type="hidden" name="id" value={vendor.id} />

        <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-neutral-900">Core details</h2>
          </div>

          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Name
            <input name="name" defaultValue={vendor.name} required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Slug
            <input name="slug" defaultValue={vendor.slug} required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Category
            <select name="category_id" defaultValue={vendor.category_id} className="rounded-lg border border-neutral-300 px-3 py-2">
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Tier
            <select name="tier" defaultValue={vendor.tier} className="rounded-lg border border-neutral-300 px-3 py-2">
              <option value="basic">basic</option>
              <option value="paid">paid</option>
              <option value="featured">featured</option>
            </select>
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-700">
            <input type="checkbox" name="active" defaultChecked={vendor.active} />
            Active
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-700">
            <input type="checkbox" name="verified" defaultChecked={vendor.verified} />
            Verified
          </label>
        </section>

        <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
          </div>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Address
            <input name="address" defaultValue={vendor.address ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            City
            <input name="city" defaultValue={vendor.city} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            State
            <input name="state" defaultValue={vendor.state} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            ZIP
            <input name="zip" defaultValue={vendor.zip ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Phone
            <input name="phone" defaultValue={vendor.phone ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Website
            <input name="website" defaultValue={vendor.website ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700 md:col-span-2">
            Email
            <input name="email" defaultValue={vendor.email ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
        </section>

        <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Copy</h2>
          </div>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Description
            <textarea name="description" defaultValue={vendor.description ?? ""} rows={5} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Description override
            <textarea name="description_override" defaultValue={vendor.description_override ?? ""} rows={5} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Promo label
            <input name="promo_label" defaultValue={vendor.promo_label ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Meta title
            <input name="meta_title" defaultValue={vendor.meta_title ?? ""} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Meta description
            <textarea name="meta_description" defaultValue={vendor.meta_description ?? ""} rows={3} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
        </section>

        <div className="flex items-center justify-between">
          <Link
            href={`/wedding/${vendor.category_slug}/${vendor.slug}`}
            className="text-sm text-neutral-500 hover:text-neutral-900"
          >
            View public page
          </Link>
          <button
            type="submit"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Save changes
          </button>
        </div>
      </form>
    </main>
  )
}
