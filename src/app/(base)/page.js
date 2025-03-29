// import Image from "next/image";

import Hero from "@/features/homepage/components/hero";
import AboutUs from "@/features/homepage/components/about";
import Solutions from "@/features/homepage/components/solutions";
import Products from "@/features/homepage/components/products";
import OurImpact from "@/features/homepage/components/our-impact";
import ContactUs from "@/features/homepage/components/contact-us";



export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <OurImpact />
      <AboutUs />
      <Products />
      <ContactUs />
    </main>
  );
}
