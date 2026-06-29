import { supabase } from "@/lib/supabase/client"
import { safeProducts, safeProduct } from "@/lib/safe/product"

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) return []

  return safeProducts(data ?? [])
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) return null

  return safeProduct(data)
}

export async function getRecommendedProducts(currentSlug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .neq("slug", currentSlug)
    .limit(4)

  if (error) return []

  return safeProducts(data ?? [])
}
