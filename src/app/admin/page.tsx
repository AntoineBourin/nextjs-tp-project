import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminPage() {
  const cookieStore = await cookies();

  if (!cookieStore.has("isAdmin")) redirect("/access-denied");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Administration</h1>
      <p>Bienvenue dans l&apos;espace admin.</p>
      <LogoutButton />
    </div>
  );
}
