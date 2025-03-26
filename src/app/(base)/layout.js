import Navbar from "@/features/homepage/components/navbar";

export const metadata = {
  title: "Devon",
  description: "Empowering Change Through Innovative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <main className={`antialiased`}>
      <header>
        <Navbar />
      </header>

      {children}
    </main>
  );
}
