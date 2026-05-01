import { db } from "./db"
import type { Category, Vendor, VendorPhoto, Tag } from "./types"

export async function getCategories(): Promise<Category[]> {
  const rows = await db`
    SELECT * FROM categories WHERE active = true ORDER BY sort_order ASC
  `
  return rows as Category[]
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const rows = await db`
    SELECT * FROM categories WHERE slug = ${slug} AND active = true
  `
  return (rows[0] as Category) ?? null
}

export async function getVendorsByCategory(categorySlug: string): Promise<Vendor[]> {
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
  const rows = await db`
    SELECT v.*, c.slug as category_slug, c.label as category_label
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE v.slug = ${slug} AND v.active = true
  `
  return (rows[0] as Vendor) ?? null
}

export async function getVendorPhotos(vendorId: string): Promise<VendorPhoto[]> {
  const rows = await db`
    SELECT * FROM vendor_photos WHERE vendor_id = ${vendorId} ORDER BY sort_order ASC
  `
  return rows as VendorPhoto[]
}

export async function getVendorTags(vendorId: string): Promise<Tag[]> {
  const rows = await db`
    SELECT t.* FROM tags t
    JOIN vendor_tags vt ON t.id = vt.tag_id
    WHERE vt.vendor_id = ${vendorId}
  `
  return rows as Tag[]
}

export async function getAllActiveVendorsForSitemap() {
  const rows = await db`
    SELECT v.slug, c.slug as cat_slug, v.updated_at
    FROM vendors v
    JOIN categories c ON v.category_id = c.id
    WHERE v.active = true
  `
  return rows as { slug: string; cat_slug: string; updated_at: string }[]
}
