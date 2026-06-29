import Link from "next/link"

export default function Campaign() {
  return (
    <section className="relative h-[80vh] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative flex h-full items-center justify-center">

        <div className="text-center text-white">

          <p className="mb-6 text-xs uppercase tracking-[0.35em]">
            New Campaign
          </p>

          <h2 className="text-6xl font-light md:text-8xl">
            Summer 26
          </h2>

          <Link
            href="/new-in"
            className="mt-10 inline-block border border-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
          >
            Explore
          </Link>

        </div>

      </div>

    </section>
  )
}
