import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { orderSchema } from "@/lib/schemas/order";

export async function GET() {
  const orders = await prisma.order.findMany();

  return Response.json(orders);
}

export async function POST(request: Request) {
  const result = orderSchema.safeParse(await request.json());

  if (!result.success) {
    return Response.json(
      { errors: z.flattenError(result.error).fieldErrors },
      { status: 400 },
    );
  }

  const order = await prisma.order.create({ data: result.data });

  return Response.json(order, { status: 201 });
}
