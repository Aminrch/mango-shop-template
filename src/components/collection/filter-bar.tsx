"use client"

import { Grid2X2, LayoutGrid, SlidersHorizontal } from "lucide-react"

export default function FilterBar() {
  return (
    <section className="sticky top-[72px] z-20 border-b border-neutral-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <button className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>

        <p className="text-xs uppercase tracking-[0.3em]">
          Showing 24 Products
        </p>

        <div className="flex items-center gap-5">

          <button>
            <Grid2X2 className="h-5 w-5" />
          </button>

          <button>
            <LayoutGrid className="h-5 w-5" />
          </button>

          <select className="border-none bg-transparent text-xs uppercase tracking-[0.3em] outline-none">
            <option>Newest</option>
            <option>Price ↑</option>
            <option>Price ↓</option>
          </select>

        </div>

      </div>

    </section>
  )
}
