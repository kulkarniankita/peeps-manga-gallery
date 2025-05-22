import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manga Gallery",
  description: "Manga Gallery - A collection of manga peeps images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gradient-to-r from-pink-900 to-pink-400 text-white py-4 px-12">
          <h1 className="text-2xl font-bold">Manga Peeps Gallery</h1>
        </header>
        <div className="max-w-7xl mx-auto pt-12 lg:pt-16">{children}</div>
      </body>
    </html>
  );
}
