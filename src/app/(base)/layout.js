import Navbar from "@/features/homepage/components/navbar";
import Footer from "@/features/homepage/components/footer";

export const metadata = {
  title: "Devon",
  description: "Empowering Change Through Innovative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <main className={`font-lexend antialiased`}>
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
