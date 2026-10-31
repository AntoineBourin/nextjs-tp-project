"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "./FavoritesProvider";

export default function FavoritesList() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>Aucun favori pour le moment.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {favorites.map((p) => (
        <li key={p.id} className="flex flex-col gap-2 rounded border p-3">
          <Image
            src={p.thumbnail}
            alt={p.title}
            width={200}
            height={200}
            className="h-40 w-full object-contain"
          />
          <Link
            href={`/product/${p.id}`}
            className="font-semibold hover:underline"
          >
            {p.title}
          </Link>
          <p>{p.price} €</p>
          <FavoriteButton product={p} />
        </li>
      ))}
    </ul>
  );
}
