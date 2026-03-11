import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageTitle = ({ motherMenu, activeMenu, bgImage }) => {
  // Fallback sample image: A clean, modern Montessori classroom setting
  const bannerImg =
    bgImage ||
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600";

  return (
    <div className="relative py-24 md:py-36 overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like positioning */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Multi-layered Overlays for Text Legibility */}
      <div className="absolute inset-0 bg-slate-900/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40 z-[2]" />

      {/* Accent Glow */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#4A60EF]/20 rounded-full blur-[120px] z-[2]" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A60EF] rounded-lg mb-6 shadow-lg shadow-blue-900/20">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {motherMenu}
            </span>
          </div>

          {/* Title with subtle text-shadow for depth */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
            {activeMenu}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-3">
            <Link
              to="/"
              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ed5ab0] hover:border-[#ed5ab0] transition-all duration-300"
            >
              <Home size={18} />
            </Link>

            <ChevronRight size={16} className="text-white/40" />

            <span className="text-sm font-bold text-white/60 uppercase tracking-widest">
              Home
            </span>

            <ChevronRight size={16} className="text-white/40" />

            <span className="text-sm font-bold text-[#4A60EF] uppercase tracking-widest">
              {activeMenu}
            </span>
          </nav>
        </div>
      </div>

      {/* Aesthetic Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default PageTitle;
