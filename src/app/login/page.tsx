import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export default async function LoginPage() {
  const cookieStore = await cookies();

  if (cookieStore.has("isAdmin")) redirect("/admin");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Connexion</h1>
      <LoginForm />
    </div>
  );
}
