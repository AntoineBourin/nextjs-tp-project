"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setPending(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      setError(data.error ?? "Erreur");
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs flex-col gap-3">
      <input
        name="username"
        placeholder="Nom d'utilisateur"
        required
        className="rounded border px-3 py-1"
      />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        required
        className="rounded border px-3 py-1"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded border px-3 py-1"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
