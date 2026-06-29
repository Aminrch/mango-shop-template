"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { useMemo } from "react"

import { useCart } from "@/lib/store/cart"

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    increaseQty,
    decreaseQty,
  } = useCart()

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0)
  }, [items])

  return (
    <>
      {/* overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[90] bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* drawer */}
      <aside
        className={`fixed right-0 top-0 z-[100] flex h-full w-full max-w-md flex-col bg-white text-black transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <h2 className="text-sm uppercase tracking-[0.22em]">
              Shopping Bag ({items.length})
            </h2>
          </div>

          <button onClick={closeCart} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-neutral-300" />
            <h3 className="mt-4 text-sm uppercase tracking-[0.18em]">
              Your bag is empty
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Add pieces you love and they’ll appear here.
            </p>

            <button
              onClick={closeCart}
              className="mt-6 border border-black bg-black px-6 py-3 text-sm uppercase tracking-[0.14em] text-white"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-neutral-200 px-5 py-5"
                >
                  <div className="flex gap-4">
                    {/* image */}
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="block h-28 w-20 shrink-0 overflow-hidden bg-neutral-100"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    {/* info */}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="text-sm uppercase tracking-[0.08em]"
                          >
                            {item.title}
                          </Link>

                          <p className="mt-1 text-sm text-neutral-600">
                            ${Number(item.price).toFixed(2)}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-500 hover:text-black"
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        {/* qty */}
                        <div className="flex items-center border border-neutral-300">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="flex h-9 w-9 items-center justify-center"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>

                          <span className="flex h-9 min-w-10 items-center justify-center text-sm">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="flex h-9 w-9 items-center justify-center"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="text-sm">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* footer */}
            <div className="border-t border-neutral-200 px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.16em] text-neutral-500">
                  Subtotal
                </span>
                <span className="text-base">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="mb-5 text-xs leading-5 text-neutral-500">
                Shipping and taxes are calculated at checkout.
              </p>

              <button className="w-full border border-black bg-black py-3.5 text-sm uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black">
                Checkout
              </button>

              <button
                onClick={closeCart}
                className="mt-3 w-full border border-neutral-300 py-3.5 text-sm uppercase tracking-[0.14em] transition hover:bg-neutral-50"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
