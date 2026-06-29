import Link from "next/link"

export default function FeaturedEditorial() {
  return (
    <section id="editorial" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {/* left large visual */}
        <div className="relative min-h-[520px] overflow-hidden bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop"
            alt="Minimal fashion look"
            className="h-full w-full object-cover"
          />
        </div>

        {/* right editorial content */}
        <div className="flex flex-col justify-center bg-[#f7f4ef] px-8 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            Editorial selection
          </p>

          <h2 className="mt-4 max-w-md text-3xl font-light leading-tight tracking-[0.04em] md:text-5xl">
            Refined layers for late-summer dressing
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 md:text-base">
            Clean shapes, muted tones and lightweight structure inspired by
            modern European fashion campaigns.
          </p>

          <Link
            href="#new-in"
            className="mt-8 inline-flex w-fit items-center border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
          >
            Discover pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
