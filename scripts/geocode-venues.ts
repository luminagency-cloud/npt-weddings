import { db } from "../lib/db.ts"

const NOMINATIM_BASE = "https://nominatim.openstreetmap.org/search"
// Nominatim policy: at most 1 request/second. 1100ms gives comfortable headroom.
const DELAY_MS = 1100

type NominatimResult = {
  lat: string
  lon: string
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function geocode(
  address: string,
  city: string,
  state: string
): Promise<{ lat: number; lng: number } | null> {
  const q = `${address}, ${city}, ${state}`
  const url = `${NOMINATIM_BASE}?q=${encodeURIComponent(q)}&format=json&limit=1`

  const res = await fetch(url, {
    headers: {
      // Nominatim requires a descriptive User-Agent identifying the application.
      "User-Agent": "married-in-newport/geocode-venues (weddingsinnewport.com)",
    },
  })

  if (!res.ok) {
    throw new Error(`Nominatim error: HTTP ${res.status} for "${q}"`)
  }

  const results = (await res.json()) as NominatimResult[]
  if (results.length === 0) return null

  return {
    lat: parseFloat(results[0].lat),
    lng: parseFloat(results[0].lon),
  }
}

async function main() {
  if (!db) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  const vendors = await db`
    SELECT id, name, address, city, state
    FROM vendors
    WHERE lat IS NULL AND active = true
    ORDER BY name ASC
  `

  if (vendors.length === 0) {
    console.log("All active vendors already have coordinates.")
    return
  }

  console.log(`Geocoding ${vendors.length} vendor(s)…\n`)

  for (const vendor of vendors) {
    const name = vendor.name as string
    const address = vendor.address as string | null
    const city = vendor.city as string
    const state = vendor.state as string
    const id = vendor.id as string

    if (!address) {
      console.log(`${name}: skipped — no address on record`)
      await sleep(DELAY_MS)
      continue
    }

    const coords = await geocode(address, city, state)

    if (!coords) {
      console.log(`${name}: no result from Nominatim`)
    } else {
      await db`
        UPDATE vendors
        SET lat = ${coords.lat}, lng = ${coords.lng}, updated_at = NOW()
        WHERE id = ${id}
      `
      console.log(`${name}: ${coords.lat}, ${coords.lng}`)
    }

    await sleep(DELAY_MS)
  }

  console.log("\nDone.")
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
