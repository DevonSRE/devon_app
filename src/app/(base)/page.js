// import Image from "next/image";

import Hero from "@/features/homepage/components/hero";
import AboutUs from "@/features/homepage/components/about";
import Solutions from "@/features/homepage/components/solutions";
import Projects from "@/features/homepage/components/project";
import Success from "@/features/homepage/components/success";
import ContactUs from "@/features/homepage/components/contact-us";
import Footer from "@/features/homepage/components/footer";



export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <AboutUs />
        <Solutions />
        <Projects />
        <Success />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
