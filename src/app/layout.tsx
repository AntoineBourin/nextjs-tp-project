import type { Metadata } from "next";
import Link from "next/link";
import FavoritesLink from "@/components/FavoritesLink";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Boutique",
  description: "TP Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FavoritesProvider>
          <header className="border-b">
            <nav className="mx-auto flex max-w-4xl gap-4 p-4">
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
              <Link href="/about" className="hover:underline">
                À propos
              </Link>
              <FavoritesLink />
              <Link href="/style-module" className="hover:underline">
                Style module
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-4xl p-4">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
