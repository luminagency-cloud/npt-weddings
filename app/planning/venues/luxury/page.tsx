import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Luxury Newport Wedding Venues",
  description:
    "A guide to luxury Newport wedding venues for couples looking for prestige, service, and a highly polished guest experience.",
}

export default function LuxuryWeddingVenuesPage() {
  return (
    <SeoGuidePage
      eyebrow="Venue Intent"
      title="Luxury Newport wedding venues should feel polished, not merely expensive."
      intro="Luxury in Newport is not just about historic prestige or water views. The best luxury venues combine setting, service, guest comfort, and operational calm in a way that makes the whole weekend feel effortless."
      lead="Newport has enough status in the market that luxury couples can get distracted by prestige alone. The better question is whether the venue delivers a consistently elevated experience from arrival through the final event of the weekend."
      checklist={{
        title: "Luxury checks",
        items: [
          "Look past the headline reputation and study service quality.",
          "Judge how the venue handles guest comfort as closely as aesthetics.",
          "Make sure the level of staffing and execution matches the price point.",
          "Choose the venue that feels composed under pressure, not just glamorous in photos.",
        ],
      }}
      sections={[
        {
          title: "Prestige is not enough",
          body:
            "The Newport market has venues with real cachet, but luxury couples still need to ask whether the actual event experience feels seamless, warm, and controlled. Prestige without execution gets exposed quickly.",
        },
        {
          title: "Service is part of the aesthetic",
          body:
            "At the high end, service quality shapes the entire emotional tone of the wedding. A luxury venue should feel refined in motion, not just beautiful at a standstill.",
        },
        {
          title: "Guest comfort matters more than spectacle",
          body:
            "A truly elevated wedding often feels smoother, calmer, and more intentional rather than simply larger or more dramatic. Luxury should reduce friction, not introduce more of it.",
        },
        {
          title: "The venue should carry the standard",
          body:
            "The strongest luxury venues make it easier for every other part of the wedding to succeed. They give planners, caterers, and creative partners a cleaner platform to work from.",
        },
      ]}
      relatedLinks={[
        { href: "/planning/budget-guide", label: "Read the budget guide" },
        { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
        { href: "/wedding/venues", label: "Browse venue listings" },
      ]}
    />
  )
}
