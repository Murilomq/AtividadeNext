import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Catálogo Next App",
  description: "Loja virtual com produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
