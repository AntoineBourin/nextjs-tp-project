import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/mocked/products";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { query } = await searchParams;
  const q = (Array.isArray(query) ? query[0] : query)?.trim() ?? "";

  const res = await fetch("https://dummyjson.com/products/category/smartphones");
  const { products }: { products: Product[] } = await res.json();

  const filtered = q
    ? products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()))
    : products;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Produits</h1>

      <form action="/" className="flex gap-2">
        <input
          type="search"
          name="query"
          defaultValue={q}
          placeholder="Rechercher un produit…"
          className="flex-1 rounded border px-3 py-1"
        />
        <button type="submit" className="rounded border px-3 py-1">
          Rechercher
        </button>
      </form>

      {filtered.length === 0 ? (
        <p>Aucun produit ne correspond à « {q} ».</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id} className="rounded border p-3">
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={200}
                height={200}
                className="mb-2 h-40 w-full object-contain"
              />
              <Link href={`/product/${p.id}`} className="font-semibold hover:underline">
                {p.title}
              </Link>
              <p className="text-sm text-zinc-600">{p.brand}</p>
              <p>{p.price} €</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
