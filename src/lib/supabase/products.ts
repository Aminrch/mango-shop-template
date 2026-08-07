import { supabase } from "./client"

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", {
      ascending: false,
    })

  if (error) {
    console.error("getProducts error:", error.message)
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
    console.error("getProductBySlug error:", error.message)
    return null
  }

  return data
}
