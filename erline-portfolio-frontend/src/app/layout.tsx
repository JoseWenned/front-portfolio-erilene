import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.scss";
import { Header } from "@/components/layout/Header/Header.component";
import { Footer } from "@/components/layout/Footer/Footer.component";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio Erline",
  description: "Portfólio profissional de Erline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}