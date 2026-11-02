import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("isAdmin");

  return Response.json({ success: true });
}
