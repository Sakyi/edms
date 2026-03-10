import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Classrooms",
  "Cadet",
  "Girl-Guard",
  "Piano Lessons",
  "Ballet",
  "STEM & Robotics",
  "Others",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Classrooms",
    title: "Montessori Workspace",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
  },
  {
    id: 2,
    category: "STEM & Robotics",
    title: "Future Engineers",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
  },
  {
    id: 3,
    category: "Ballet",
    title: "Grace & Movement",
    img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800",
  },
  {
    id: 4,
    category: "Piano Lessons",
    title: "Musical Foundations",
    img: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800",
  },
  {
    id: 5,
    category: "Cadet",
    title: "Leadership Training",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
  },
  {
    id: 6,
    category: "Girl-Guard",
    title: "Unity & Discipline",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800",
  },
  {
    id: 7,
    category: "STEM & Robotics",
    title: "Coding Lab",
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800",
  },
  {
    id: 8,
    category: "Others",
    title: "Outdoor Play",
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800",
  },
  {
    id: 9,
    category: "Classrooms",
    title: "Creative Arts",
    img: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=800",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  // Navigation functions for the lightbox
  const navigateLightbox = (direction) => {
    const currentIndex = GALLERY_ITEMS.findIndex(
      (img) => img.id === selectedImage.id
    );
    let nextIndex = currentIndex + direction;
    if (nextIndex >= GALLERY_ITEMS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_ITEMS.length - 1;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header and Filters (Same as before) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-[#4A60EF]/10 rounded-full flex items-center justify-center mb-6">
            <Camera className="text-[#4A60EF]" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our School <span className="text-[#4A60EF]">Moments</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  filter === cat
                    ? "bg-[#4A60EF] text-white shadow-lg"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[350px] overflow-hidden rounded-[32px] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- LIGHTBOX OVERLAY --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X size={40} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-4 md:left-10 text-white/50 hover:text-white p-2 bg-white/5 rounded-full"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-4 md:right-10 text-white/50 hover:text-white p-2 bg-white/5 rounded-full"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-5xl w-full h-full flex flex-col items-center justify-center"
              >
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="max-h-[70vh] rounded-2xl shadow-2xl object-contain"
                />
                <div className="mt-8 text-center">
                  <span className="text-[#ed5ab0] font-bold uppercase tracking-widest text-sm">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-3xl font-black mt-2">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
