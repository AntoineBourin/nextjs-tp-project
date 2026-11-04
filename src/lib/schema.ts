import { z } from "zod";

export const orderSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "Min length is 2"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^\S+@\S+\.\S+$/, "Invalid email"),
  lastName: z
    .string()
    .min(1, "First name is required")
    .min(2, "Min length is 2"),
});

export type OrderForm = z.infer<typeof orderSchema>;
