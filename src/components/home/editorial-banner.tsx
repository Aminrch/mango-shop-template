import Link from "next/link"

export default function EditorialBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Image */}

        <div className="group overflow-hidden bg-neutral-100">

          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80"
            alt="Editorial"
            className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* Content */}

        <div className="max-w-xl">

          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            Editorial
          </p>

          <h2 className="text-5xl font-light leading-tight md:text-7xl">
            Timeless
            <br />
            silhouettes
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            A curated collection inspired by modern architecture,
            premium fabrics and effortless everyday elegance.
          </p>

          <Link
            href="/new-in"
            className="mt-12 inline-flex border-b border-black pb-2 text-xs uppercase tracking-[0.28em]"
          >
            Discover Collection
          </Link>

        </div>

      </div>

    </section>
  )
}
