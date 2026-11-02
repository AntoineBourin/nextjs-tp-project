import LogoutButton from "@/components/LogoutButton";

// L'accès est protégé par le proxy (src/proxy.ts).
export default function AdminPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Administration</h1>
      <p>Bienvenue dans l&apos;espace admin.</p>
      <LogoutButton />
    </div>
  );
}
