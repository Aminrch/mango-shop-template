"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { useSearchOverlay } from "@/lib/store/search"

type Product = {
  id: string
  title: string
  price: number
  image: string
  slug: string
}

export default function SearchOverlay() {
  const isOpen = useSearchOverlay((state) => state.isOpen)
  const close = useSearchOverlay((state) => state.close)

  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (!isOpen) return

    async function loadProducts() {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        setProducts(Array.isArray(data) ? data : [])
      } catch {
        setProducts([])
      }
    }

    loadProducts()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }

    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, close])

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products.slice(0, 8)

    return products
      .filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 12)
  }, [products, query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[120] bg-white text-black">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 md:px-6">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 py-5">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em]">
            <Search className="h-4 w-4" />
            Search
          </div>

          <button onClick={close} aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* input */}
        <div className="border-b border-neutral-200 py-6">
          <input
            autoFocus
            type="text"
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-none bg-transparent text-2xl outline-none placeholder:text-neutral-300 md:text-4xl"
          />
        </div>

        {/* content */}
        <div className="grid flex-1 gap-10 py-8 md:grid-cols-[260px_1fr]">
          {/* left hints */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Suggested
            </p>

            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              <button onClick={() => setQuery("shirt")} className="text-left hover:text-black">
                Shirts
              </button>
              <button onClick={() => setQuery("jacket")} className="text-left hover:text-black">
                Jackets
              </button>
              <button onClick={() => setQuery("linen")} className="text-left hover:text-black">
                Linen
              </button>
              <button onClick={() => setQuery("dress")} className="text-left hover:text-black">
                Dresses
              </button>
            </div>
          </div>

          {/* results */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                Results
              </p>
              <p className="text-xs text-neutral-500">
                {filteredProducts.length} items
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="border border-dashed border-neutral-300 p-8 text-sm text-neutral-500">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={close}
                    className="group"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-3">
                      <h3 className="text-sm uppercase tracking-[0.08em]">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        ${Number(product.price).toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
