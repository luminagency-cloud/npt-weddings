import type { MetadataRoute } from "next"
import { getAllActiveVendorsForSitemap, getCategories } from "@/lib/queries"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://placeholder.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [vendors, categories] = await Promise.all([
    getAllActiveVendorsForSitemap(),
    getCategories(),
  ])

  const vendorUrls: MetadataRoute.Sitemap = vendors.map((v) => ({
    url: `${BASE_URL}/wedding/${v.cat_slug}/${v.slug}`,
    lastModified: new Date(v.updated_at),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const categoryUrls: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/wedding/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }))

  return [
    {
      url: `${BASE_URL}/wedding`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryUrls,
    ...vendorUrls,
  ]
}
