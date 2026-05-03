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
  "/planning/budget-guide",
  "/planning/choose-a-venue",
  "/planning/timeline",
  "/planning/venues",
  "/planning/venues/luxury",
  "/planning/venues/small-weddings",
  "/planning/venues/waterfront",
  "/newport-guide",
  "/newport-guide/best-time-of-year",
  "/newport-guide/rehearsal-dinner-ideas",
  "/newport-guide/weekend-itinerary",
  "/wedding",
] as const
