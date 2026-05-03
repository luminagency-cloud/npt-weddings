import Link from "next/link"
import { vendorImportHeaders } from "@/lib/vendor-import"

const fieldGuidance = [
  {
    field: "category_slug",
    guidance: "Match the category slug already in the database, such as `venues` or `photographers`.",
  },
  {
    field: "name",
    guidance: "Use the public-facing business name exactly as you want it to appear.",
  },
  {
    field: "website",
    guidance: "Preferred when available because it gives you the best source for copy cleanup and verification.",
  },
  {
    field: "email",
    guidance: "Useful when the website is weak or missing. At least one of website or email should be present.",
  },
  {
    field: "phone",
    guidance: "Optional, but worth keeping when it is easy to source.",
  },
  {
    field: "city",
    guidance: "Defaults to Newport if left blank.",
  },
  {
    field: "state",
    guidance: "Defaults to RI if left blank.",
  },
  {
    field: "description",
    guidance: "Keep this short if you are drafting from a lead list. It can be sharpened later in admin.",
  },
]

export default function AdminImportPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Admin</p>
          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">Vendor import prep</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
            Use this format when you are turning raw lead sheets into clean vendor rows.
            The goal is not to make the list perfect on the first pass. The goal is to get it
            structured enough that admin cleanup is fast instead of chaotic.
          </p>
        </div>
        <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">
          Back to admin
        </Link>
      </div>

      <section className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Required column order
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-neutral-950 px-4 py-4 text-sm text-neutral-100">
            {vendorImportHeaders.join(",")}
          </pre>
          <p className="mt-4 text-sm leading-6 text-neutral-500">
            Keep the header row exactly like this if you want the import helper to parse it
            cleanly later.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Template
          </p>
          <p className="mt-4 text-sm leading-6 text-neutral-500">
            A starter CSV template lives in
            {" "}
            <a href="/vendor-import-template.csv" className="font-medium text-neutral-900 underline">
              `/vendor-import-template.csv`
            </a>
            {" "}
            so you have a clean sheet to hand leads off into.
          </p>
          <p className="mt-4 text-sm leading-6 text-neutral-500">
            Keep one business per row. Use blank values instead of placeholder text like
            `TBD`, `n/a`, or `coming soon`.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Field guidance
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {fieldGuidance.map((item) => (
            <div key={item.field} className="rounded-xl border border-neutral-200 p-4">
              <p className="font-mono text-sm font-semibold text-neutral-900">{item.field}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-500">{item.guidance}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Working rule
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
          Clean structure beats complete prose on the first pass. If you have category, name,
          a usable source, and a sensible slug path later, the rest can be improved in admin.
        </p>
      </section>
    </main>
  )
}
