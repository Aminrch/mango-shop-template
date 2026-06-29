export default function CollectionHeader() {
  return (
    <section className="border-b border-neutral-200">

      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 py-16">

        <div>

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Collection
          </p>

          <h1 className="text-5xl font-light">
            New In
          </h1>

        </div>

        <div className="hidden max-w-md text-right text-neutral-500 md:block">
          Discover our latest arrivals crafted with premium fabrics
          and timeless silhouettes.
        </div>

      </div>

    </section>
  )
}
