import { Montserrat } from "next/font/google";
import { MDXLayout } from "@/components/markdown/mdx-layout";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function PolicyLayout({ children }) {
  return (
    <main
      className={`${montserrat.className} antialiased min-w-full min-h-dvh w-full bg-black text-white`}
    >
      <MDXLayout>{children}</MDXLayout>
    </main>
  );
}
