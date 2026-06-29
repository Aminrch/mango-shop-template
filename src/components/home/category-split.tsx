import Link from "next/link"

export default function CategorySplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Link
        href="/women"
        className="group relative h-[760px] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />

        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="text-5xl font-light">Woman</h2>

          <p className="mt-4 uppercase tracking-[0.25em] text-sm">
            Discover →
          </p>
        </div>
      </Link>

      <Link
        href="/men"
        className="group relative h-[760px] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />

        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="text-5xl font-light">Man</h2>

          <p className="mt-4 uppercase tracking-[0.25em] text-sm">
            Discover →
          </p>
        </div>
      </Link>
    </section>
  )
}
