import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">Accès refusé</h1>
      <p>Vous devez être connecté pour accéder à cette page.</p>
      <Link href="/login" className="underline">
        Se connecter
      </Link>
    </div>
  );
}
