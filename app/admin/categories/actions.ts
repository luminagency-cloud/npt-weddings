"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { updateCategory } from "@/lib/queries"

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function nullable(value: string) {
  return value.length > 0 ? value : null
}

export async function saveCategoryAction(formData: FormData) {
  const id = getString(formData, "id")
  const slug = getString(formData, "slug")
  const label = getString(formData, "label")
  const sortOrderRaw = getString(formData, "sort_order")

  if (!id || !slug || !label) {
    throw new Error("Missing required category fields")
  }

  const sort_order = Number.parseInt(sortOrderRaw || "0", 10)

  await updateCategory({
    id,
    slug,
    label,
    description: nullable(getString(formData, "description")),
    sort_order: Number.isNaN(sort_order) ? 0 : sort_order,
    active: formData.get("active") === "on",
  })

  revalidatePath("/wedding")
  revalidatePath(`/wedding/${slug}`)
  revalidatePath("/admin/categories")
  redirect(`/admin/categories/${id}?saved=1`)
}
