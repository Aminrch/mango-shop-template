"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Menu, Search, Heart, ShoppingBag, X, User } from "lucide-react"
import { useCart } from "@/lib/store/cart"
import { useWishlist } from "@/lib/store/wishlist"
import { useSearchOverlay } from "@/lib/store/search"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Teen", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Home", href: "#" },
]

export default function Header() {
  const pathname = usePathname()
  const { items, toggleCart } = useCart()
  const wishlistItems = useWishlist((state) => state.items)
  const openSearch = useSearchOverlay((state) => state.open)

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = pathname === "/"
  const isTransparent = isHome && !isScrolled

  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items]
  )

  const wishlistCount = wishlistItems.length

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileOpen])

  return (
    <>
      {/* announcement */}
      <div className="fixed inset-x-0 top-0 z-[60] bg-black text-white">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-center px-4 text-[10px] uppercase tracking-[0.24em]">
          Free shipping on selected orders
        </div>
      </div>

      {/* header */}
      <header
        className={`fixed inset-x-0 top-8 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-white"
            : "border-b border-neutral-200 bg-white/95 text-black backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* left */}
          <div className="flex items-center gap-3 lg:gap-6">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-sm md:text-base tracking-[0.45em] uppercase"
          >
            Mango
          </Link>

          {/* right */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              onClick={openSearch}
              className="hidden md:inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-70 transition"
              aria-label="Search"
            >
              Search
            </button>

            <button
              className="hidden md:inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-70 transition"
              aria-label="Login"
            >
              Login
            </button>

            <button
              onClick={openSearch}
              className="md:hidden"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              className="relative hidden md:inline-flex"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <span
                  className={`absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    isTransparent
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              className="hidden md:inline-flex"
              aria-label="Account"
            >
              <User className="h-4 w-4" />
            </button>

            <button
              onClick={toggleCart}
              className="relative inline-flex items-center"
              aria-label="Open bag"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span
                  className={`absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    isTransparent
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* drawer */}
      <aside
        className={`fixed left-0 top-0 z-[80] h-full w-[88%] max-w-[360px] bg-white text-black transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 pb-4 pt-5">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Menu
            </span>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-neutral-100 py-4 text-sm uppercase tracking-[0.18em]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  setMobileOpen(false)
                  openSearch()
                }}
                className="block text-sm uppercase tracking-[0.18em] text-neutral-600"
              >
                Search
              </button>
              <button className="block text-sm uppercase tracking-[0.18em] text-neutral-600">
                Login
              </button>
              <button className="block text-sm uppercase tracking-[0.18em] text-neutral-600">
                Wishlist
              </button>
            </div>
          </div>

          <div className="border-t border-neutral-200 px-5 py-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Designed in Barcelona
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
