import Link from "next/link"

const categories = [
  "New In",
  "Dresses",
  "Shirts",
  "Outerwear",
  "Trousers",
  "Accessories",
]

export default function CategoryRail() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 md:justify-center">
        {categories.map((item) => (
          <Link
            key={item}
            href="#new-in"
            className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-neutral-600 transition hover:text-black"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  )
}
