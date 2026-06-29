import ProductCard from "@/components/product/product-card"
import { getProducts } from "@/lib/supabase/products"
import FilterSidebar from "./filter-sidebar"

export default async function CollectionGrid() {
  const products = await getProducts()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-16 lg:grid-cols-[260px_1fr]">

        <div className="hidden lg:block">
          <FilterSidebar />
        </div>

        <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">

          {products.map((product: any) => (
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

      </div>

    </section>
  )
}
