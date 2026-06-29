"use client"

import Link from "next/link"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"

import { useWishlist } from "@/lib/store/wishlist"
import { useCart } from "@/lib/store/cart"

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()
  const { addItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Heart className="h-10 w-10 text-neutral-300" />

        <h1 className="mt-4 text-lg uppercase tracking-[0.14em]">
          Your wishlist is empty
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Save items you love for later
        </p>

        <Link
          href="/"
          className="mt-6 border border-black bg-black px-6 py-3 text-sm uppercase tracking-[0.14em] text-white"
        >
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* header */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-sm uppercase tracking-[0.22em]">
          Wishlist ({items.length})
        </h1>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="group relative">
            {/* image */}
            <Link href={`/product/${item.slug}`}>
              <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm uppercase tracking-[0.08em]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  ${Number(item.price).toFixed(2)}
                </p>
              </div>
            </Link>

            {/* actions */}
            <div className="absolute right-3 top-3 flex gap-2">
              <button
                onClick={() =>
                  addItem({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    slug: item.slug,
                    qty: 1,
                  })
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition hover:bg-white"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition hover:bg-white"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
