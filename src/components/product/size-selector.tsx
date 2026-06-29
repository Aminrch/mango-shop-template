"use client"

import { useState } from "react"

const sizes = ["XS", "S", "M", "L", "XL"]

export default function SizeSelector() {
  const [selected, setSelected] = useState("M")

  return (
    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.25em]">
        Size
      </p>

      <div className="flex gap-3">

        {sizes.map(size => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`h-12 w-12 border transition ${
              selected === size
                ? "border-black bg-black text-white"
                : "border-neutral-300"
            }`}
          >
            {size}
          </button>
        ))}

      </div>

    </div>
  )
}
