import React from "react";
import { motion } from "framer-motion";
import { Users, Baby, DollarSign, Clock, ArrowRight } from "lucide-react";

// --- INTEGRATED SAMPLE DATA ---
const CLASSES_DATA = [
  {
    id: 1,
    title: "Toddler Discovery",
    images: "/edmscaru3.jpg",
    age: "2 - 3",
    size: "12 - 15",
    fee: "$1200",
    time: "08:30 am - 11:30 am",
    description:
      "A gentle introduction to social interaction and sensory exploration for our youngest learners. A gentle introduction to social interaction and sensory exploration for our youngest learners.",
  },
  {
    id: 2,
    title: "Primary Montessori",
    images: "/edmscaru5.jpg",
    age: "3 - 6",
    size: "20 - 25",
    fee: "$1500",
    time: "08:00 am - 01:00 pm",
    description:
      "Focusing on the 'Absorbent Mind,' children engage with math, language, and practical life materials.",
  },
  {
    id: 3,
    title: "Lower Elementary",
    images: "/edmscaru6.jpg",
    age: "6 - 9",
    size: "15 - 20",
    fee: "$1800",
    time: "08:00 am - 03:00 pm",
    description:
      "Moving from concrete to abstract thinking through collaborative projects and advanced research.",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#4A60EF"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            stroke="#ed5ab0"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ed5ab0] font-bold tracking-widest uppercase text-sm"
          >
            Our Learning Environments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6"
          >
            Explore Our <span className="text-[#4A60EF]">Active Classes</span>
          </motion.h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We maintain an excellent teacher-to-child ratio to ensure that each
            child receives the individualized attention they need to flourish.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CLASSES_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              {/* Media Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.images}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Time Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-bold">
                  <Clock size={16} className="text-[#ed5ab0]" />
                  {item.time}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#4A60EF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                    <Users size={20} className="mx-auto mb-1 text-[#4A60EF]" />
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Size
                    </span>
                    <span className="block text-sm font-black text-slate-800">
                      {item.size}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                    <Baby size={20} className="mx-auto mb-1 text-green-500" />
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Ages
                    </span>
                    <span className="block text-sm font-black text-slate-800">
                      {item.age}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
                    <DollarSign
                      size={20}
                      className="mx-auto mb-1 text-orange-500"
                    />
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Fee
                    </span>
                    <span className="block text-sm font-black text-slate-800">
                      {item.fee}
                    </span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-[#4A60EF] transition-all group/btn shadow-lg active:scale-95">
                  Enrollment Details
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
