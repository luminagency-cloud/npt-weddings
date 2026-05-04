export const siteConfig = {
  name: "Married in Newport",
  seoName: "Weddings in Newport",
  description:
    "Married in Newport is a couple-first wedding planning guide for Newport with venue guidance, local perspective, and a curated directory built around real Newport wedding search intent.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://weddingsinnewport.com",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-LMF0G7XZ11",
} as const

export const staticRoutes = [
  "/",
  "/about",
  "/planning",
  "/planning/budget-guide",
  "/planning/choose-a-venue",
  "/planning/newport-wedding-cost",
  "/planning/timeline",
  "/planning/venues",
  "/planning/venues/luxury",
  "/planning/venues/small-weddings",
  "/planning/venues/waterfront",
  "/newport-guide",
  "/newport-guide/best-time-of-year",
  "/newport-guide/marriage-license-ri",
  "/newport-guide/rehearsal-dinner-ideas",
  "/newport-guide/weekend-itinerary",
  "/wedding",
] as const
