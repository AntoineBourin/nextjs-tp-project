import Image from "next/image";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import { getProduct } from "@/lib/products";

export default async function ProductDetails({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-2">
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
