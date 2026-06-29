"use client"

const items = [
  "NEW ARRIVALS",
  "SUMMER 2026",
  "FREE SHIPPING OVER €80",
  "LIMITED DROP",
  "PREMIUM FABRICS",
  "MINIMAL DESIGN",
  "EASY RETURNS",
]

export default function Marquee() {
  const content = [...items, ...items]

  return (
    <section className="overflow-hidden border-y border-neutral-200 bg-white">
      <div className="marquee-track flex w-max py-5">
        {content.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center whitespace-nowrap text-xs uppercase tracking-[0.28em] text-neutral-700"
          >
            <span className="mr-8 h-1.5 w-1.5 rounded-full bg-black" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
