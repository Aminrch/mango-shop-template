import { notFound } from "next/navigation"

import { getProductBySlug } from "@/lib/supabase/products"

import Breadcrumb from "@/components/product/breadcrumb"
import ProductGallery from "@/components/product/product-gallery"
import SizeSelector from "@/components/product/size-selector"
import ProductAccordion from "@/components/product/product-accordion"
import AddToCartButton from "@/components/cart/add-to-cart-button"
import YouMayLike from "@/components/product/you-may-like"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  const product = await getProductBySlug(slug)

  if (!product) notFound()

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      <Breadcrumb title={product.title} />

      <div className="grid gap-20 lg:grid-cols-2">

        <ProductGallery
          images={[
            product.image,
            product.hover_image || product.image,
            product.image,
          ]}
        />

        <div className="h-fit lg:sticky lg:top-28">

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500">
            New Collection
          </p>

          <h1 className="text-5xl font-light tracking-tight">
            {product.title}
          </h1>

          <p className="mt-6 text-2xl font-light">
            €{product.price}
          </p>

          <p className="mt-8 max-w-lg leading-8 text-neutral-600">
            {product.description}
          </p>

          <div className="mt-12">
            <SizeSelector />
          </div>

          <div className="mt-10">
            <AddToCartButton product={product} />
          </div>

          <ProductAccordion />

        </div>

      </div>

      <YouMayLike />

    </main>
  )
}
