import { ProductSchema, type Product } from "@/lib/schemas/product"

export function safeProduct(input: any): Product | null {
  const result = ProductSchema.safeParse(input)

  if (!result.success) return null

  return result.data
}

export function safeProducts(input: any[]): Product[] {
  return input.map(safeProduct).filter(Boolean) as Product[]
}
