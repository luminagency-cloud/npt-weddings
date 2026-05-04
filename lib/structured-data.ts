import { siteConfig } from "./site.ts"
import type { Vendor } from "./types.ts"

export type BreadcrumbItem = {
  name: string
  path: string
}

type BasePageInput = {
  description: string
  path: string
  title: string
}

type CollectionPageInput = BasePageInput & {
  itemPaths: string[]
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString()
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildArticleJsonLd({ description, path, title }: BasePageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  }
}

export function buildCollectionPageJsonLd({
  description,
  itemPaths,
  path,
  title,
}: CollectionPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: itemPaths.length,
      itemListElement: itemPaths.map((itemPath, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(itemPath),
      })),
    },
  }
}

const VENDOR_SCHEMA_TYPES: Record<string, string> = {
  venues: "EventVenue",
  photographers: "ProfessionalService",
  planners: "ProfessionalService",
}

const AREA_SERVED = {
  "@type": "City",
  name: "Newport",
  sameAs: "https://en.wikipedia.org/wiki/Newport,_Rhode_Island",
}

export function buildLocalBusinessJsonLd(vendor: Vendor) {
  const schemaType = VENDOR_SCHEMA_TYPES[vendor.category_slug ?? ""] ?? "LocalBusiness"
  const geo =
    vendor.lat != null && vendor.lng != null
      ? { "@type": "GeoCoordinates", latitude: vendor.lat, longitude: vendor.lng }
      : undefined

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: vendor.name,
    description:
      vendor.description_override ??
      vendor.description ??
      `${vendor.name} is a wedding vendor in Newport, Rhode Island.`,
    url: vendor.website ?? absoluteUrl(`/wedding/${vendor.category_slug}/${vendor.slug}`),
    telephone: vendor.phone ?? undefined,
    email: vendor.email ?? undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: vendor.address ?? undefined,
      addressLocality: vendor.city,
      addressRegion: vendor.state,
      postalCode: vendor.zip ?? undefined,
      addressCountry: "US",
    },
    ...(geo ? { geo } : {}),
    areaServed: AREA_SERVED,
    sameAs: vendor.website ? [vendor.website] : undefined,
  }
}
