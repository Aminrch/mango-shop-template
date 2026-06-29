"use client"

const categories = [
  "Shirts",
  "Jackets",
  "T-Shirts",
  "Pants",
  "Shoes",
]

const sizes = ["XS", "S", "M", "L", "XL"]

const colors = [
  "Black",
  "White",
  "Grey",
  "Brown",
]

export default function FilterSidebar() {
  return (
    <aside className="sticky top-28 h-fit border-r border-neutral-200 pr-8">

      <div className="space-y-12">

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em]">
            Category
          </h3>

          <div className="space-y-3">
            {categories.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 text-sm"
              >
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em]">
            Size
          </h3>

          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                className="h-10 w-10 border border-neutral-300 text-sm hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.3em]">
            Color
          </h3>

          <div className="space-y-3">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-3 text-sm"
              >
                <input type="checkbox" />
                {color}
              </label>
            ))}
          </div>
        </div>

      </div>

    </aside>
  )
}
