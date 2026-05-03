import type { MetadataRoute } from "next"
import { getAllActiveVendorsForSitemap, getCategories } from "@/lib/queries"
import { siteConfig, staticRoutes } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [vendors, categories] = await Promise.all([
    getAllActiveVendorsForSitemap(),
    getCategories(),
  ])

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }))

  const vendorUrls: MetadataRoute.Sitemap = vendors.map((v) => ({
    url: `${siteConfig.siteUrl}/wedding/${v.cat_slug}/${v.slug}`,
    lastModified: new Date(v.updated_at),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const categoryUrls: MetadataRoute.Sitemap = categories
    .filter((c) => c.active)
    .map((c) => ({
    url: `${siteConfig.siteUrl}/wedding/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }))

  return [
    ...staticUrls,
    ...categoryUrls,
    ...vendorUrls,
  ]
}
