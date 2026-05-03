import assert from "node:assert/strict"
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildCollectionPageJsonLd,
  serializeJsonLd,
} from "./structured-data.ts"

function run() {
  assert.equal(
    absoluteUrl("/planning/venues"),
    "https://npt-weddings.vercel.app/planning/venues"
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
    item: "https://npt-weddings.vercel.app/planning",
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
    url: "https://npt-weddings.vercel.app/wedding/venues/ocean-house",
  })

  console.log("structured-data tests passed")
}

run()
