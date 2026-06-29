"use client"

import { X } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
}

const sizeRows = [
  { size: "XS", chest: "84–88 cm", waist: "68–72 cm" },
  { size: "S", chest: "88–94 cm", waist: "72–78 cm" },
  { size: "M", chest: "94–100 cm", waist: "78–84 cm" },
  { size: "L", chest: "100–106 cm", waist: "84–90 cm" },
  { size: "XL", chest: "106–112 cm", waist: "90–96 cm" },
]

export default function SizeGuideModal({ open, onClose }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[120] bg-black/40 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed left-1/2 top-1/2 z-[130] w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white text-black shadow-2xl transition duration-300 ${
          open
            ? "pointer-events-auto opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-[0.98]"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h3 className="text-sm uppercase tracking-[0.2em]">
            Size guide
          </h3>

          <button onClick={onClose} aria-label="Close size guide">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="mb-6 max-w-xl text-sm leading-6 text-neutral-600">
            Use the chart below to find your best fit. If you are between sizes,
            choose the larger size for a more relaxed silhouette.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="px-0 py-3 font-medium uppercase tracking-[0.14em]">
                    Size
                  </th>
                  <th className="px-4 py-3 font-medium uppercase tracking-[0.14em]">
                    Chest
                  </th>
                  <th className="px-4 py-3 font-medium uppercase tracking-[0.14em]">
                    Waist
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-b border-neutral-100">
                    <td className="px-0 py-4">{row.size}</td>
                    <td className="px-4 py-4 text-neutral-600">{row.chest}</td>
                    <td className="px-4 py-4 text-neutral-600">{row.waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-xs leading-5 text-neutral-500">
            Measurements are approximate and may vary slightly depending on the cut and fabric.
          </p>
        </div>
      </div>
    </>
  )
}
