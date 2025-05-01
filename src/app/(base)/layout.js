import Navbar from "@/features/homepage/components/navbar";
import Footer from "@/features/homepage/components/footer";
import { Announcement } from "@/features/homepage/components/announcement";

export const metadata = {
  title: "Devon",
  description: "Empowering Change Through Innovative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <main className={`relative font-lexend antialiased`}>
      <div className="min-h-16 md:min-h-fit lg:min-h-[72px]">
        <Navbar />
      </div>

      {children}

      <Footer />

      <Announcement />
    </main>
  );
}
