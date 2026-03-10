import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    content:
      "Edlys has been a second home for my daughter. The Montessori method really helped her develop independence that I didn't see in her traditional preschool. The teachers are incredibly patient.",
    author: "Jessica Williams",
    role: "Parent of 4yr old",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The STEM programs here are top-notch. My son is already talking about coding and simple physics. It's amazing to see such complex concepts being taught so effectively to young children.",
    author: "Mark Thompson",
    role: "Parent of 6yr old",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Choosing Edlys was the best decision for our family. The balance between academic rigor and creative play is perfect. We've seen a massive boost in our child's confidence and social skills.",
    author: "Sarah El-Amin",
    role: "Parent of 3yr old",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 4,
    content:
      "I am amazed at how the mixed-age classrooms work. My older son has learned so much about leadership and empathy by helping the younger students with their daily tasks.",
    author: "David Vance",
    role: "Parent of 5yr old",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-black text-[#4A60EF]">
          “
        </div>
        <div className="absolute bottom-10 right-10 text-9xl font-black text-[#ed5ab0]">
          ”
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#4A60EF] font-bold uppercase tracking-widest text-sm"
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
            What Our <span className="text-[#ed5ab0]">Parents</span> Say
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="testimonial-swiper !pb-16"
        >
          {TESTIMONIALS_DATA.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-full flex flex-col justify-between">
                {/* Speech Bubble Card */}
                <div className="bg-slate-50 p-8 rounded-[40px] shadow-sm hover:shadow-md transition-all duration-500 mb-8 border border-slate-100 relative">
                  <div className="absolute -bottom-4 left-10 w-8 h-8 bg-slate-50 rotate-45 border-r border-b border-slate-100" />

                  <Quote className="text-[#ed5ab0] mb-4 opacity-20" size={32} />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 ml-6">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 leading-none mb-1 text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#4A60EF] text-[10px] font-bold uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
                .testimonial-swiper .swiper-pagination-bullet-active {
                    background: #ed5ab0 !important;
                }
                .testimonial-swiper .swiper-slide {
                    height: auto;
                }
            `}</style>
    </section>
  );
};

export default Testimonials;
