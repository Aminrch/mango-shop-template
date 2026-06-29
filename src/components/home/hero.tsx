import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-neutral-100">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-20">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-xs uppercase tracking-[0.35em]">
            Summer 2026
          </p>

          <h1 className="text-5xl font-light leading-none md:text-7xl">
            Minimal
            <br />
            Essentials
          </h1>

          <p className="mt-6 max-w-md text-white/80">
            Timeless silhouettes inspired by modern fashion and everyday
            elegance.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/women"
              className="bg-white px-8 py-4 text-xs uppercase tracking-[0.2em] text-black transition hover:bg-neutral-200"
            >
              Shop Women
            </Link>

            <Link
              href="/men"
              className="border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-white/60" />
      </div>
    </section>
  )
}
