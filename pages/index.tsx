import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import TechnicalSkills from "@/Components/TechnicalSkills";
import Testimonial from "@/Components/Testimonial";
import BacToTopButton from "@/Components/BacToTopButton";
import WhatsAppButton from "@/Components/WhatsAppButton";
import ClickEffect from "@/Components/ClickEffect";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 100,
      delay: 0,
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Head>
        <title>GDACTECH — Arsene Demenou | Fullstack Developer & Odoo Specialist</title>
      </Head>

      <div className="overflow-x-hidden">
        {/* Navigation */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/* Hero */}
        <Hero />

        <div className="relative z-[30]">
          {/* About */}
          <About />

          {/* Services */}
          <Services />

          {/* Professional Experience */}
          <Skills />

          {/* Technical Skills */}
          <TechnicalSkills />

          {/* Projects */}
          <Projects />

          {/* Testimonials */}
          <Testimonial />

          {/* Contact */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>

        {/* Back to top */}
        <BacToTopButton />

        {/* WhatsApp Quick Contact */}
        <WhatsAppButton />

        {/* Whirlwind Mouse Click Effect */}
        <ClickEffect />
      </div>
    </>
  );
};

export default HomePage;
