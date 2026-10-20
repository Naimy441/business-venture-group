import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Business Venture Group | Industrial Construction & Services",
    template: "%s | Business Venture Group",
  },
  description:
    "Industrial construction, mechanical work, fabrication, and facility maintenance. A coordinated approach from early planning to final handover.",
  openGraph: {
    title: "Business Venture Group",
    description: "Industrial work. Built on trust.",
    type: "website",
    images: [
      {
        url: "/images/refinery.jpg",
        width: 2400,
        height: 1600,
        alt: "Industrial facility",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/bvg.ico", apple: "/brand/bvg-icon.png" },
};
export const viewport: Viewport = { themeColor: "#20231f" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
