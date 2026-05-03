export const vendorImportHeaders = [
  "category_slug",
  "name",
  "website",
  "email",
  "phone",
  "city",
  "state",
  "description",
] as const

export type VendorImportHeader = (typeof vendorImportHeaders)[number]

export type VendorImportRow = Record<VendorImportHeader, string>

export function slugifyVendorName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function parseCsvLine(line: string) {
  const values: string[] = []
  let current = ""
  let inQuotes = false

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    const nextCharacter = line[index + 1]

    if (character === '"') {
      if (inQuotes && nextCharacter === '"') {
        current += '"'
        index += 1
      } else {
        inQuotes = !inQuotes
      }

      continue
    }

    if (character === "," && !inQuotes) {
      values.push(current.trim())
      current = ""
      continue
    }

    current += character
  }

  values.push(current.trim())

  return values
}

export function parseVendorImportCsv(csv: string): VendorImportRow[] {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) return []

  const [headerLine, ...rowLines] = lines
  const headers = parseCsvLine(headerLine) as VendorImportHeader[]

  return rowLines.map((line) => {
    const values = parseCsvLine(line)

    return vendorImportHeaders.reduce((row, header) => {
      const headerIndex = headers.indexOf(header)
      row[header] = headerIndex >= 0 ? (values[headerIndex] ?? "").trim() : ""
      return row
    }, {} as VendorImportRow)
  })
}

export type VendorImportIssue = {
  message: string
  rowNumber: number
}

export function validateVendorImportRows(rows: VendorImportRow[]) {
  const issues: VendorImportIssue[] = []

  rows.forEach((row, rowIndex) => {
    const rowNumber = rowIndex + 2

    if (!row.category_slug) {
      issues.push({ rowNumber, message: "Missing category slug." })
    }

    if (!row.name) {
      issues.push({ rowNumber, message: "Missing vendor name." })
    }

    if (!row.website && !row.email) {
      issues.push({
        rowNumber,
        message: "Include at least a website or an email so the lead is actionable.",
      })
    }
  })

  return issues
}

export function toVendorImportPreview(rows: VendorImportRow[]) {
  return rows.map((row) => ({
    categorySlug: row.category_slug,
    name: row.name,
    slug: slugifyVendorName(row.name),
    website: row.website || null,
    email: row.email || null,
    phone: row.phone || null,
    city: row.city || "Newport",
    state: row.state || "RI",
    description: row.description || null,
  }))
}
