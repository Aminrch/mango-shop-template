import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CartDrawer from "@/components/cart/cart-drawer"
import SearchOverlay from "@/components/search/search-overlay"

export const metadata: Metadata = {
  title: "Mango Shop Template",
  description: "Minimal fashion storefront with Next.js + Supabase",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CartDrawer />
        <SearchOverlay />
        <div className="pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
