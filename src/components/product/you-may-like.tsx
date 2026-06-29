import ProductCard from "@/components/product/product-card"
import { getProducts } from "@/lib/supabase/products"

export default async function YouMayLike() {
  const products = await getProducts()

  return (
    <section className="mt-32 border-t pt-24">

      <div className="mb-14 flex items-end justify-between">

        <div>

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Recommended
          </p>

          <h2 className="text-4xl font-light">
            You May Also Like
          </h2>

        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {products.slice(0, 4).map((product: any) => (
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
