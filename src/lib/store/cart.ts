"use client"

import { create } from "zustand"

export type CartItem = {
  id: string
  title: string
  price: number
  image: string
  slug: string
  qty: number
}

type CartStore = {
  items: CartItem[]
  isOpen: boolean

  toggleCart: () => void
  openCart: () => void
  closeCart: () => void

  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
  clearCart: () => void
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  isOpen: false,

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id)

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
          ),
        }
      }

      return {
        items: [...state.items, item],
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0),
    })),

  clearCart: () => set({ items: [] }),
}))
