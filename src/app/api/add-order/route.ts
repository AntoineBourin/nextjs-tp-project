import { orderSchema } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { lastName, firstName, email, productId } = await request.json();
  const validatedFields = orderSchema.safeParse({
    email,
    lastName,
    firstName,
  });

  if (!validatedFields.success) {
    return NextResponse.json({ error: validatedFields.error }, { status: 400 });
  }

  const response = await fetch("https://api.antoinebourin.com/api/orders", {
    method: "POST",
    body: JSON.stringify({ email, lastName, firstName, productId }),
  });
  const order = await response.json();

  return NextResponse.json(order);
}
