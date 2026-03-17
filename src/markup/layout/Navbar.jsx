import React, { useEffect, useState, useMemo } from "react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

// Matching your project's NAV_LINKS structure
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "classes", label: "Classes" },
  { id: "programs", label: "Programs" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook to track which section is currently in view
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
      {/* --- TOP BAR (Branding Colors) --- */}
      <div className="hidden lg:block bg-[#4A60EF] text-white py-2 text-sm border-b border-white/10">
        <div className="container mx-auto flex justify-between px-4">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 opacity-90">
              <Phone size={14} />
              +233 24 492 1755 / +233 26 557 7950
            </span>
            <span className="flex items-center gap-2 opacity-90">
              <MapPin size={14} />
              North Legon (Kofi Annan Avenue), Accra-Ghana
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-90">
            <Clock size={14} /> Mon - Fri: 6:30am - 5:30pm
          </div>
        </div>
      </div>
      <nav
        className={`sticky top-0 left-0 right-0 z-1000 w-full transition-all duration-300
        ${isScrolled ? "bg-white/90 backdrop-blur shadow-md py-3" : "bg-white py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-[#4A60EF]/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300" />
                <img
                  src="/edmslogo.png"
                  alt="Logo"
                  className="relative z-10 object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-2xl text-[#4A60EF] tracking-tight">
                  EDLYS
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  Montessori
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[15px] transition-all duration-300 relative group
                  ${activeSection === link.id ? "text-[#4A60EF] font-bold" : "text-slate-600 font-semibold hover:text-[#4A60EF]"}
                `}
                >
                  {link.label}
                  {/* Underline animation for active/hover */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#4A60EF] transition-all duration-300 
                    ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="hidden md:block bg-[#ed5ab0] hover:bg-[#4A60EF] text-white px-7 py-2.5 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Enroll Now
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-800"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden absolute w-full left-0 bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden 
          ${isMenuOpen ? "max-h-[400px] border-t" : "max-h-0"}`}
        >
          <div className="px-6 py-8 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left text-lg py-2 transition-colors
                ${activeSection === link.id ? "text-[#4A60EF] font-bold" : "text-slate-600 font-medium"}`}
              >
                {link.label}
              </button>
            ))}
            <button
              className="w-full bg-[#4A60EF] py-4 text-white font-bold rounded-xl shadow-lg"
              onClick={() => handleNavClick("contact")}
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
