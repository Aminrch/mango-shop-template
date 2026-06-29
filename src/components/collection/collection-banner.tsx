import Link from "next/link"

export default function CollectionBanner() {
  return (
    <section className="relative overflow-hidden">

      <div className="h-[70vh]">

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="h-full w-full object-cover"
        />

      </div>

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex items-center">

        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="max-w-xl text-white">

            <p className="mb-5 text-xs uppercase tracking-[0.35em]">
              Summer Collection
            </p>

            <h2 className="text-6xl font-light leading-none md:text-8xl">
              Everyday
              <br />
              Uniform
            </h2>

            <p className="mt-8 text-lg text-white/80">
              Timeless garments designed for everyday life.
            </p>

            <Link
              href="/new-in"
              className="mt-10 inline-flex border border-white px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
            >
              Shop Now
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}
