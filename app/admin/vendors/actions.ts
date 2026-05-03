"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createVendor, updateVendor } from "@/lib/queries"

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function nullable(value: string) {
  return value.length > 0 ? value : null
}

export async function saveVendorAction(formData: FormData) {
  const id = getString(formData, "id")
  const category_id = getString(formData, "category_id")
  const name = getString(formData, "name")
  const slug = getString(formData, "slug")
  const city = getString(formData, "city") || "Newport"
  const state = getString(formData, "state") || "RI"
  const tier = getString(formData, "tier")

  if (!id || !category_id || !name || !slug) {
    throw new Error("Missing required vendor fields")
  }

  if (tier !== "basic" && tier !== "paid" && tier !== "featured") {
    throw new Error("Invalid vendor tier")
  }

  await updateVendor({
    id,
    category_id,
    name,
    slug,
    address: nullable(getString(formData, "address")),
    city,
    state,
    zip: nullable(getString(formData, "zip")),
    phone: nullable(getString(formData, "phone")),
    website: nullable(getString(formData, "website")),
    email: nullable(getString(formData, "email")),
    description: nullable(getString(formData, "description")),
    description_override: nullable(getString(formData, "description_override")),
    tier,
    verified: formData.get("verified") === "on",
    active: formData.get("active") === "on",
    promo_label: nullable(getString(formData, "promo_label")),
    meta_title: nullable(getString(formData, "meta_title")),
    meta_description: nullable(getString(formData, "meta_description")),
  })

  revalidatePath("/wedding")
  revalidatePath("/admin/vendors")
  redirect(`/admin/vendors/${id}?saved=1`)
}

export async function createVendorAction(formData: FormData) {
  const category_id = getString(formData, "category_id")
  const name = getString(formData, "name")
  const slug = getString(formData, "slug")
  const city = getString(formData, "city") || "Newport"
  const state = getString(formData, "state") || "RI"
  const tier = getString(formData, "tier") || "basic"

  if (!category_id || !name || !slug) {
    throw new Error("Missing required vendor fields")
  }

  if (tier !== "basic" && tier !== "paid" && tier !== "featured") {
    throw new Error("Invalid vendor tier")
  }

  const id = await createVendor({
    category_id,
    name,
    slug,
    address: nullable(getString(formData, "address")),
    city,
    state,
    zip: nullable(getString(formData, "zip")),
    phone: nullable(getString(formData, "phone")),
    website: nullable(getString(formData, "website")),
    email: nullable(getString(formData, "email")),
    description: nullable(getString(formData, "description")),
    description_override: nullable(getString(formData, "description_override")),
    tier,
    verified: formData.get("verified") === "on",
    active: formData.get("active") === "on",
    promo_label: nullable(getString(formData, "promo_label")),
    meta_title: nullable(getString(formData, "meta_title")),
    meta_description: nullable(getString(formData, "meta_description")),
  })

  revalidatePath("/wedding")
  revalidatePath("/admin/vendors")
  redirect(`/admin/vendors/${id}?saved=1`)
}
