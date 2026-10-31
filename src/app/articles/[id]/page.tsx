export default async function ArticlePage({
  params,
}: PageProps<"/articles/[id]">) {
  const { id } = await params;
  return (
    <div className="border-solid border-black border-2 m-2 p-2">
      <h1>Article unitaire</h1>
      <p>Article {id}</p>
    </div>
  );
}
