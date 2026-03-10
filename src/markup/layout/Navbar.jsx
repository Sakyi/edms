import React, { useEffect, useState, useMemo } from "react"; // Added useMemo
import { Clock, Code, MapPin, Menu, Phone, X } from "lucide-react";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";
import { NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize IDs so the hook doesn't re-run unnecessarily
  const navIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeSection = useScrollSpy(navIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- TOP BAR --- */}
      <div className="hidden lg:block bg-[#4A60EF] text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between px-4">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> 001 1234 6789
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> 6701 Democracy Blvd, USA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> Opening Time: 9:30am - 5:30pm
          </div>
        </div>
      </div>
      <nav
        className={`sticky top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300
      ${isScrolled ? "bg-white/80 backdrop-blur shadow-md py-5" : "bg-white/90 backdrop-blur-md py-4"}`}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div className="max-w-7xl mx-auto px-5">
          {" "}
          {/* Changed max-w-330 to standard tailwind or your custom value */}
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                {/* Replace src with your edmslogo.png path */}
                <img
                  src="/edmslogo.png"
                  alt="Edlys Montessori School Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col leading-tight text-black">
                <span className="font-heading font-extrabold text-xl md:text-2xl text-edlys-navy tracking-tight">
                  EDLYS
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-edlys-navy uppercase tracking-[0.2em]">
                  Montessori School
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-base transition-colors duration-300
                ${activeSection === link.id ? "text-primary font-semibold" : "text-black/70 font-medium hover:text-primary"}
                `}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="hidden lg:block bg-[#ed5ab0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4A60EF] shadow-2xl text-base hover:opacity-90 transition-all"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:text-primary transition-colors focus:outline-none"
              aria-label="menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-auto opacity-90" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3 shadow-lg">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-1 rounded-lg font-medium transition-all duration-300
              ${activeSection === link.id ? "text-primary bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}
              `}
              >
                {link.label}
              </button>
            ))}
            <button
              className="w-full bg-white px-7 py-3.5 text-black font-medium text-base rounded-[17px] hover:bg-white/90 transition-all duration-300 mt-2"
              onClick={() => handleNavClick("contact")} // Fixed variable scope issue
            >
              Enroll Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
