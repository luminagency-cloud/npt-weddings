export const siteConfig = {
  name: "Newport Weddings",
  description:
    "A couple-first Newport wedding planning site with venue guidance, local perspective, and a curated vendor directory.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://npt-weddings.vercel.app",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
} as const

export const staticRoutes = [
  "/",
  "/about",
  "/planning",
  "/planning/venues",
  "/newport-guide",
  "/wedding",
] as const
