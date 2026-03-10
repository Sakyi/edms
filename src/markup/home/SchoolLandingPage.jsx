import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Clock,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data (Replacing your MenuList and IMAGES constants)
const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Classes", href: "#classes" },
  { label: "Blog", href: "#blog" },
];

const SchoolLandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
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

      {/* --- HEADER / NAV --- */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#4A60EF]">ACADEMY</div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[#4A60EF] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden lg:block bg-[#ed5ab0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4A60EF] transition-all">
            Enroll Now
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Give Your Child the{" "}
              <span className="text-[#4A60EF]">Brightest</span> Future
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Our 3-step developmental program ensures your child masters
              subjects through play, creativity, and professional guidance.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#4A60EF] text-white px-8 py-3 rounded-xl shadow-lg hover:bg-[#3b4ecf] transition-all">
                Learn More
              </button>
              <button className="border-2 border-[#4A60EF] text-[#4A60EF] px-8 py-3 rounded-xl font-semibold">
                View Gallery
              </button>
            </div>
          </motion.div>
          <div className="flex-1 relative">
            <div className="w-full h-80 lg:h-[450px] bg-blue-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT & ACCORDION SECTION --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Do you dream that your child will become intelligent?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The concept of school and pre-school education consists of 3
                programs of development and training in our academy, developed
                in collaboration with the institute of the children's
                university.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Creative Arts",
                  "Science Lab",
                  "Language Hub",
                  "Sports Club",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-semibold text-slate-700"
                  >
                    <div className="w-2 h-2 bg-[#ed5ab0] rounded-full" />{" "}
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Simple FAQ/Accordion component */}
            <div className="lg:w-1/2 w-full space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl p-4 hover:border-[#4A60EF] transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Our Teaching Methodology {i}</h4>
                    <ChevronDown size={20} className="text-[#4A60EF]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CLASSES SECTION --- */}
      <section id="classes" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Classes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            We have an excellent teacher to child ratio at our Kindergarten to
            ensure each child receives the attention they need.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drawing Class",
                age: "3-5 Yrs",
                color: "bg-orange-100",
              },
              {
                title: "Active Learning",
                age: "4-6 Yrs",
                color: "bg-blue-100",
              },
              { title: "Science Group", age: "5-8 Yrs", color: "bg-green-100" },
            ].map((cls, idx) => (
              <div
                key={idx}
                className={`${cls.color} p-8 rounded-3xl text-left hover:scale-105 transition-transform cursor-pointer shadow-sm`}
              >
                <div className="w-12 h-12 bg-white rounded-full mb-4 flex items-center justify-center font-bold text-[#4A60EF]">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{cls.title}</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Age Group: {cls.age}
                </p>
                <button className="text-[#4A60EF] font-bold text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ACADEMY</h3>
            <p className="text-slate-400 max-w-xs">
              Building the foundation of tomorrow's leaders today. Join our
              community of learners.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-slate-400 space-y-2">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white">
                  Our Classes
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white">
                  Recent News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex bg-slate-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-4 py-2 w-full outline-none"
              />
              <button className="bg-[#4A60EF] px-4 py-2">Go</button>
            </div>
          </div>
        </div>
      </footer>

      {/* --- SCROLL TOP BUTTON --- */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#4A60EF] text-white p-3 rounded-full shadow-2xl z-50"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SchoolLandingPage;
