import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AdminPage() {
  const session = await auth()
  if (!session?.user) redirect("/admin/login")

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Admin</h1>
        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/admin/login" })
          }}
        >
          <button type="submit" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Sign out
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/wedding"
          className="block rounded-xl border border-neutral-200 p-5 hover:border-neutral-400 transition-all"
        >
          <h2 className="font-semibold text-neutral-900">View Directory</h2>
          <p className="text-sm text-neutral-500 mt-1">See the public-facing wedding directory</p>
        </Link>
      </div>
      <p className="mt-8 text-sm text-neutral-400">
        Most data entry is done via the Neon console during early build. Admin UI coming in Phase 3.
      </p>
    </main>
  )
}
