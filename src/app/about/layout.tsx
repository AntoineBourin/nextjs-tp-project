export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <div className="border-solid border-green-200 border-2 m-2">
      <p>Layout about</p>
      {children}
    </div>
  );
}
