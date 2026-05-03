type DirectoryGuideCard = {
  description: string
  href: string
  label: string
}

type CategoryCardContent = {
  bestFor: string
  planningHint: string
}

type CategoryInsight = {
  decisionLens: string
  intro: string
  nextSteps: DirectoryGuideCard[]
  relatedCategories: DirectoryGuideCard[]
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
  relatedCategories: [
    {
      href: "/wedding/venues",
      label: "Review venues",
      description: "Use venue fit to narrow the rest of the shortlist.",
    },
    {
      href: "/wedding/planners",
      label: "Check planners",
      description: "Planner fit matters when the weekend is logistically heavy.",
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
    relatedCategories: [
      {
        href: "/wedding/planners",
        label: "Browse planners",
        description: "Useful once the venue format starts demanding coordination help.",
      },
      {
        href: "/wedding/photographers",
        label: "Browse photographers",
        description: "Photography choices get clearer once the venue tone is real.",
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
    relatedCategories: [
      {
        href: "/wedding/planners",
        label: "Compare planners",
        description: "Planner style often affects photography flow and timeline discipline.",
      },
      {
        href: "/wedding/venues",
        label: "Revisit venues",
        description: "Venue layout changes the light, movement, and shot rhythm more than most couples expect.",
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
    relatedCategories: [
      {
        href: "/wedding/venues",
        label: "Back to venues",
        description: "Planner fit depends on whether the venue is full-service or custom-build.",
      },
      {
        href: "/wedding/caterers",
        label: "Check caterers",
        description: "Food service complexity often tells you how much planner support you really need.",
      },
    ],
  },
}

const defaultCategoryCardContent: CategoryCardContent = {
  bestFor: "Best once the venue direction and weekend tone are already clearer.",
  planningHint: "Use this category to tighten a shortlist, not to define the whole wedding.",
}

const categoryCardContent: Record<string, CategoryCardContent> = {
  venues: {
    bestFor: "Best for locking the format, guest flow, and weekend tone before anything else.",
    planningHint: "Start here if the wedding still feels broad or undefined.",
  },
  photographers: {
    bestFor: "Best once the timeline, venue mood, and guest rhythm are taking shape.",
    planningHint: "Use this category after the wedding format stops drifting.",
  },
  planners: {
    bestFor: "Best when the weekend has enough complexity that coordination style matters.",
    planningHint: "Planner fit becomes clearer when the venue and budget shape are visible.",
  },
}

export function getCategoryInsight(categorySlug: string): CategoryInsight {
  return categoryInsights[categorySlug] ?? defaultInsight
}

export function getCategoryCardContent(categorySlug: string) {
  return categoryCardContent[categorySlug] ?? defaultCategoryCardContent
}
