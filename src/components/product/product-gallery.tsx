"use client"

import { useState } from "react"

type Props = {
  images: string[]
}

export default function ProductGallery({ images }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid grid-cols-[90px_1fr] gap-6">

      <div className="flex flex-col gap-4">

        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`overflow-hidden border ${
              active === i
                ? "border-black"
                : "border-neutral-200"
            }`}
          >
            <img
              src={img}
              className="aspect-[3/4] object-cover"
            />
          </button>
        ))}

      </div>

      <div className="overflow-hidden bg-neutral-100">

        <img
          src={images[active]}
          className="aspect-[3/4] w-full object-cover duration-500 hover:scale-105"
        />

      </div>

    </div>
  )
}
