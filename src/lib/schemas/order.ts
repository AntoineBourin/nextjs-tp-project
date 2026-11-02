import { z } from "zod";

// Partagé entre le formulaire (client) et la route /api/orders (serveur).
export const orderSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Le prénom doit faire au moins 2 caractères"),
  lastName: z.string().trim().min(2, "Le nom doit faire au moins 2 caractères"),
  email: z.email("Adresse email invalide"),
});

export type OrderInput = z.infer<typeof orderSchema>;
