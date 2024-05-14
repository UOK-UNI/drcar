import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components";
import Footer from "@/components/Layout/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "کلینیک تخصصی دکترواش",
  description:
    "مجموعه دکترواش فعال در زمینه تعمیر و صافکاری بدون رنگ خودروهای خارجی در تهران | تعمیرگاه تخصصی و صافکار حرفه ای",
  openGraph: {
    title: "صفحه اصلی",
    type: "website",
    locale: "fa_IR",
    url: "https://drwashclinic.com/",
    siteName: "دکترواش | صافکاری پولیش و سرامیک",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
