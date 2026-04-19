import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PescaPeru | Líderes en Pesca Sostenible",
  description:
    "Empresa peruana líder en la recolección de anchoveta y producción de harina y aceite de pescado. Comprometidos con la sostenibilidad y el medio ambiente.",
  keywords:
    "pesca, anchoveta, harina de pescado, aceite de pescado, Peru, sostenibilidad",
  authors: [{ name: "PescaPeru S.A." }],
  openGraph: {
    title: "PescaPeru | Líderes en Pesca Sostenible",
    description:
      "Empresa peruana líder en la recolección de anchoveta y producción de harina y aceite de pescado.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
