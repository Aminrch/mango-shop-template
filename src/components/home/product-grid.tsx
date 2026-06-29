import ProductCard from "../product/product-card"
import { getProducts } from "@/lib/supabase/products"

export default async function ProductGrid() {
  const products = await getProducts()

  return (
    <section id="new-in" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            New now
          </p>
          <h2 className="mt-3 text-2xl font-light tracking-[0.04em] md:text-4xl">
            New season essentials
          </h2>
        </div>

        <button className="hidden text-[11px] uppercase tracking-[0.2em] text-neutral-600 md:block">
          View all
        </button>
      </div>

      {products.length === 0 ? (
        <div className="border border-dashed border-neutral-300 p-10 text-sm text-neutral-500">
          No products found in Supabase yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p: any) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              hoverImage={p.hover_image}
              slug={p.slug}
            />
          ))}
        </div>
      )}
    </section>
  )
}
