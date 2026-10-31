"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface FavoriteProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface FavoritesContextValue {
  favorites: FavoriteProduct[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (product: FavoriteProduct) => void;
}

const STORAGE_KEY = "favorites";

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored) setFavorites(JSON.parse(stored));
    } catch {}
  }, []);

  function toggleFavorite(product: FavoriteProduct) {
    const isFavoriteProductExisting = favorites.some(
      (f) => f.id === product.id,
    );

    if (isFavoriteProductExisting) {
      const favoritesList = favorites.filter((f) => f.id !== product.id);
      setFavorites(favoritesList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesList));
    } else {
      const favoritesList = [...favorites, product];
      setFavorites(favoritesList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesList));
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite: (id) => favorites.some((f) => f.id === id),
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites doit être utilisé dans un FavoritesProvider");
  }
  return ctx;
}
