import Link from "next/link"
import { createCategoryAction } from "@/app/admin/categories/actions"

export default function NewCategoryPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <Link href="/admin/categories" className="text-sm text-neutral-500 hover:text-neutral-900">
            ← Back to categories
          </Link>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">Create category</h1>
          <p className="mt-2 text-sm text-neutral-500">
            Add the category shell first, then use vendor imports and admin cleanup to fill it out.
          </p>
        </div>
      </div>

      <form action={createCategoryAction} className="space-y-8">
        <section className="grid gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-neutral-900">Category details</h2>
          </div>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Label
            <input name="label" required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Slug
            <input name="slug" required className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700 md:col-span-2">
            Description
            <textarea name="description" rows={4} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            Sort order
            <input name="sort_order" type="number" defaultValue={0} className="rounded-lg border border-neutral-300 px-3 py-2" />
          </label>
          <label className="flex items-center gap-3 text-sm text-neutral-700">
            <input type="checkbox" name="active" defaultChecked />
            Active
          </label>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Create category
          </button>
        </div>
      </form>
    </main>
  )
}
