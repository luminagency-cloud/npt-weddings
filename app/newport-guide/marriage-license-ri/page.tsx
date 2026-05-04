import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

export const metadata: Metadata = {
  title: {
    absolute:
      "Rhode Island Marriage License Requirements | Newport Wedding Guide | Married in Newport",
  },
  description:
    "How to get a marriage license in Rhode Island — waiting periods, fees, where to apply, and what Newport couples need to know before the wedding day.",
  alternates: { canonical: "/newport-guide/marriage-license-ri" },
  openGraph: { type: "article" },
}

const quickFacts = [
  { label: "Waiting period", value: "3 days after filing" },
  { label: "Fee", value: "$[VERIFY]" },
  { label: "Valid for", value: "[VERIFY] days from issuance" },
  { label: "Apply up to", value: "[VERIFY] days before the ceremony" },
  { label: "Blood test", value: "Not required" },
  { label: "Residency required", value: "No" },
  { label: "Same-sex marriage", value: "Fully legal since 2013" },
]

export default function MarriageLicensePage() {
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Newport Guide", path: "/newport-guide" },
    { name: "Marriage License in RI", path: "/newport-guide/marriage-license-ri" },
  ])
  const articleJsonLd = buildArticleJsonLd({
    title: "Rhode Island Marriage License Requirements",
    description:
      "How to get a marriage license in Rhode Island — waiting periods, fees, where to apply, and what Newport couples need to know before the wedding day.",
    path: "/newport-guide/marriage-license-ri",
  })

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/newport-guide", label: "Newport Guide" },
          { label: "Marriage License in RI" },
        ]}
        className="mb-8"
      />

      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Newport Guide
        </p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Rhode Island marriage license requirements
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          Getting married in Newport means getting your license through Rhode Island — not your home
          state. Here is what you need to know, in the order you need to know it.
        </p>
      </div>

      {/* Quick facts */}
      <div
        className="mt-10 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Quick reference
        </p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {quickFacts.map(({ label, value }) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-3 last:border-0">
              <dt className="text-sm text-[var(--color-muted)]">{label}</dt>
              <dd className="text-sm font-medium text-[var(--color-ink)]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-12 space-y-10 text-[var(--color-ink)]">

        {/* Where to apply */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Who issues marriage licenses in Rhode Island
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            In Rhode Island, marriage licenses are issued by the city or town clerk — not a county
            clerk, and not a state office. The specific clerk you need depends on where your ceremony
            is taking place.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            If your ceremony is in Newport, you apply at Newport City Hall:
          </p>
          <div
            className="mt-4 rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5 text-sm"
          >
            <p className="font-semibold text-[var(--color-ink)]">Newport City Hall — City Clerk's Office</p>
            <p className="mt-1 text-[var(--color-muted)]">43 Broadway, Newport, RI 02840 [VERIFY]</p>
            <p className="mt-1 text-[var(--color-muted)]">Hours: [VERIFY — check current hours before going]</p>
          </div>
        </section>

        {/* 3-day waiting period */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The 3-day waiting period
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Rhode Island has a mandatory 3-day waiting period. The license becomes valid 3 days after
            you file — meaning you cannot legally marry on the same day you apply. The day you apply
            counts as day zero; the license is valid starting on day three.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Most Newport couples applying for a weekend ceremony file early in the week. Do not leave
            this until the day before — you will not be able to use the license.
          </p>
        </section>

        {/* How far in advance */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How far in advance can you apply
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            You can apply up to [VERIFY] days before your ceremony. Given that the license expires
            [VERIFY] days after issuance, filing too early means your license could lapse before the
            wedding date. Aim to apply within a few weeks of the ceremony — enough buffer to clear the
            3-day wait without running out the clock.
          </p>
        </section>

        {/* What to bring */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What both parties need to bring
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Both people must [VERIFY — confirm whether both parties must appear in person] be present
            when applying. Bring the following:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Valid government-issued photo ID — driver's license or passport",
              "Social Security number [VERIFY — may need the card itself or just the number]",
              "If previously married: the date and place of the divorce or death of prior spouse [VERIFY whether documentation is required]",
              "The fee, typically paid by cash or check [VERIFY accepted payment methods]",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
            Rhode Island does not require a blood test. That requirement was eliminated, and it does
            not apply to couples marrying in Newport or anywhere else in the state.
          </p>
        </section>

        {/* Fee */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The fee
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The marriage license fee in Rhode Island is $[VERIFY]. Confirm the accepted payment
            methods with Newport City Hall directly before your visit — some offices do not accept
            cards.
          </p>
        </section>

        {/* Out-of-state couples */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Out-of-state and destination couples
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            You do not have to be a Rhode Island resident to get married here. Most couples getting
            married in Newport are from out of state, and there is no residency requirement at any
            stage of the process. The license is issued in Rhode Island because the ceremony is in
            Rhode Island — your home state has nothing to do with it.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The same 3-day waiting period applies to everyone. If you are flying in for the wedding
            weekend, plan to handle the license on a trip before the event, or build in enough lead
            time so a local representative can [VERIFY — some states allow proxy filing; confirm
            whether RI permits this].
          </p>
        </section>

        {/* Same-sex marriage */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Same-sex marriage in Rhode Island
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Rhode Island legalized same-sex marriage on August 1, 2013 — among the earlier states to
            do so. The process is identical for all couples. There are no additional requirements,
            separate forms, or distinctions at the clerk's office.
          </p>
        </section>

        {/* If ceremony is outside Newport city limits */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            If your ceremony is in Middletown, Portsmouth, or another Newport County town
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The license must be issued by the clerk of the city or town where the ceremony will be
            performed. Newport and Middletown are separate municipalities. If your venue is in
            Middletown, you apply at Middletown Town Hall — not Newport City Hall.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The same applies to Portsmouth, Bristol, Jamestown, and any other town. Confirm your
            venue's exact municipal address before you go — some properties sit close to town lines
            and couples assume the wrong jurisdiction.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { town: "Newport", note: "Newport City Hall, 43 Broadway [VERIFY]" },
              { town: "Middletown", note: "Middletown Town Hall [VERIFY address]" },
              { town: "Portsmouth", note: "Portsmouth Town Hall [VERIFY address]" },
              { town: "Bristol", note: "Bristol Town Hall [VERIFY address]" },
            ].map(({ town, note }) => (
              <div
                key={town}
                className="rounded-[1.2rem] border border-[var(--color-line)] bg-white p-4 text-sm"
              >
                <p className="font-semibold text-[var(--color-ink)]">{town}</p>
                <p className="mt-1 text-[var(--color-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What happens after */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            After the ceremony
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Your officiant signs the license immediately after the ceremony and is responsible for
            returning it to the city or town clerk within [VERIFY] days. You do not mail it yourself.
            Certified copies of the marriage certificate — the document you will actually use to
            change your name, update beneficiaries, and so on — are then available from the same
            clerk's office, typically for a small fee per copy. [VERIFY fee and processing time]
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Order a few certified copies when you pick up the license or shortly after the ceremony.
            Banks, the Social Security Administration, the DMV, and your employer's HR department all
            tend to want an original certified copy, not a photocopy.
          </p>
        </section>

      </div>

      {/* Practical note */}
      <div className="mt-12 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Before you go
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
          Call or check the Newport City Hall website before visiting — office hours can change around
          holidays and local closures. Several couples have shown up to find the clerk's office closed
          for a municipal election or training day. Confirm in advance, especially if you have a tight
          window before the 3-day waiting period needs to begin.
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
          The items marked [VERIFY] in this guide reflect requirements that can change and should be
          confirmed directly with the Newport City Clerk's office or the Rhode Island Department of
          Health before your visit.
        </p>
      </div>

      {/* Internal links */}
      <nav className="mt-12 border-t border-[var(--color-line)] pt-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Keep planning
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              href: "/newport-guide",
              label: "Newport Guide",
              description: "Timing, guest logistics, and what makes a Newport weekend work.",
            },
            {
              href: "/newport-guide/best-time-of-year",
              label: "Best time of year",
              description: "How season affects pricing, crowd levels, and venue availability.",
            },
            {
              href: "/planning/venues",
              label: "Venue planning",
              description: "Start with the setting that shapes the rest of your Newport wedding.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5 transition-colors hover:border-[var(--color-line-strong)]"
            >
              <p className="text-sm font-semibold text-[var(--color-ink)]">{link.label}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
