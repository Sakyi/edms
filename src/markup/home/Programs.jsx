import React from "react";
import {
  BookOpen,
  Microscope,
  Music,
  Globe,
  Trophy,
  PaletteIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ThemedProgramCard } from "../components/ThemedProgramCard";

const PROGRAMS = [
  {
    id: "p1",
    title: "Montessori Preschool",
    age: "2 - 4 Years",
    desc: "Sensory-based learning and social development in a nurturing environment.",
    icon: <PaletteIcon size={24} />,
    image: "/edms-preschool.jpg",
    // Individual theme colors
    theme: "from-pink-600/90",
    badge: "bg-pink-500",
    btnHover: "hover:bg-pink-500",
    btn: "bg-pink-500",
  },
  {
    id: "p2",
    title: "Primary School",
    age: "5 - 10 Years",
    desc: "Rigorous curriculum designed to spark curiosity in science, math, and arts.",
    icon: <Microscope size={24} />,
    image: "/edms-primary.jpg",
    theme: "from-blue-600/90",
    badge: "bg-blue-500",
    btnHover: "hover:bg-blue-500",
    btn: "bg-blue-500",
  },
  {
    id: "p3",
    title: "STEM & Robotics",
    age: "7+ Years",
    desc: "Hands-on coding and engineering projects for a digital future.",
    icon: <BookOpen size={24} />,
    image:
      "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?q=80&w=600&auto=format&fit=crop",
    theme: "from-orange-600/90",
    badge: "bg-orange-500",
    btnHover: "hover:bg-orange-500",
    btn: "bg-orange-500",
  },
  {
    id: "p4",
    title: "Arts & Music",
    age: "All Ages",
    desc: "Unleashing creativity through professional training in painting and piano.",
    icon: <Music size={24} />,
    image: "/edms-arts.jpg",
    theme: "from-purple-600/90",
    badge: "bg-purple-500",
    btnHover: "hover:bg-purple-500",
    btn: "bg-purple-500",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A60EF]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ed5ab0]/5 rounded-full -ml-32 -mb-32 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#ed5ab0] font-bold tracking-widest uppercase text-sm"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6"
          >
            Academic Programs Built for{" "}
            <span className="text-[#4A60EF]">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Our holistic approach ensures that children don't just learn
            subjects, but develop the critical thinking skills needed for a
            lifetime of growth.
          </motion.p>
        </div>

        {/* Programs Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROGRAMS.map((program, index) => (
            <ThemedProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[40px] bg-slate-900 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Want to see our classes in action?
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
              Book a free campus tour and meet our dedicated faculty members
              this week.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-[#ed5ab0] hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
              SCHEDULE A TOUR
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[20px] border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
