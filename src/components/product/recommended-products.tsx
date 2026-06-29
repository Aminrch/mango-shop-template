import ProductCard from "@/components/product/product-card"

type Props = {
  products: any[]
}

export default function RecommendedProducts({ products }: Props) {
  if (!products?.length) return null

  return (
    <section className="mt-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-sm uppercase tracking-[0.22em]">
          You may also like
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            hoverImage={product.hover_image}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  )
}
