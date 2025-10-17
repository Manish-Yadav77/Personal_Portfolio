import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Currently active section hides its nav item
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <Hero id="hero" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Experience id="experience" />
      <Certifications id="certifications" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
