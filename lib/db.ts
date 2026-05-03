import { neon } from "@neondatabase/serverless"

const databaseUrl = process.env.DATABASE_URL

export const hasDatabase = Boolean(databaseUrl)

export const db = databaseUrl ? neon(databaseUrl) : null
