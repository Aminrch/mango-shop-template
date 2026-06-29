"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

import { useWishlist } from "@/lib/store/wishlist"
import { useCart } from "@/lib/store/cart"

type Props = {
  id: string
  slug: string
  title: string
  image: string
  hoverImage?: string
  price: number
}

export default function ProductCard({
  id,
  slug,
  title,
  image,
  hoverImage,
  price,
}: Props) {
  const [hover, setHover] = useState(false)

  const { toggleItem, isInWishlist } = useWishlist()
  const { addItem } = useCart()

  const wished = isInWishlist(id)

  return (
    <Link
      href={`/product/${slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100">

        <img
          src={hover && hoverImage ? hoverImage : image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Wishlist */}

        <button
          onClick={(e) => {
            e.preventDefault()

            toggleItem({
              id,
              slug,
              title,
              price,
              image,
            })
          }}
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
        >
          <Heart
            className={`h-4 w-4 transition ${
              wished ? "fill-black text-black" : "text-black"
            }`}
          />
        </button>

        {/* Quick Add */}

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 p-4 transition duration-300 group-hover:translate-y-0">

          <button
            onClick={(e) => {
              e.preventDefault()

              addItem({
                id,
                slug,
                title,
                image,
                price,
                qty: 1,
              })
            }}
            className="w-full border border-black py-3 text-[11px] uppercase tracking-[0.35em] transition hover:bg-black hover:text-white"
          >
            Quick Add
          </button>

        </div>

      </div>

      {/* Info */}

      <div className="mt-5 flex items-start justify-between gap-4">

        <div>

          <h3 className="text-sm uppercase tracking-[0.15em]">
            {title}
          </h3>

          <p className="mt-2 text-neutral-500">
            €{price}
          </p>

        </div>

        <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">
          NEW
        </span>

      </div>

    </Link>
  )
}
