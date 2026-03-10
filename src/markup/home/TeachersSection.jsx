import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const TEACHERS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Head of Montessori",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Certified Montessori educator with 12 years of experience in early child development.",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "David Miller",
    role: "STEM Coordinator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in robotics and computer science, dedicated to sparking curiosity in young tech minds.",
    social: { twitter: "#", linkedin: "#", mail: "mailto:david@school.com" },
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Arts & Music Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Acclaimed pianist and painter focusing on unleashing the creative potential in every student.",
    social: { instagram: "#", facebook: "#", mail: "mailto:emily@school.com" },
  },
  {
    id: 4,
    name: "Michael Ross",
    role: "Physical Ed Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in youth athletics and team building through structured sports programs.",
    social: { linkedin: "#", twitter: "#" },
  },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ed5ab0] font-bold uppercase tracking-widest text-sm"
            >
              Our Experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-2"
            >
              Meet Our Dedicated <span className="text-[#4A60EF]">Faculty</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 md:max-w-xs text-lg"
          >
            Our educators are more than teachers—they are mentors, guides, and
            lifelong learners.
          </motion.p>
        </div>

        {/* Teachers Grid/Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEACHERS.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] mb-6 shadow-xl">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A60EF]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    {teacher.social.facebook && (
                      <a
                        href={teacher.social.facebook}
                        className="p-2 bg-white rounded-full text-[#4A60EF] hover:bg-[#ed5ab0] hover:text-white transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {teacher.social.twitter && (
                      <a
                        href={teacher.social.twitter}
                        className="p-2 bg-white rounded-full text-[#4A60EF] hover:bg-[#ed5ab0] hover:text-white transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {teacher.social.instagram && (
                      <a
                        href={teacher.social.instagram}
                        className="p-2 bg-white rounded-full text-[#4A60EF] hover:bg-[#ed5ab0] hover:text-white transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {teacher.social.linkedin && (
                      <a
                        href={teacher.social.linkedin}
                        className="p-2 bg-white rounded-full text-[#4A60EF] hover:bg-[#ed5ab0] hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {teacher.social.mail && (
                      <a
                        href={teacher.social.mail}
                        className="p-2 bg-white rounded-full text-[#4A60EF] hover:bg-[#ed5ab0] hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#4A60EF] transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-[#ed5ab0] font-bold text-sm uppercase tracking-wider mb-3">
                  {teacher.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {teacher.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Bar */}
        <div className="mt-20 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-[#4A60EF] to-[#ed5ab0]"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
