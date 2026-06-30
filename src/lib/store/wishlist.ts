"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type WishlistItem = {
  id: string
  title: string
  price: number
  image: string
  slug: string
}

type WishlistStore = {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  toggleItem: (item: WishlistItem) => void
  isInWishlist: (id: string) => boolean
  clearWishlist: () => void
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === item.id)

          if (exists) {
            return state
          }

          return {
            items: [...state.items, item],
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggleItem: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === item.id)

          if (exists) {
            return {
              items: state.items.filter((i) => i.id !== item.id),
            }
          }

          return {
            items: [...state.items, item],
          }
        }),

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id)
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
    }
  )
)
