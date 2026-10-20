import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Business Venture Group Inc. | Light Industrial Construction",
  description:
    "Business Venture Group Inc. is a premier light industrial construction company delivering excellence through innovation, safety, and unmatched project execution.",
  keywords: [
    "light industrial construction",
    "construction company",
    "industrial services",
    "general contracting",
    "design build",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
