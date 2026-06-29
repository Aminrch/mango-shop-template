import Link from "next/link"

const shopLinks = ["New In", "Dresses", "Shirts", "Outerwear", "Accessories"]
const helpLinks = ["Shipping", "Returns", "Payment", "Contact"]
const companyLinks = ["About", "Journal", "Careers", "Stores"]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* brand */}
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.45em]">Mango</p>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
              A modern fashion commerce template built with Next.js, Supabase
              and a clean editorial aesthetic inspired by premium retail brands.
            </p>

            <div className="mt-8 flex gap-6 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
          </div>

          {/* shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-neutral-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Help
            </h4>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-neutral-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-neutral-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mango Shop Template. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
