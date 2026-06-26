import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import "./globals.css";

// Хоёр фонт хоёулаа Cyrillic subset-ийг тодорхой зааж дуудна (5.2-р хэсэг:
// "Монгол кирилл үсгийг сайн дэмждэг Google Fonts сонгох шаардлагатай").
// Playfair Display, Inter хоёулаа Cyrillic дэмждэг — хэрэв брэндийн өөр serif
// сонговол энэ subset шаардлагыг заавал шалгаарай.
const displayFont = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://temuulenmakeup.mn",
  ),
  title: {
    default: "Temuulen Makeup | Мэргэжлийн гоо сайханч",
    template: "%s | Temuulen Makeup",
  },
  description:
    "Гоёлын болон өдөр тутмын мэйкап үйлчилгээ — Улаанбаатар хотод. Цаг захиалга, сургалт.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="mn" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {/* Mobile дээр доод CTA bar-ын ард текст нуугдахаас сэргийлж padding нэмнэ */}
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
