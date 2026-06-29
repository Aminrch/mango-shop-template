import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/70">
            Limited drop
          </p>
          <h3 className="mt-3 max-w-2xl text-2xl font-light leading-tight tracking-[0.04em] md:text-4xl">
            Join the next release of curated essentials and elevated basics
          </h3>
        </div>

        <Link
          href="#new-in"
          className="inline-flex items-center justify-center border border-white px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Shop now
        </Link>
      </div>
    </section>
  )
}
