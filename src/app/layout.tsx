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
  metadataBase: new URL("https://devontechnologies.com"),
  title: {
    default: "Devon Technologies",
    template: "%s | Devon Technologies",
  },
  description:
    "Devon Technologies empowers access to justice through innovative legal solutions — JudicAI, DocketMaster, MeetSession, and Budeshi.",
  keywords: [
    "legal tech",
    "legal technology",
    "case management",
    "virtual hearings",
    "JudicAI",
    "DocketMaster",
    "MeetSession",
    "access to justice",
    "law firm software",
  ],
  openGraph: {
    title: "Devon Technologies",
    description:
      "Empowering access to justice through innovative legal solutions.",
    url: "https://devontechnologies.com",
    siteName: "Devon Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devon Technologies",
    description:
      "Empowering access to justice through innovative legal solutions.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body className={`${lexend.variable} ${geistSans.variable} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}
