import CollectionBanner from "@/components/collection/collection-banner"
import CollectionHeader from "@/components/collection/collection-header"
import FilterBar from "@/components/collection/filter-bar"
import CollectionGrid from "@/components/collection/collection-grid"

export default function NewInPage() {
  return (
    <main>

      <CollectionBanner />

      <CollectionHeader />

      <FilterBar />

      <CollectionGrid />

    </main>
  )
}
