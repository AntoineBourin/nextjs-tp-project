"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleClick() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded border px-3 py-1"
    >
      Se déconnecter
    </button>
  );
}
