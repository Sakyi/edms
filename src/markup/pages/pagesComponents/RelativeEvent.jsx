import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const relatedEvents = [
  {
    id: 2,
    title: "Annual STEM & Robotics Exhibition",
    date: "April 22",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600",
  },
  {
    id: 3,
    title: "Piano Recital & Arts Showcase",
    date: "May 10",
    category: "Arts",
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=600",
  },
  {
    id: 4,
    title: "Parent-Teacher Strategy Workshop",
    date: "June 05",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=600",
  },
];

const RelatedEvents = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#ed5ab0] font-black text-[10px] uppercase tracking-[0.3em]">
              Keep Exploring
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              More School <span className="text-[#4A60EF]">Happenings</span>
            </h2>
          </div>
          <Link
            to="/events"
            className="hidden md:flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-[#4A60EF] transition-colors"
          >
            VIEW CALENDAR <ArrowRight size={16} />
          </Link>
        </div>

        {/* Horizontal Slider */}
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory">
          {relatedEvents.map((event) => (
            <div
              key={event.id}
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-[32px] overflow-hidden border border-slate-100 group snap-start"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={event.title}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black text-[#4A60EF] uppercase tracking-widest">
                  {event.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold mb-3 uppercase tracking-wider">
                  <Calendar size={14} className="text-[#ed5ab0]" />
                  {event.date}
                  2026
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-6 group-hover:text-[#4A60EF] transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <Link
                  to="/edms/eventdetails"
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-slate-100 text-slate-900 font-bold text-xs hover:bg-[#4A60EF] hover:text-white hover:border-[#4A60EF] transition-all"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedEvents;
