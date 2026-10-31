import FavoritesList from "@/components/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Favoris</h1>
      <FavoritesList />
    </div>
  );
}
