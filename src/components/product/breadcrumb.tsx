import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Breadcrumb({
  title,
}: {
  title: string
}) {
  return (
    <nav className="mb-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
      <Link href="/">Home</Link>

      <ChevronRight className="h-3 w-3" />

      <Link href="/new-in">New In</Link>

      <ChevronRight className="h-3 w-3" />

      <span className="text-black">{title}</span>
    </nav>
  )
}
