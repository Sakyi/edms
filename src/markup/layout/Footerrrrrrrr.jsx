import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-slate-900 pt-24 overflow-hidden"
    >
      {/* --- Section 1: Contact & Map Area --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form Card */}
          <div className="relative z-10 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Get in <span className="text-[#ed5ab0]">Touch</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Schedule a visit or ask about our enrollment process.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Parent Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
                />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-400 focus:outline-none focus:border-[#4A60EF] transition-all appearance-none">
                <option>Select Program of Interest</option>
                <option>Toddler (2-3 Years)</option>
                <option>Primary (3-6 Years)</option>
                <option>Elementary (6-9 Years)</option>
              </select>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
              ></textarea>

              <button className="w-full bg-[#4A60EF] hover:bg-[#ed5ab0] text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20">
                SEND INQUIRY <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right: Map & Info */}
          <div className="space-y-8">
            <div className="rounded-[40px] overflow-hidden h-[300px] border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.327506945398!2d-77.13038622405813!3d38.9621532717094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c9388147776d%3A0x66c897f1f3e7906a!2sDemocracy%20Blvd%2C%20Maryland!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#4A60EF]/10 rounded-2xl flex items-center justify-center shrink-0 text-[#4A60EF]">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-slate-400 text-sm">
                    6701 Democracy Blvd, Bethesda, MD
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#ed5ab0]/10 rounded-2xl flex items-center justify-center shrink-0 text-[#ed5ab0]">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Hours</h4>
                  <p className="text-slate-400 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
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

      {/* --- Section 3: Copyright --- */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-bold">
          <p>© {currentYear} EDLYS MONTESSORI SCHOOL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ed5ab0]/10 rounded-full blur-[120px]" />
    </footer>
  );
};

export default Footer;
