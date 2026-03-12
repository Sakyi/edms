import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";

const slides = [
  {
    type: "video",
    url: "https://www.pexels.com/download/video/8499683/",
    label: "Welcome to Montessori",
    title: "Nurturing Young Minds for a Brighter Future",
    sub: "Experience the Montessori difference — where every child is valued, inspired, and empowered.",
    primaryBtn: "Enroll Now",
    secondaryBtn: "Take a Tour",
  },
  {
    type: "image",
    url: "/edmscaru3.jpg",
    label: "Our Celebration",
    title: "A Community of Growth and Excellence",
    sub: "Our curriculum is designed to inspire curiosity, independence, and a lifelong love of learning.",
    primaryBtn: "Learn More",
    secondaryBtn: "Meet Our Team",
  },
  {
    type: "image",
    url: "/edmscaru.jpg",
    label: "Our Community",
    title: "A Community of Growth and Excellence",
    sub: "Our curriculum is designed to inspire curiosity, independence, and a lifelong love of learning.",
    primaryBtn: "Learn More",
    secondaryBtn: "Meet Our Team",
  },
  {
    type: "image",
    url: "/edmscaru2.jpg",
    label: "Admissions 2026/2027",
    title: "Enrollment Now Open for 2026/2027",
    sub: "Join our family and give your child the very best start in life. Limited spots available.",
    primaryBtn: "Apply Today",
    secondaryBtn: "View Requirements",
  },
];

const DURATION = 7000; // 7 seconds per slide

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Progress Bar Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        goTo(current + 1);
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <div
      id="home"
      className="relative w-full h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden bg-slate-950 font-sans"
    >
      {/* Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-[#4A60EF] z-50 transition-none"
        style={{ width: `${progress}%` }}
      />

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Media Layer */}
          <div className="absolute inset-0 z-0">
            {slides[current].type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
                src={slides[current].url}
              />
            ) : (
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 10, ease: "linear" }}
                src={slides[current].url}
                alt={slides[current].title}
                className="w-full h-full object-cover"
              />
            )}
            {/* The Specific Gradient Overlay Requested (Bottom to Top) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-10" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 px-6 text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
                {slides[current].label}
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                {slides[current].title}
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                {slides[current].sub}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-[#4A60EF] hover:bg-[#ed5ab0] text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2 group">
                  {slides[current].primaryBtn}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl transition-all">
                  {slides[current].secondaryBtn}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 md:px-10 pointer-events-none">
        <button
          onClick={() => goTo(current - 1)}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#4A60EF] transition-all pointer-events-auto backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#4A60EF] transition-all pointer-events-auto backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i
                ? "w-10 bg-[#4A60EF]"
                : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
