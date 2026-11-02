// Erreur au build si un élément rend cette route dynamique.
export const dynamic = "error";

export default function ProductLayout({
  children,
  details,
  reviews,
}: LayoutProps<"/product/[id]">) {
  return (
    <div className="flex flex-col gap-6">
      {children}
      {details}
      {reviews}
    </div>
  );
}
