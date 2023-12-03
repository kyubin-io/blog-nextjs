import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyubin's blog",
  description: "Welcome to my blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="pl-8 pr-8 min-h-screen">
        <header className="flex justify-between h-16">
          <div>KYUBIN's Blog</div>
          <nav>
            <Link className="ml-4" href="/home">
              Home
            </Link>
            <Link className="ml-4" href="/about">
              About
            </Link>
            <Link className="ml-4" href="/posts">
              Posts
            </Link>
            <Link className="ml-4" href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className="flex justify-center h-8 sticky bottom-0">
          All Right Reserved.
        </footer>
      </body>
    </html>
  );
}
