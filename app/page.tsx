import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import styles from "./home.module.css"

export const metadata: Metadata = {
  title: "Newport Wedding Planning",
  description:
    "Find Newport, Rhode Island wedding venues, compare waterfront and estate settings, and plan your wedding weekend with local guides.",
  alternates: { canonical: "/" },
  openGraph: { type: "website" },
  other: { "page-type": "place", "page-kind": "place", "site-kind": "other" },
}

const venueStyles = [
  {
    title: "Waterfront venues",
    description: "Harbor views, oceanfront lawns, and vows within earshot of the waves.",
    href: "/planning/venues/waterfront",
    image: "/home/waterfront.webp",
  },
  {
    title: "Historic estates",
    description: "Gilded Age architecture, formal gardens, and room for a black-tie reception.",
    href: "/planning/venues/luxury",
    image: "/home/estate.webp",
  },
  {
    title: "Intimate venues",
    description: "Small inns and private dining rooms for a shorter guest list.",
    href: "/planning/venues/small-weddings",
    image: "/home/intimate.webp",
  },
]

const planningGuides = [
  { label: "Choose a Newport venue", href: "/planning/choose-a-venue" },
  { label: "Estimate your wedding costs", href: "/planning/newport-wedding-cost" },
  { label: "Build a planning timeline", href: "/planning/timeline" },
  { label: "Explore Newport with your guests", href: "/newport-guide" },
]

const vendorCategories = [
  { label: "Photographers", href: "/wedding/photographers" },
  { label: "Planners", href: "/wedding/planners" },
  { label: "Florists", href: "/wedding/florists" },
  { label: "Caterers", href: "/wedding/caterers" },
  { label: "Hair & makeup", href: "/wedding/hair-makeup" },
  { label: "Bands & DJs", href: "/wedding/music" },
]

export default function Home() {
  return (
    <>
      <section className={`${styles.home} ${styles.hero}`} aria-labelledby="home-heading" data-enter>
        <picture className={styles.heroMedia}>
          <source media="(max-width: 680px)" srcSet="/home/coastal-estate-mobile.webp" />
          <Image
            src="/home/coastal-estate.webp"
            alt="An illustration of a coastal estate overlooking the ocean, with wedding chairs on the lawn"
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className={`wrap ${styles.wrap} ${styles.heroCopy}`}>
          <div>
            <p className={styles.kicker}>Newport, Rhode Island</p>
            <h1 id="home-heading">
              Your Newport <em>wedding.</em>
            </h1>
          </div>
          <div className={styles.heroAside}>
            <p>
              Find a venue by the water, on a historic estate, or tucked into town.
              Then plan the weekend around it.
            </p>
            <a href="#venue-styles" className={styles.button}>
              Browse Newport venues <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="venue-styles" className={`${styles.home} ${styles.venues}`} aria-labelledby="venue-heading" tabIndex={-1}>
        <div className={`wrap ${styles.wrap}`}>
          <div className={styles.sectionHead}>
            <h2 id="venue-heading">Wedding venues by setting</h2>
            <Link href="/wedding/venues" className={styles.textLink}>
              View venue listings <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <ul className={styles.venueGrid}>
            {venueStyles.map(({ title, description, href, image }) => (
              <li key={href}>
                <Link href={href} className={styles.venueLink}>
                  <div className={styles.venueMedia}>
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 680px) calc(100vw - 48px), (max-width: 1280px) 30vw, 380px"
                    />
                  </div>
                  <div className={styles.venueTitle}>
                    <h3>{title}</h3>
                    <ArrowRight aria-hidden="true" size={20} />
                  </div>
                  <p>{description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.home} ${styles.resources}`} aria-labelledby="resources-heading">
        <div className={`wrap ${styles.wrap}`}>
          <h2 id="resources-heading" className={styles.statement}>
            Plan the <em>whole weekend.</em>
          </h2>
          <div className={styles.resourceGrid}>
            <div>
              <h3>Planning guides</h3>
              <ul className={styles.linkList}>
                {planningGuides.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}<ArrowRight aria-hidden="true" size={16} /></Link>
                  </li>
                ))}
              </ul>
              <Link href="/planning" className={styles.textLink}>
                See all planning guides <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div>
              <h3>Local wedding vendors</h3>
              <ul className={styles.linkList}>
                {vendorCategories.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}<ArrowRight aria-hidden="true" size={16} /></Link>
                  </li>
                ))}
              </ul>
              <Link href="/wedding" className={styles.textLink}>
                Browse the vendor directory <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
          <p className={styles.imageCredit}>
            Venue imagery is AI-generated and depicts fictional settings.
          </p>
        </div>
      </section>
    </>
  )
}
