import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase/client"
import type { Product } from "../../src/types/product"
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    // ✅ sanitize + type safety
    const safeData: Product[] = (data ?? [])
      .filter((p) => p.slug && p.id && p.title && p.price && p.image)
      .map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        slug: p.slug,
        created_at: p.created_at,
      }))

    return NextResponse.json(safeData)
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    )
  }
}
