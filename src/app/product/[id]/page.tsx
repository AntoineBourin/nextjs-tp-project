import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import type { Product } from "@/lib/mocked/products";

export default async function ProductPage({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) notFound();

  const product: Product = await res.json();

  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="text-sm hover:underline">
        ← Retour
      </Link>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex flex-wrap gap-2">
        {product.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${product.title} ${i + 1}`}
            width={240}
            height={240}
            className="h-48 w-48 rounded border object-contain"
          />
        ))}
      </div>
      <p className="text-sm text-zinc-600">
        {product.brand} · {product.category}
      </p>
      <p>{product.description}</p>
      <p className="font-semibold">{product.price} €</p>
      <div>
        <FavoriteButton
          product={{
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
          }}
        />
      </div>
      <p className="text-sm">
        Note : {product.rating}/5 · Stock : {product.stock}
      </p>
    </div>
  );
}
