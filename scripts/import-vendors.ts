import { readFileSync } from "node:fs"
import { resolve } from "node:path"

import { db } from "../lib/db.ts"
import { parseVendorImportCsv, slugifyVendorName, validateVendorImportRows } from "../lib/vendor-import.ts"

type ImportDecision =
  | { type: "insert"; name: string }
  | { type: "skip"; name: string; reason: string }

function normalizeWebsite(website: string | null) {
  if (!website) return null

  const trimmed = website.trim()
  if (!trimmed) return null

  try {
    const url = new URL(trimmed)
    const pathname = url.pathname.replace(/\/+$/, "")
    return `${url.protocol}//${url.hostname.toLowerCase()}${pathname}${url.search}`
  } catch {
    return trimmed.replace(/\/+$/, "")
  }
}

async function main() {
  if (!db) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  const csvArg = process.argv[2]
  if (!csvArg) {
    throw new Error("Usage: node scripts/import-vendors.ts <csv-path> [--dry-run]")
  }

  const dryRun = process.argv.includes("--dry-run")
  const csvPath = resolve(process.cwd(), csvArg)
  const csv = readFileSync(csvPath, "utf8")
  const rows = parseVendorImportCsv(csv)
  const issues = validateVendorImportRows(rows)

  if (issues.length > 0) {
    throw new Error(
      `CSV validation failed:\n${issues
        .map((issue) => `Row ${issue.rowNumber}: ${issue.message}`)
        .join("\n")}`
    )
  }

  const categories = await db`SELECT id, slug FROM categories`
  const categoryBySlug = new Map(categories.map((row) => [row.slug as string, row.id as string]))

  const existingVendors = await db`
    SELECT id, slug, name, city, website
    FROM vendors
  `

  const existingBySlug = new Map(existingVendors.map((row) => [row.slug as string, row]))
  const existingByWebsite = new Map(
    existingVendors
      .map((row) => [normalizeWebsite((row.website as string | null) ?? null), row] as const)
      .filter(([website]) => Boolean(website))
  )
  const existingByNameCity = new Map(
    existingVendors.map((row) => [
      `${String(row.name).trim().toLowerCase()}::${String(row.city).trim().toLowerCase()}`,
      row,
    ])
  )

  const decisions: ImportDecision[] = []
  let inserted = 0

  for (const row of rows) {
    const categoryId = categoryBySlug.get(row.category_slug)
    if (!categoryId) {
      decisions.push({
        type: "skip",
        name: row.name,
        reason: `unknown category slug "${row.category_slug}"`,
      })
      continue
    }

    const slug = slugifyVendorName(row.name)
    const normalizedWebsite = normalizeWebsite(row.website || null)
    const nameCityKey = `${row.name.trim().toLowerCase()}::${(row.city || "Newport").trim().toLowerCase()}`

    const duplicate =
      (normalizedWebsite ? existingByWebsite.get(normalizedWebsite) : undefined) ??
      existingBySlug.get(slug) ??
      existingByNameCity.get(nameCityKey)

    if (duplicate) {
      const reason = normalizedWebsite && existingByWebsite.get(normalizedWebsite)
        ? "matching website"
        : existingBySlug.get(slug)
          ? "matching slug"
          : "matching name and city"

      decisions.push({
        type: "skip",
        name: row.name,
        reason: `${reason} (${duplicate.name as string})`,
      })
      continue
    }

    decisions.push({ type: "insert", name: row.name })

    if (!dryRun) {
      await db`
        INSERT INTO vendors (
          category_id,
          slug,
          name,
          city,
          state,
          phone,
          website,
          email,
          description,
          tier,
          verified,
          active
        )
        VALUES (
          ${categoryId},
          ${slug},
          ${row.name.trim()},
          ${(row.city || "Newport").trim()},
          ${(row.state || "RI").trim()},
          ${(row.phone || "").trim() || null},
          ${normalizedWebsite},
          ${(row.email || "").trim() || null},
          ${(row.description || "").trim() || null},
          ${"basic"},
          ${true},
          ${true}
        )
      `
    }

    inserted += 1
    existingBySlug.set(slug, { slug, name: row.name, city: row.city, website: normalizedWebsite })
    if (normalizedWebsite) {
      existingByWebsite.set(normalizedWebsite, { slug, name: row.name, city: row.city, website: normalizedWebsite })
    }
    existingByNameCity.set(nameCityKey, {
      slug,
      name: row.name,
      city: row.city || "Newport",
      website: normalizedWebsite,
    })
  }

  const skipped = decisions.filter((decision) => decision.type === "skip")

  console.log(`${dryRun ? "Dry run" : "Import"} complete`)
  console.log(`Inserted: ${inserted}`)
  console.log(`Skipped: ${skipped.length}`)

  if (skipped.length > 0) {
    console.log("\nSkipped rows:")
    for (const decision of skipped) {
      console.log(`- ${decision.name}: ${decision.reason}`)
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
