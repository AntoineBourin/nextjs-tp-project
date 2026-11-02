"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { orderSchema, type OrderInput } from "@/lib/schemas/order";

export default function PreOrderForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderInput>({ resolver: zodResolver(orderSchema) });

  async function onSubmit(values: OrderInput) {
    setStatus("idle");

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-sm flex-col gap-3 rounded border p-4"
    >
      <h2 className="text-xl font-bold">Pré-commander</h2>

      <label className="flex flex-col gap-1">
        Prénom
        <input
          {...register("firstName")}
          className="rounded border px-3 py-1"
        />
        {errors.firstName && (
          <span className="text-sm text-red-600">
            {errors.firstName.message}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        Nom
        <input {...register("lastName")} className="rounded border px-3 py-1" />
        {errors.lastName && (
          <span className="text-sm text-red-600">
            {errors.lastName.message}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        Email
        <input {...register("email")} className="rounded border px-3 py-1" />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email.message}</span>
        )}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded border px-3 py-1"
      >
        {isSubmitting ? "Envoi…" : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-700">Pré-commande enregistrée ✓</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Une erreur est survenue.</p>
      )}
    </form>
  );
}
