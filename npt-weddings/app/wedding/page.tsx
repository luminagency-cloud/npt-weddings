import type { Metadata } from "next"
import Link from "next/link"
import { getCategories } from "@/lib/queries"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Newport Wedding Directory",
  description: "Browse wedding vendors in Newport County, Rhode Island.",
}

export default async function WeddingDirectoryPage() {
  const categories = await getCategories()

  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest mb-3 text-[#b08c5a]">
            Discover Rhode Island
          </p>
          <h1 className="text-5xl font-bold mb-4 text-[#1c1410]">
            Newport Wedding Directory
          </h1>
          <div className="w-16 h-px mx-auto mb-4 bg-[#b08c5a]"></div>
          <p className="text-lg text-[#6b5540]">
            Find exceptional wedding vendors in Newport County, Rhode Island
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/wedding/${cat.slug}`}
              className="flex flex-col items-center justify-center text-center rounded-2xl p-6 bg-white border border-[#e8ddd0] hover:border-[#b08c5a] hover:shadow-md transition-all duration-200"
            >
              <h2 className="font-semibold text-base text-[#1c1410]">
                {cat.label}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
