import { getProduct } from "@/lib/products";

export default async function ProductReviews({
  params,
}: PageProps<"/product/[id]">) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return null;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Avis clients</h2>
      {product.reviews.length === 0 ? (
        <p>Aucun avis pour le moment.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {product.reviews.map((r, i) => (
            <li key={i} className="rounded border p-3">
              <p className="font-semibold">
                {r.reviewerName} · {r.rating}/5
              </p>
              <p>{r.comment}</p>
              <p className="text-xs text-zinc-500">
                {new Date(r.date).toLocaleDateString("fr-FR")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
