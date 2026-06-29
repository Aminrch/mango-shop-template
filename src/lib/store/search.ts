"use client"

import { create } from "zustand"

type SearchOverlayStore = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useSearchOverlay = create<SearchOverlayStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
