import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  ShieldCheck,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Sample Accreditation Data
  const ACCREDITATIONS = [
    {
      id: 1,
      name: "American Montessori Society",
      logo: "https://amshq.org/wp-content/uploads/2025/03/AMS-Logo.webp",
    },
    {
      id: 2,
      name: "Cognia Accredited",
      logo: "https://cdn.edmentum.com/assets/photo/tfs/overview/_1200x630_crop_center-center_82_none/Cognia-logo.png?mtime=1700187584",
    },
    {
      id: 3,
      name: "STEM Certified",
      logo: "https://i0.wp.com/sg.nullspace.co/wp-content/uploads/STEM.org-Accredited-Educational-Experience.png?fit=2000%2C884&ssl=1",
    },
    {
      id: 4,
      name: "International Baccalaureate",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPDnBCEac3WMoV0S92YmVfqLPDm8bmcE28Q&s",
    },
  ];

  return (
    <footer className="bg-white">
      {/* --- Accreditation Bar --- */}
      <div className="border-y border-slate-100 py-10 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-slate-400">
              <ShieldCheck size={28} className="text-[#4A60EF]" />
              <span className="font-bold uppercase tracking-widest text-xs">
                Our Accreditations
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {ACCREDITATIONS.map((brand) => (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 md:h-10 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: School Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/edmslogo.png"
                  alt="Edlys Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-black text-2xl text-[#4A60EF] tracking-tighter">
                    EDLYS
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Montessori School
                  </span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Empowering children to become independent, creative, and
                confident lifelong learners through the Montessori method.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-[#4A60EF] hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Home", "About", "Programs", "Teachers", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-slate-500 hover:text-[#ed5ab0] font-semibold transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A60EF] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">
                Campus
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 text-slate-500">
                  <MapPin className="text-[#4A60EF] shrink-0" size={20} />
                  <span>
                    6701 Democracy Blvd,
                    <br />
                    Bethesda, MD 20817, USA
                  </span>
                </li>
                <li className="flex gap-4 text-slate-500 font-bold">
                  <Phone className="text-[#4A60EF] shrink-0" size={20} />
                  <span>+1 (123) 456-7890</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter/CTA */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <h4 className="font-bold text-xl mb-4 relative z-10">
                Visit Our Campus
              </h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10">
                We host open house tours every Wednesday at 10:00 AM.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#ed5ab0] py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all relative z-10"
              >
                Book a Tour
              </button>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#4A60EF]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Links & Branding --- */}
      <div className="border-t border-white/5 py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#4A60EF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                E
              </div>
              <div>
                <h3 className="text-white font-black text-2xl tracking-tighter">
                  EDLYS <span className="text-[#4A60EF]">MONTESSORI</span>
                </h3>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                  Nurturing curiosity since 1998
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#4A60EF] hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Copyright --- */}
      <div className="bg-slate-50 py-6 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} Edlys Montessori School. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-[#4A60EF] font-bold text-sm uppercase tracking-widest hover:text-[#ed5ab0] transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
