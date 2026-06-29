import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types/product"

type CartItem = Product & {
  qty: number
}

type CartStore = {
  items: CartItem[]
  addItem: (item: Product) => void
  removeItem: (id: string) => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
  clear: () => void
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        if (!item || !item.id || !item.slug) return

        const existing = get().items.find((i) => i.id === item.id)

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + 1 } : i
            ),
          })
          return
        }

        set((state) => ({
          items: [...state.items, { ...item, qty: 1 }],
        }))
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      increaseQty: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
            .filter((i) => i.qty > 0),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
)
