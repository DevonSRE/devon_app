// import Image from "next/image";

import Hero from "./home/hero/page";
import About from "./home/about/page";
import Solutions from "./home/solutions/page";
import Projects from "./home/projects/page";
import Success from "./home/success/page";
import ContactUs from "./home/contact/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <Solutions />
        <Projects />
        <Success />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
