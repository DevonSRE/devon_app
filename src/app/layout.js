import { Geist, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { Toaster } from "@/components/ui/sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weigtht: ['300', '400', '500', '700'],
});

export const metadata = {
  title: "Devon",
  description: "Empowering Change Through Innovative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${geistSans.variable} antialiased`}>
        <header>
          <Navbar/>
        </header>
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
