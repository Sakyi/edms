import React from "react";
import Navbar from "../layout/Navbarddd";
import HeroCarousel from "./HeroCarousel";
import About from "./About";
import Programs from "./Programs";
import AboutSection from "./AboutUs";
import TeachersSection from "./TeachersSection";
import ContactSection from "./ContactUs";

const HomePage = () => {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Navbar />
      <main>
        <HeroCarousel />
        <About />
        <AboutSection />
        <Programs />
        <TeachersSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
