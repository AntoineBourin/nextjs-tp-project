"use client";

import { useFavorites, type FavoriteProduct } from "./FavoritesProvider";

export default function FavoriteButton({
  product,
}: {
  product: FavoriteProduct;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(product.id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(product)}
      aria-pressed={active}
      className="rounded border px-2 py-1 text-sm"
    >
      {active ? "♥ Retirer des favoris" : "♡ Ajouter aux favoris"}
    </button>
  );
}
