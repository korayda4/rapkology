import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Trap & Rap Music Blog",
  icons: {
    icon: "/favicon-rapkology.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${saira.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
