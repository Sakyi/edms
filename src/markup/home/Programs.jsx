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

const PROGRAMS = [
  {
    id: "p1",
    title: "Montessori Preschool",
    age: "2 - 4 Years",
    desc: "Focusing on sensory-based learning and social development in a nurturing environment.",
    icon: <PaletteIcon className="text-[#ed5ab0]" size={32} />,
    color: "border-[#ed5ab0]/20 hover:bg-[#ed5ab0]/5",
    dot: "bg-[#ed5ab0]",
  },
  {
    id: "p2",
    title: "Elementary School",
    age: "5 - 10 Years",
    desc: "A rigorous curriculum designed to spark curiosity in science, math, and the arts.",
    icon: <Microscope className="text-[#4A60EF]" size={32} />,
    color: "border-[#4A60EF]/20 hover:bg-[#4A60EF]/5",
    dot: "bg-[#4A60EF]",
  },
  {
    id: "p3",
    title: "STEM & Robotics",
    age: "7+ Years",
    desc: "Hands-on coding and engineering projects to prepare students for a digital future.",
    icon: <BookOpen className="text-orange-500" size={32} />,
    color: "border-orange-500/20 hover:bg-orange-500/5",
    dot: "bg-orange-500",
  },
  {
    id: "p4",
    title: "Arts & Music",
    age: "All Ages",
    desc: "Unleashing creativity through professional training in painting, piano, and dance.",
    icon: <Music className="text-purple-500" size={32} />,
    color: "border-purple-500/20 hover:bg-purple-500/5",
    dot: "bg-purple-500",
  },
  {
    id: "p5",
    title: "Language Hub",
    age: "4+ Years",
    desc: "Immersive bilingual programs focusing on Spanish, French, and Mandarin Chinese.",
    icon: <Globe className="text-emerald-500" size={32} />,
    color: "border-emerald-500/20 hover:bg-emerald-500/5",
    dot: "bg-emerald-500",
  },
  {
    id: "p6",
    title: "Sports Academy",
    age: "5+ Years",
    desc: "Promoting physical health and teamwork through soccer, swimming, and gymnastics.",
    icon: <Trophy className="text-amber-500" size={32} />,
    color: "border-amber-500/20 hover:bg-amber-500/5",
    dot: "bg-amber-500",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border-2 transition-all duration-300 group ${program.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  {program.icon}
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-xs font-bold text-white ${program.dot}`}
                >
                  {program.age}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#4A60EF] transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {program.desc}
              </p>

              <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-slate-400 group-hover:text-[#4A60EF] transition-all">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
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
