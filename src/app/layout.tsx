import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizqi Akbar | Junior Web Developer",
  description:
    "Junior Web Developer specializing in Laravel, React, Next.js and Vue. Building modern web applications with clean architecture.",
  keywords: [
    "Rizqi Akbar",
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "Vue",
    "Portfolio",
  ],
  authors: [{ name: "Rizqi Akbar" }],
  openGraph: {
    title: "Rizqi Akbar | Junior Web Developer",
    description:
      "Junior Web Developer specializing in Laravel, React, Next.js and Vue.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizqi Akbar | Junior Web Developer",
    description:
      "Junior Web Developer specializing in Laravel, React, Next.js and Vue.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#09090B] font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
