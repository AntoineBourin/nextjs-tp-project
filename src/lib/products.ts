import type { Product } from "@/lib/mocked/products";

export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600, tags: ["products"] },
  });

  return res.ok ? res.json() : null;
}
