import React from "react";
import Navbar from "../layout/Navbarddd";
import HeroCarousel from "./HeroCarousel";
import Programs from "./Programs";
import AboutSection from "./AboutUs";
import TeachersSection from "./TeachersSection";
import ContactSection from "./ContactUs";
import Footer from "../layout/Footer";
import Classes from "./Classes";
import Testimonials from "./Testimonials";
import FAQ from "./Faq";
import WelcomeSection from "./Welcome";
import Gallery from "./Gallery";
import MeetTheTeam from "./MeetTheTeam";

const HomePage = () => {
  return (
    <div className="min-h-screen pb-[100vh]">
      <Navbar />
      <main>
        <HeroCarousel />
        <WelcomeSection />
        <AboutSection />
        <Classes />
        <Programs />
        <TeachersSection />
        <Gallery />
        <MeetTheTeam />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
