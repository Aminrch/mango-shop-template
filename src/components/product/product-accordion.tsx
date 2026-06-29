"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ProductAccordion() {
  const [open, setOpen] = useState(0)

  const items = [
    {
      title: "Details",
      body: "Premium cotton blend designed for everyday comfort.",
    },
    {
      title: "Shipping",
      body: "Free shipping over €80. Returns within 30 days.",
    },
    {
      title: "Care",
      body: "Machine wash cold. Do not bleach.",
    },
  ]

  return (
    <div className="mt-12 border-t">

      {items.map((item, index) => (

        <div
          key={item.title}
          className="border-b"
        >

          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between py-6"
          >
            <span className="uppercase tracking-[0.2em] text-sm">
              {item.title}
            </span>

            <ChevronDown
              className={`duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === index && (
            <p className="pb-6 text-neutral-600">
              {item.body}
            </p>
          )}

        </div>

      ))}

    </div>
  )
}
