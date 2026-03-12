import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Award, GraduationCap } from "lucide-react";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TEAM_DATA = [
  {
    id: 1,
    name: "Eleanor Pemberton",
    role: "Head of School",
    specialty: "MA in Montessori Education",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Dedicated to creating an environment where children can direct their own learning paths.",
  },
  {
    id: 2,
    name: "Marcus Sterling",
    role: "Lead STEM Guide",
    specialty: "Robotics & Mathematics",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in translating complex physical concepts into hands-on Montessori materials.",
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "Arts & Music Director",
    specialty: "Classical Piano & Ballet",
    image: "/jessy.png",
    bio: "Bringing the rhythm of Montessori into the creative arts and physical expression.",
  },
  {
    id: 4,
    name: "Julian Chen",
    role: "Primary Lead Guide",
    specialty: "Early Childhood Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in the 'Absorbent Mind' stage, focusing on language and social development.",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Physical Ed Lead",
    specialty: "Child Kinesiology",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Promoting physical confidence and motor skill development through guided play.",
  },
];

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A60EF]/5 rounded-full blur-3xl -mr-20 -mt-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#4A60EF] font-bold uppercase tracking-widest text-sm"
          >
            Our Educators
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
            Meet Our <span className="text-[#ed5ab0]">Mentors</span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="team-swiper !pb-14"
        >
          {TEAM_DATA.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white rounded-[40px] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 h-full">
                {/* Image Container */}
                <div className="relative h-72 rounded-[32px] overflow-hidden mb-6 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#4A60EF]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                    <p className="text-white text-sm font-medium italic">
                      "{member.bio}"
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-[#ed5ab0]" />
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                      {member.specialty}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#4A60EF] font-bold text-sm mb-6">
                    {member.role}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex gap-3">
                      <Mail
                        size={16}
                        className="text-slate-300 hover:text-[#4A60EF] cursor-pointer"
                      />
                      <Linkedin
                        size={16}
                        className="text-slate-300 hover:text-[#4A60EF] cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full">
                      <Award size={12} className="text-amber-500" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase">
                        Certified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
                    .team-swiper .swiper-pagination-bullet-active {
                        background: #4A60EF !important;
                    }
                    .team-swiper .swiper-slide {
                        height: auto;
                    }
                `}</style>
      </div>
    </section>
  );
};

export default MeetTheTeam;
