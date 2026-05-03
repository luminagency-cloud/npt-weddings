type DirectoryGuideCard = {
  description: string
  href: string
  label: string
}

type CategoryInsight = {
  decisionLens: string
  intro: string
  nextSteps: DirectoryGuideCard[]
  shortlistPrompt: string
}

const defaultInsight: CategoryInsight = {
  intro:
    "Use this category to narrow a shortlist once the venue direction, guest experience, and weekend tone are clearer.",
  decisionLens:
    "The right choice is usually the business that fits the format you are building, not the one with the broadest generic appeal.",
  shortlistPrompt:
    "Shortlist only the businesses that support the wedding format you already understand.",
  nextSteps: [
    {
      href: "/planning/choose-a-venue",
      label: "Venue fit first",
      description: "Use the venue guide if your format is still unsettled.",
    },
    {
      href: "/planning/timeline",
      label: "Sequence decisions",
      description: "Use the timeline if the category is arriving too early in the process.",
    },
  ],
}

const categoryInsights: Record<string, CategoryInsight> = {
  venues: {
    intro:
      "Venue pages matter more than the rest because they shape guest movement, service model, budget pressure, and the tone of the entire weekend.",
    decisionLens:
      "Compare venues by guest flow, weather resilience, and production demands before comparing them by prestige alone.",
    shortlistPrompt:
      "Cut the venues that fight your guest count, budget, or weekend format even if they look strong in isolation.",
    nextSteps: [
      {
        href: "/planning/venues",
        label: "Read the venue guide",
        description: "Start with venue tradeoffs before treating listings like the decision itself.",
      },
      {
        href: "/planning/budget-guide",
        label: "Check the budget shape",
        description: "Venue format usually decides the budget faster than line items do.",
      },
    ],
  },
  photographers: {
    intro:
      "Photography choices should follow venue tone, timeline realism, and the pace of the weekend rather than just portfolio aesthetics.",
    decisionLens:
      "Look for photographers whose style and operating rhythm fit the event you are actually hosting.",
    shortlistPrompt:
      "Shortlist the photographers who feel aligned with the weekend atmosphere, not just the edit style you like in a vacuum.",
    nextSteps: [
      {
        href: "/planning/timeline",
        label: "Map the timeline",
        description: "Photography fit gets clearer when the timeline and event flow are real.",
      },
      {
        href: "/newport-guide/weekend-itinerary",
        label: "Clarify the weekend shape",
        description: "The more destination-heavy the weekend, the more pacing matters.",
      },
    ],
  },
  planners: {
    intro:
      "Planner fit becomes obvious when the venue format and weekend complexity are already visible.",
    decisionLens:
      "The best planner is usually the one whose operating style matches the logistical weight of the wedding, not the one with the broadest service menu.",
    shortlistPrompt:
      "Use this page to identify the planners who can actually carry the complexity you are choosing.",
    nextSteps: [
      {
        href: "/planning/choose-a-venue",
        label: "Lock venue direction",
        description: "Planner fit is clearer once the venue model is real.",
      },
      {
        href: "/planning/budget-guide",
        label: "Budget before scope",
        description: "Know whether the wedding needs custom production or cleaner built-in service.",
      },
    ],
  },
}

export function getCategoryInsight(categorySlug: string): CategoryInsight {
  return categoryInsights[categorySlug] ?? defaultInsight
}
