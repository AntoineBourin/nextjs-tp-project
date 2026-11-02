import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import type { Product } from "@/lib/mocked/products";

// Erreur au build si un élément rend cette page dynamique (cookies, headers,
// searchParams, fetch no-store…).
export const dynamic = "error";

export async function generateStaticParams() {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones",
    { cache: "force-cache" },
  );
  const { products }: { products: Product[] } = await res.json();

  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {};
  }

  return { title: product.title, description: product.description };
}

// Le contenu est rendu par les routes parallèles @details et @reviews,
// affichées dans layout.tsx. Cette page ne rend que le slot implicite children.
export default function ProductPage() {
  return null;
}
