"use client"

import { useCart } from "@/lib/store/cart"

type Product = {
  id: string
  slug: string
  title: string
  image: string
  price: number
}

export default function AddToCartButton({
  product,
}: {
  product: Product
}) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          slug: product.slug,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 1,
        })
      }
      className="w-full bg-black py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800"
    >
      Add to Cart
    </button>
  )
}
