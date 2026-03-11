import React from "react";
import { MapPin, Clock, Calendar, Users, Share2, Ticket } from "lucide-react";
import PageTitle from "../layout/PageTitle";
import RelatedEvents from "./pagesComponents/RelativeEvent";

const EventDetails = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Header */}
      <PageTitle
        motherMenu="Community"
        activeMenu="Spring Open House"
        overlayColor="blue"
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600"
      />

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- MAIN CONTENT (Left Column) --- */}
          <div className="lg:w-2/3">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
              className="w-full h-[400px] object-cover rounded-[40px] mb-10 shadow-lg"
              alt="Classroom"
            />

            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                About the Event
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Join us for an immersive morning at Edlys Montessori. This isn't
                just a tour; it's an opportunity to see the Montessori method in
                action. You'll observe how our students engage with "Practical
                Life" materials and develop a natural love for learning.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Guided tours of our Nido and Primary environments",
                  "Q&A session with our AMI-certified Lead Guides",
                  "Overview of our specialized STEM and Arts curriculum",
                  "Refreshments and community meet-and-greet",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-[#4A60EF]/10 flex items-center justify-center shrink-0 text-[#4A60EF] font-bold text-xs">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- STICKY SIDEBAR (Right Column) --- */}
          <div className="lg:w-1/3">
            <aside className="sticky top-24 space-y-6">
              {/* Registration Card */}
              <div className="bg-slate-900 rounded-[40px] p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                {/* Decorative Blur */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ed5ab0]/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#4A60EF] flex items-center justify-center text-white">
                      <Ticket size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest leading-none">
                        Status
                      </p>
                      <p className="text-white font-bold">Registration Open</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <Calendar className="text-[#ed5ab0]" size={20} />
                      <div>
                        <p className="text-white text-sm font-bold">
                          March 15, 2026
                        </p>
                        <p className="text-white/40 text-xs">Sunday Morning</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="text-[#4A60EF]" size={20} />
                      <div>
                        <p className="text-white text-sm font-bold">
                          10:00 AM — 02:00 PM
                        </p>
                        <p className="text-white/40 text-xs">
                          Refreshments provided
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-[#ed5ab0]" size={20} />
                      <div>
                        <p className="text-white text-sm font-bold">
                          Main Campus
                        </p>
                        <p className="text-white/40 text-xs">
                          6701 Democracy Blvd
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#4A60EF] hover:bg-[#ed5ab0] text-white font-black py-5 rounded-2xl transition-all shadow-lg hover:scale-[1.02] active:scale-95">
                    BOOK MY SPOT
                  </button>
                </div>
              </div>

              {/* Secondary Share Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-[30px] p-6 flex items-center justify-between">
                <span className="text-slate-900 font-bold text-sm">
                  Share with a friend
                </span>
                <div className="flex gap-2">
                  <button className="p-3 rounded-xl bg-white text-slate-400 hover:text-[#4A60EF] hover:shadow-md transition-all">
                    <Share2 size={18} />
                  </button>
                  <button className="p-3 rounded-xl bg-white text-slate-400 hover:text-[#4A60EF] hover:shadow-md transition-all">
                    <Users size={18} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <RelatedEvents />
    </div>
  );
};

export default EventDetails;
