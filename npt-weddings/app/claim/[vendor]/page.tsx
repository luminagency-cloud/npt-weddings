import { notFound } from "next/navigation"
import Link from "next/link"
import { getVendorBySlug } from "@/lib/queries"

type Props = {
  params: Promise<{ vendor: string }>
}

export default async function ClaimPage({ params }: Props) {
  const { vendor: vendorSlug } = await params
  const vendor = await getVendorBySlug(vendorSlug)

  if (!vendor) notFound()

  if (vendor.claimed) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Already Claimed</h1>
        <p className="text-neutral-600">This listing has already been claimed.</p>
        <Link
          href={`/wedding/${vendor.category_slug}/${vendor.slug}`}
          className="mt-4 inline-block text-sm text-neutral-500 hover:underline"
        >
          Back to listing
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link
        href={`/wedding/${vendor.category_slug}/${vendor.slug}`}
        className="text-sm text-neutral-500 hover:underline mb-6 block"
      >
        Back to {vendor.name}
      </Link>
      <h1 className="text-3xl font-bold text-neutral-900 mb-2">Claim {vendor.name}</h1>
      <p className="text-neutral-600 mb-8">
        Upgrade your listing to add photos, enrich your description, and get priority placement.
      </p>
      <div className="rounded-xl border border-neutral-200 p-6 mb-8">
        <h2 className="font-semibold text-neutral-900 mb-4">What you get with a paid listing</h2>
        <ul className="flex flex-col gap-2 text-sm text-neutral-600">
          {[
            "Claimed & verified badge",
            "Upload up to 10 photos",
            "Custom description",
            "Priority placement above basic listings",
            "Your contact info prominently displayed",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 text-green-600">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-6 text-center">
        <p className="text-sm text-neutral-500">
          Payments coming soon. Reach out directly to claim your listing early.
        </p>
      </div>
    </main>
  )
}
