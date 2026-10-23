import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Global Industries | Industrial Construction & Services",
    template: "%s | Global Industries",
  },
  description:
    "Industrial construction, mechanical work, fabrication, and facility maintenance. A coordinated approach from early planning to final handover.",
  openGraph: {
    title: "Global Industries",
    description: "Industrial work. Built on trust.",
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: "Global Industries logo",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
  icons: { icon: "/brand/favicon.ico", apple: "/brand/icon.png" },
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
