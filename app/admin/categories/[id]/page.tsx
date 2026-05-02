import Link from "next/link"
import { notFound } from "next/navigation"
import { saveCategoryAction } from "@/app/admin/categories/actions"
import { getCategoryById } from "@/lib/queries"

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ saved?: string }>
}

export default async function AdminCategoryDetailPage({ params, searchParams }: Props) {
  const [{ id }, { saved }] = await Promise.all([params, searchParams])
  const category = await getCategoryById(id)

  if (!category) notFound()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <Link href="/admin/categories" className="text-sm text-neutral-500 hover:text-neutral-900">
            ← Back to categories
          </Link>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">{category.label}</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Edit the category name, description, order, and whether it is shown publicly.
          </p>
        </div>
        {saved === "1" && (
          <div className="rounded-full bg-green-50 px-4 py-2 text-sm text-green-700">
            Saved
          </div>
        )}
      </div>

      <form action={saveCategoryAction} className="space-y-8">
        <input type="hidden" name="id" value={category.id} />

        <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-neutral-900">Category details</h2>
          </div>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Label
            <input name="label" defaultValue={category.label} required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Slug
            <input name="slug" defaultValue={category.slug} required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700 md:col-span-2">
            Description
            <textarea name="description" defaultValue={category.description ?? ""} rows={4} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Sort order
            <input name="sort_order" type="number" defaultValue={category.sort_order} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-700">
            <input type="checkbox" name="active" defaultChecked={category.active} />
            Active
          </label>
        </section>

        <div className="flex items-center justify-between">
          <Link
            href={`/wedding/${category.slug}`}
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
