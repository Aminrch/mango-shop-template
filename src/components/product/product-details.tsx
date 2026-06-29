"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ChevronDown, Heart } from "lucide-react"
import { useCart } from "@/lib/store/cart"
import { useWishlist } from "@/lib/store/wishlist"
import SizeGuideModal from "@/components/product/size-guide-modal"

type Product = {
  id: string
  title: string
  slug: string
  description?: string | null
  price: number
  image: string
  hover_image?: string | null
  gallery?: string[] | null
}

type Props = {
  product: Product
}

const defaultSizes = ["XS", "S", "M", "L", "XL"]

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-neutral-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm uppercase tracking-[0.14em]"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pb-4 text-sm leading-6 text-neutral-600">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetails({ product }: Props) {
  const { addItem, openCart } = useCart()
  const { toggleItem, isInWishlist } = useWishlist()

  const wished = isInWishlist(product.id)

  const gallery = useMemo(() => {
    if (Array.isArray(product.gallery) && product.gallery.length > 0) {
      return product.gallery
    }

    return [
      product.image,
      product.hover_image || product.image,
      product.image,
      product.hover_image || product.image,
    ].filter(Boolean) as string[]
  }, [product])

  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)

  const activeImg = gallery[activeImage] || product.image

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.")
      return
    }

    addItem({
      id: `${product.id}-${selectedSize}`,
      title: `${product.title} / ${selectedSize}`,
      price: product.price,
      image: activeImg,
      slug: product.slug,
      qty: 1,
    })

    openCart()
  }

  return (
    <>
      <section className="pb-12">
        {/* breadcrumb */}
        <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Product</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* LEFT - GALLERY */}
          <div className="grid gap-4 md:grid-cols-[90px_1fr]">
            {/* thumbnails */}
            <div className="order-2 flex gap-2 md:order-1 md:flex-col">
              {gallery.map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[3/4] w-16 overflow-hidden border transition md:w-full ${
                    activeImage === index
                      ? "border-black"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* main image */}
            <div className="order-1 overflow-hidden bg-neutral-100 md:order-2">
              <div className="aspect-[3/4]">
                <img
                  src={activeImg}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            {/* micro info bar */}
            <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 border-b border-t border-neutral-200 py-3 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              <span>Free delivery over €80</span>
              <span>14-day returns</span>
              <span>Secure checkout</span>
            </div>

            <div className="border-b border-neutral-200 pb-6">
              <h1 className="text-lg uppercase tracking-[0.16em] md:text-xl">
                {product.title}
              </h1>

              <p className="mt-3 text-base">
                €{Number(product.price).toFixed(2)}
              </p>

              <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600">
                {product.description ||
                  "Minimal contemporary piece with a clean silhouette and elevated everyday wearability."}
              </p>
            </div>

            {/* SIZE SELECTOR */}
            <div className="border-b border-neutral-200 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.14em]">
                  Select size
                </span>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs uppercase tracking-[0.14em] text-neutral-500 hover:text-black"
                >
                  Size guide
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {defaultSizes.map((size) => {
                  const active = selectedSize === size

                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-4 py-3 text-sm uppercase transition ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-neutral-300 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="space-y-3 py-6">
              <button
                onClick={handleAddToCart}
                className="w-full border border-black bg-black py-4 text-sm uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
              >
                Add to bag
              </button>

              <button
                onClick={() =>
                  toggleItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: activeImg,
                    slug: product.slug,
                  })
                }
                className={`flex w-full items-center justify-center gap-2 border py-4 text-sm uppercase tracking-[0.16em] transition ${
                  wished
                    ? "border-black bg-black text-white"
                    : "border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                <Heart className={`h-4 w-4 ${wished ? "fill-white" : ""}`} />
                {wished ? "Saved to wishlist" : "Add to wishlist"}
              </button>
            </div>

            {/* ACCORDIONS */}
            <div className="mt-2">
              <Accordion title="Product details" defaultOpen>
                <p>
                  Crafted for a clean, elevated everyday look. Designed with a
                  relaxed silhouette and a premium feel inspired by modern
                  fashion retail.
                </p>
              </Accordion>

              <Accordion title="Composition and care">
                <ul className="space-y-1">
                  <li>• Main fabric: cotton / linen blend</li>
                  <li>• Machine wash cold</li>
                  <li>• Do not tumble dry</li>
                  <li>• Iron at low temperature</li>
                </ul>
              </Accordion>

              <Accordion title="Delivery and returns">
                <p>
                  Standard delivery in 3–5 business days. Returns available
                  within 14 days from delivery, provided the item is unworn and
                  in original condition.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <SizeGuideModal
        open={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />
    </>
  )
}
