"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderForm, orderSchema } from "@/lib/schema";

export default function Form({ productId }: { productId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (values: OrderForm) => {
    fetch("/api/add-order", {
      method: "POST",
      body: JSON.stringify({ ...values, productId }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-sm flex-col gap-2 rounded border p-4"
    >
      <h2>Pré-commander</h2>
      <input
        {...register("firstName")}
        className="rounded border px-3 py-1"
        placeholder="Votre prénom"
      />
      <p className="text-sm text-red-600">{errors.firstName?.message}</p>

      <input
        {...register("email")}
        className="rounded border px-3 py-1"
        placeholder="Votre email"
      />
      <p className="text-sm text-red-600">{errors.email?.message}</p>

      <input
        {...register("lastName")}
        className="rounded border px-3 py-1"
        placeholder="Votre nom"
      />
      <p className="text-sm text-red-600">{errors.lastName?.message}</p>

      <button
        type="submit"
        className="rounded border px-3 py-1 hover:bg-zinc-100"
      >
        Submit
      </button>
    </form>
  );
}
