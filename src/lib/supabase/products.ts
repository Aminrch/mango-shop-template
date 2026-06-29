import { supabase } from "@/lib/supabase/client"

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Supabase getProducts error:", error.message)
    return []
  }

  return data ?? []
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Supabase getProductBySlug error:", error.message)
    return null
  }

  return data
}

export async function getRecommendedProducts(currentSlug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .neq("slug", currentSlug)
    .limit(4)

  if (error) {
    console.error("Supabase getRecommendedProducts error:", error.message)
    return []
  }

  return data ?? []
}
