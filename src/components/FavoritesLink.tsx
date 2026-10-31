"use client";

import Link from "next/link";
import { useFavorites } from "./FavoritesProvider";

export default function FavoritesLink() {
  const { favorites } = useFavorites();

  return (
    <Link href="/favorites" className="hover:underline">
      Favoris ({favorites.length})
    </Link>
  );
}
