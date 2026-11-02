"use client";

export default function ReviewsError({ reset }: { reset: () => void }) {
  return (
    <div className="rounded border border-red-300 p-3">
      <p className="text-red-600">Impossible de charger les avis.</p>
      <button onClick={reset} className="mt-2 rounded border px-3 py-1">
        Réessayer
      </button>
    </div>
  );
}
