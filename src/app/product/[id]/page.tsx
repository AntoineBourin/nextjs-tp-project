import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/mocked/products";

export default async function ProductPage({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === id);

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="text-sm hover:underline">
        ← Retour
      </Link>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-sm text-zinc-600">
        {product.brand} · {product.category}
      </p>
      <p>{product.description}</p>
      <p className="font-semibold">{product.price} €</p>
      <p className="text-sm">
        Note : {product.rating}/5 · Stock : {product.stock}
      </p>
    </div>
  );
}
