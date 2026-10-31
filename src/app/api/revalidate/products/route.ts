import { revalidateTag } from "next/cache";

export async function POST() {
  // Invalide tous les fetch taggés "products" (liste + pages produit).
  revalidateTag("products", { expire: 0 });

  return Response.json({ revalidated: true, target: "products" });
}
