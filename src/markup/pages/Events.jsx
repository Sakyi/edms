import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  ArrowRight,
  List,
  Grid,
  Filter,
  Check,
  CalendarIcon,
} from "lucide-react";
import Navbar from "../layout/Navbarddd";
import Footer from "../layout/Footer";
import PageTitle from "../layout/PageTitle";

const CATEGORIES = [
  "All",
  "Admission",
  "Academic",
  "Arts",
  "Sports",
  "Community",
];

const schoolEvents = [
  {
    id: 1,
    title: "Spring Open House",
    day: 15,
    month: "MAR",
    location: "Main Hall",
    time: "10AM",
    category: "Admission",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
  },
  {
    id: 2,
    title: "Robotics Exhibition",
    day: 22,
    month: "MAR",
    location: "STEM Lab",
    time: "9AM",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
  },
  {
    id: 3,
    title: "Piano Recital",
    day: 28,
    month: "MAR",
    location: "Arts Wing",
    time: "4PM",
    category: "Arts",
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800",
  },
  {
    id: 4,
    title: "Inter-School Soccer",
    day: 12,
    month: "MAR",
    location: "Sports Field",
    time: "3PM",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800",
  },
];

function Event() {
  const [viewMode, setViewMode] = useState("list");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredEvents =
    activeCategory === "All"
      ? schoolEvents
      : schoolEvents.filter((event) => event.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="page-content bg-slate-50 min-h-screen">
        <PageTitle motherMenu="Community" activeMenu="School Calendar" bg />

        <div className="container py-20">
          {/* --- Filter & Toggle Bar --- */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-12 gap-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">
                School <span className="text-[#4A60EF]">Activity</span>
              </h2>
              <p className="text-slate-400 font-bold text-sm">
                Showing {filteredEvents.length} events for {activeCategory}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-[20px] border border-slate-100 shadow-sm overflow-x-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                      activeCategory === cat
                        ? "bg-[#ed5ab0] text-white shadow-md shadow-pink-100"
                        : "text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex bg-slate-900 p-1.5 rounded-[20px] shadow-lg">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-xl transition-all ${viewMode === "list" ? "bg-[#4A60EF] text-white" : "text-slate-500 hover:text-white"}`}
                >
                  <List size={20} />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-xl transition-all ${viewMode === "grid" ? "bg-[#4A60EF] text-white" : "text-slate-500 hover:text-white"}`}
                >
                  <Grid size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* --- Display Logic --- */}
          {viewMode === "list" ? (
            <div className="row">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((item) => (
                  <div className="col-lg-6 mb-8" key={item.id}>
                    <div className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full group">
                      <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                        <img
                          src={item.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                          alt=""
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A60EF] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-lg">
                          {item.category}
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <CalendarIcon
                              size={14}
                              className="text-[#ed5ab0]"
                            />
                            <span className="text-slate-900 font-black text-sm">
                              {item.day} {item.month}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 mb-4 hover:text-[#4A60EF] cursor-pointer leading-tight">
                            {item.title}
                          </h3>
                          <div className="flex flex-col gap-2 text-slate-400 text-xs font-bold mb-6">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} /> {item.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={14} /> {item.time}
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/event-details"
                          className="text-[#4A60EF] font-black text-xs flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          RESERVE SEAT <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 py-20 text-center">
                  <h3 className="text-slate-300 font-black text-2xl uppercase italic">
                    No events found in this category
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm overflow-x-auto">
              <div className="min-w-[800px] grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="bg-slate-50 p-4 text-center text-xs font-black text-slate-400 uppercase"
                    >
                      {day}
                    </div>
                  ),
                )}
                {[...Array(31)].map((_, i) => {
                  const date = i + 1;
                  const event = filteredEvents.find((e) => e.day === date);
                  return (
                    <div
                      key={i}
                      className={`min-h-[140px] bg-white p-4 relative ${event ? "bg-blue-50/30" : ""}`}
                    >
                      <span
                        className={`text-sm font-bold ${event ? "text-[#4A60EF]" : "text-slate-300"}`}
                      >
                        {date}
                      </span>
                      {event && (
                        <div className="mt-2 bg-white p-2 rounded-lg shadow-sm border-l-4 border-[#4A60EF]">
                          <p className="text-[9px] font-black text-slate-900 leading-tight">
                            {event.title}
                          </p>
                          <p className="text-[8px] font-bold text-[#ed5ab0] mt-1">
                            {event.time}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Event;
