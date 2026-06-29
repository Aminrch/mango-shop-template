import Hero from "@/components/home/hero"
import Marquee from "@/components/home/marquee"
import CategorySplit from "@/components/home/category-split"
import EditorialBanner from "@/components/home/editorial-banner"
import FeaturedProducts from "@/components/home/featured-products"
import Campaign from "@/components/home/campaign"
import Newsletter from "@/components/home/newsletter"

export default function Home() {
  return (
    <main>
      <Hero />

      <Marquee />

      <CategorySplit />

      <EditorialBanner />

      <FeaturedProducts />

      <Campaign />

      <Newsletter />
    </main>
  )
}
