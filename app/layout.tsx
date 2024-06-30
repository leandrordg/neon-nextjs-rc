import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Next.js 15 RC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${geistSans.className}`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
