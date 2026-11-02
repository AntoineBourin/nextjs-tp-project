import { cookies } from "next/headers";

// Identifiants en dur : uniquement pour l'exercice.
const USERNAME = "admin";
const PASSWORD = "admin";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username !== USERNAME || password !== PASSWORD) {
    return Response.json({ error: "Identifiants invalides" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("isAdmin", "true", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60,
  });

  return Response.json({ success: true });
}
