import { db } from "./db.ts"
import type { Category, Vendor, VendorPhoto, Tag } from "./types.ts"

function requireDb() {
  if (!db) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  return db
}

export async function getCategories(): Promise<Category[]> {
  if (!db) return []

  const rows = await db`
    SELECT
      c.*,
      COUNT(v.id)::int AS vendor_count
    FROM categories c
    LEFT JOIN vendors v ON v.category_id = c.id AND v.active = true
    WHERE c.active = true
    GROUP BY c.id
    ORDER BY c.sort_order ASC
  `
  return rows as Category[]
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!db) return null

  const rows = await db`
    SELECT
      c.*,
      COUNT(v.id)::int AS vendor_count
    FROM categories c
    LEFT JOIN vendors v ON v.category_id = c.id AND v.active = true
    WHERE c.slug = ${slug} AND c.active = true
    GROUP BY c.id
  `
  return (rows[0] as Category) ?? null
}

export async function getVendorsByCategory(categorySlug: string): Promise<Vendor[]> {
  if (!db) return []

  const rows = await db`
    SELECT v.*, c.label as category_label, c.slug as category_slug
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE c.slug = ${categorySlug} AND v.active = true
    ORDER BY
      CASE v.tier WHEN 'featured' THEN 0 WHEN 'paid' THEN 1 ELSE 2 END,
      v.name ASC
  `
  return rows as Vendor[]
}

export async function getVendorBySlug(slug: string): Promise<Vendor | null> {
  if (!db) return null

  const rows = await db`
    SELECT v.*, c.slug as category_slug, c.label as category_label
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE v.slug = ${slug} AND v.active = true
  `
  return (rows[0] as Vendor) ?? null
}

export async function getVendorByCategoryAndSlug(
  categorySlug: string,
  vendorSlug: string
): Promise<Vendor | null> {
  if (!db) return null

  const rows = await db`
    SELECT v.*, c.slug as category_slug, c.label as category_label
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE c.slug = ${categorySlug} AND v.slug = ${vendorSlug} AND v.active = true
  `
  return (rows[0] as Vendor) ?? null
}

export async function getVendorPhotos(vendorId: string): Promise<VendorPhoto[]> {
  if (!db) return []

  const rows = await db`
    SELECT * FROM vendor_photos WHERE vendor_id = ${vendorId} ORDER BY sort_order ASC
  `
  return rows as VendorPhoto[]
}

export async function getVendorTags(vendorId: string): Promise<Tag[]> {
  if (!db) return []

  const rows = await db`
    SELECT t.* FROM tags t
    JOIN vendor_tags vt ON t.id = vt.tag_id
    WHERE vt.vendor_id = ${vendorId}
  `
  return rows as Tag[]
}

export async function getAllActiveVendorsForSitemap() {
  if (!db) return []

  const rows = await db`
    SELECT v.slug, c.slug as cat_slug, v.updated_at
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE v.active = true
  `
  return rows as { slug: string; cat_slug: string; updated_at: string }[]
}

export async function getAdminVendors() {
  if (!db) return []

  const rows = await db`
    SELECT
      v.id,
      v.name,
      v.slug,
      v.tier,
      v.active,
      v.verified,
      v.updated_at,
      c.label as category_label,
      c.slug as category_slug
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    ORDER BY v.updated_at DESC, v.name ASC
  `

  return rows as Array<
    Pick<Vendor, "id" | "name" | "slug" | "tier" | "active" | "verified" | "updated_at"> & {
      category_label: string
      category_slug: string
    }
  >
}

export async function getVendorById(id: string): Promise<Vendor | null> {
  if (!db) return null

  const rows = await db`
    SELECT v.*, c.slug as category_slug, c.label as category_label
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE v.id = ${id}
  `

  return (rows[0] as Vendor) ?? null
}

export async function getAdminCategories() {
  if (!db) return []

  const rows = await db`
    SELECT
      c.*,
      COUNT(v.id)::int AS vendor_count
    FROM categories c
    LEFT JOIN vendors v ON v.category_id = c.id AND v.active = true
    GROUP BY c.id
    ORDER BY c.sort_order ASC, c.label ASC
  `

  return rows as Category[]
}

export async function getCategoryById(id: string): Promise<Category | null> {
  if (!db) return null

  const rows = await db`
    SELECT
      c.*,
      COUNT(v.id)::int AS vendor_count
    FROM categories c
    LEFT JOIN vendors v ON v.category_id = c.id AND v.active = true
    WHERE c.id = ${id}
    GROUP BY c.id
  `

  return (rows[0] as Category) ?? null
}

type UpdateCategoryInput = {
  id: string
  slug: string
  label: string
  description: string | null
  sort_order: number
  active: boolean
}

export async function updateCategory(input: UpdateCategoryInput) {
  await requireDb()`
    UPDATE categories
    SET
      slug = ${input.slug},
      label = ${input.label},
      description = ${input.description},
      sort_order = ${input.sort_order},
      active = ${input.active}
    WHERE id = ${input.id}
  `
}

type UpdateVendorInput = {
  id: string
  category_id: string
  name: string
  slug: string
  address: string | null
  city: string
  state: string
  zip: string | null
  phone: string | null
  website: string | null
  email: string | null
  description: string | null
  description_override: string | null
  tier: "basic" | "paid" | "featured"
  verified: boolean
  active: boolean
  promo_label: string | null
  meta_title: string | null
  meta_description: string | null
}

export async function updateVendor(input: UpdateVendorInput) {
  await requireDb()`
    UPDATE vendors
    SET
      category_id = ${input.category_id},
      name = ${input.name},
      slug = ${input.slug},
      address = ${input.address},
      city = ${input.city},
      state = ${input.state},
      zip = ${input.zip},
      phone = ${input.phone},
      website = ${input.website},
      email = ${input.email},
      description = ${input.description},
      description_override = ${input.description_override},
      tier = ${input.tier},
      verified = ${input.verified},
      active = ${input.active},
      promo_label = ${input.promo_label},
      meta_title = ${input.meta_title},
      meta_description = ${input.meta_description},
      updated_at = NOW()
    WHERE id = ${input.id}
  `
}
