import React from "react";
import Hero from "./hero/page";
import About from "./about/page";
import Solutions from "./solutions/page";
import Projects from "./projects/page";
import Success from "./success/page";
import ContactUs from "./contact/page";
import Footer from "../footer/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <Success />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
