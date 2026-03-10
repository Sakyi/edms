import React from "react";
import Navbar from "../layout/Navbarddd";
import HeroCarousel from "./HeroCarousel";
import About from "./About";
import Programs from "./Programs";
import AboutSection from "./AboutUs";
import TeachersSection from "./TeachersSection";
import ContactSection from "./ContactUs";
import Footer from "../layout/Footer";
import Classes from "./Classes";

const HomePage = () => {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Navbar />
      <main>
        <HeroCarousel />
        <About />
        <AboutSection />
        <Classes />
        <Programs />
        <TeachersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
