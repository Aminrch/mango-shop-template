import { z } from "zod"

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
  slug: z.string(),
  created_at: z.string().optional(),
})

export type Product = z.infer<typeof ProductSchema>
