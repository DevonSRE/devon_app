import type { Metadata } from "next";
import { Geist, Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  preload: true,
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Devon",
  description: "Empowering Change Through Innovative Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${geistSans.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}
