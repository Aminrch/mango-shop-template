import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types/product"

type WishlistStore = {
  items: Product[]
  addItem: (item: Product) => void
  removeItem: (id: string) => void
  clear: () => void
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        // 🚨 data validation layer
        if (!item || !item.id || !item.slug) return

        const exists = get().items.some((i) => i.id === item.id)
        if (exists) return

        set((state) => ({
          items: [...state.items, item],
        }))
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clear: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage", // localStorage key
    }
  )
)
