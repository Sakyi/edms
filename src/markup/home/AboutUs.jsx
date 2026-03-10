import React from "react";
import { CheckCircle2, Target, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const steps = [
    {
      title: "Discovery & Play",
      desc: "Focusing on sensory exploration where children identify their interests through guided play.",
      icon: <Heart className="text-[#ed5ab0]" size={24} />,
    },
    {
      title: "Skill Development",
      desc: "Introducing structured subjects like Math, Literacy, and Science through hands-on Montessori tools.",
      icon: <Target className="text-[#4A60EF]" size={24} />,
    },
    {
      title: "Mastery & Confidence",
      desc: "Students apply their knowledge to real-world projects, building leadership and independence.",
      icon: <Award className="text-orange-500" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                alt="Children Learning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-3xl shadow-xl hidden md:block border-b-4 border-[#4A60EF]">
              <div className="text-5xl font-black text-[#4A60EF]">25+</div>
              <div className="text-slate-600 font-bold uppercase tracking-tighter text-sm">
                Years of Educational
                <br />
                Excellence
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ed5ab0]/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#4A60EF] font-bold uppercase tracking-widest text-sm"
            >
              About Our Academy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight"
            >
              A Modern Approach to{" "}
              <span className="text-[#ed5ab0]">Traditional</span> Values
            </motion.h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Edlys Montessori School provides a nurturing environment where
              children are encouraged to explore, create, and grow at their own
              pace. Our philosophy is rooted in the belief that every child is a
              natural learner.
            </p>

            {/* The 3-Step Program List */}
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 leading-snug">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <button className="bg-[#4A60EF] hover:bg-[#ed5ab0] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg">
                Read Our Story
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold text-slate-700">
                  Certified Montessori Faculty
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
