import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[3000] group"
          aria-label="Scroll to top"
        >
          {/* Pulsing Background Aura */}
          <div className="absolute inset-0 bg-[#4A60EF] rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />

          {/* The Button Body */}
          <div className="relative w-14 h-14 bg-[#4A60EF] text-white rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-md group-hover:bg-[#ed5ab0] transition-colors duration-300">
            <ChevronUp
              size={28}
              strokeWidth={3}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
