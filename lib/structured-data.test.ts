import assert from "node:assert/strict"
import { guidePages } from "./guide-content.ts"
import {
  createCategory,
  createVendor,
  getAdminCategories,
  getAdminVendors,
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  getVendorByCategoryAndSlug,
  getVendorById,
  getVendorBySlug,
  getVendorPhotos,
  getVendorTags,
  getVendorsByCategory,
  updateCategory,
  updateVendor,
} from "./queries.ts"
import {
  parseVendorImportCsv,
  slugifyVendorName,
  toVendorImportPreview,
  validateVendorImportRows,
} from "./vendor-import.ts"
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildCollectionPageJsonLd,
  serializeJsonLd,
} from "./structured-data.ts"

async function run() {
  assert.equal(
    absoluteUrl("/planning/venues"),
    "https://weddingsinnewport.com/planning/venues"
  )
  assert.match(serializeJsonLd({ note: "<script>" }), /\\u003cscript>/)

  const breadcrumbs = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Planning", path: "/planning" },
  ])

  assert.equal(breadcrumbs.itemListElement.length, 2)
  assert.deepEqual(breadcrumbs.itemListElement[1], {
    "@type": "ListItem",
    position: 2,
    name: "Planning",
    item: "https://weddingsinnewport.com/planning",
  })

  const collection = buildCollectionPageJsonLd({
    title: "Venues in Newport, RI",
    description: "Browse wedding venues in Newport, Rhode Island.",
    path: "/wedding/venues",
    itemPaths: ["/wedding/venues/ocean-house", "/wedding/venues/castle-hill"],
  })

  assert.equal(collection.mainEntity.numberOfItems, 2)
  assert.deepEqual(collection.mainEntity.itemListElement[0], {
    "@type": "ListItem",
    position: 1,
    url: "https://weddingsinnewport.com/wedding/venues/ocean-house",
  })

  const guidePaths = Object.values(guidePages).map((guide) => guide.path)
  assert.equal(new Set(guidePaths).size, guidePaths.length)
  assert.equal(guidePages.chooseVenue.metadataTitle, "How to Choose a Newport Wedding Venue")

  const importRows = parseVendorImportCsv(`category_slug,name,website,email,phone,city,state,description
venues,Castle Hill Inn,https://castlehillinn.com,,(401) 555-0100,Newport,RI,"Waterfront wedding venue"
photographers,Example Studio,,hello@example.com,,Middletown,RI,"Editorial photography"`)

  assert.equal(importRows.length, 2)
  assert.equal(slugifyVendorName("Castle Hill Inn"), "castle-hill-inn")
  assert.deepEqual(validateVendorImportRows(importRows), [])
  assert.deepEqual(toVendorImportPreview(importRows)[0], {
    categorySlug: "venues",
    name: "Castle Hill Inn",
    slug: "castle-hill-inn",
    website: "https://castlehillinn.com",
    email: null,
    phone: "(401) 555-0100",
    city: "Newport",
    state: "RI",
    description: "Waterfront wedding venue",
  })

  assert.deepEqual(await getCategories(), [])
  assert.equal(await getCategoryBySlug("venues"), null)
  assert.deepEqual(await getVendorsByCategory("venues"), [])
  assert.equal(await getVendorBySlug("ocean-house"), null)
  assert.equal(await getVendorByCategoryAndSlug("venues", "ocean-house"), null)
  assert.deepEqual(await getVendorPhotos("vendor-id"), [])
  assert.deepEqual(await getVendorTags("vendor-id"), [])
  assert.deepEqual(await getAdminVendors(), [])
  assert.equal(await getVendorById("vendor-id"), null)
  assert.deepEqual(await getAdminCategories(), [])
  assert.equal(await getCategoryById("category-id"), null)

  await assert.rejects(
    () =>
      createCategory({
        slug: "venues",
        label: "Venues",
        description: null,
        sort_order: 0,
        active: true,
      }),
    /DATABASE_URL environment variable is not set/
  )

  await assert.rejects(
    () =>
      updateCategory({
        id: "category-id",
        slug: "venues",
        label: "Venues",
        description: null,
        sort_order: 0,
        active: true,
      }),
    /DATABASE_URL environment variable is not set/
  )

  await assert.rejects(
    () =>
      createVendor({
        category_id: "category-id",
        name: "Vendor",
        slug: "vendor",
        address: null,
        city: "Newport",
        state: "RI",
        zip: null,
        phone: null,
        website: null,
        email: null,
        description: null,
        description_override: null,
        tier: "basic",
        verified: false,
        active: true,
        promo_label: null,
        meta_title: null,
        meta_description: null,
      }),
    /DATABASE_URL environment variable is not set/
  )

  await assert.rejects(
    () =>
      updateVendor({
        id: "vendor-id",
        category_id: "category-id",
        name: "Vendor",
        slug: "vendor",
        address: null,
        city: "Newport",
        state: "RI",
        zip: null,
        phone: null,
        website: null,
        email: null,
        description: null,
        description_override: null,
        tier: "basic",
        verified: false,
        active: true,
        promo_label: null,
        meta_title: null,
        meta_description: null,
      }),
    /DATABASE_URL environment variable is not set/
  )

  console.log("structured-data tests passed")
}

void run()
