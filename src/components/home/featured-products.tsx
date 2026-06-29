import ProductCard from "@/components/product/product-card"
import { getProducts } from "@/lib/supabase/products"

export default async function FeaturedProducts() {
  const products = await getProducts()

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="mb-16 flex items-end justify-between">

        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            Selected Pieces
          </p>

          <h2 className="text-4xl font-light tracking-tight">
            Featured Collection
          </h2>
        </div>

        <a
          href="/new-in"
          className="hidden border-b border-black pb-1 text-xs uppercase tracking-[0.25em] md:block"
        >
          View All
        </a>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {products.slice(0,4).map((product:any)=>(
          <ProductCard
            key={product.id}
            id={product.id}
            slug={product.slug}
            title={product.title}
            image={product.image}
            hoverImage={product.hover_image}
            price={product.price}
          />
        ))}

      </div>

    </section>
  )
}
