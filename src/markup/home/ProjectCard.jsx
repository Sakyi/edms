// src/components/ui/ProjectCard.jsx
import React from "react";
import { Globe, ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-promary/30 hover:shadow-promary/10 snap-start shrink-0">
      {/* 1. The Background Image */}
      <img
        src={
          project.image ||
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
        }
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* 2. The Gradient Overlay (Bottom-to-Top) */}
      {/* This invisible div creates a dark mask that is densest at the bottom and fades out completely near the top. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 group-hover:from-promary/90 group-hover:via-black/70 group-hover:to-transparent transition-all duration-500" />

      {/* 3. The Content (Text at the Bottom) */}
      {/* Absolute positioning places this content block at the bottom (0) of the parent card. */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 flex flex-col gap-5">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-promary/30 bg-promary/10 rounded-full w-fit">
          <Globe className="w-3.5 h-3.5 text-promary" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
            {project.category || "Full-Stack"}
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-3xl font-black text-white leading-tight mb-2 group-hover:text-promary transition-colors">
            {project.title || "QuantumSync Analytics"}
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed line-clamp-2">
            A real-time data visualization platform designed for
            high-performance computing clusters.
          </p>
        </div>

        {/* Action Button */}
        <button className="flex items-center gap-2.5 text-promary font-black text-sm group/btn pt-2">
          EXPLORE PROJECT
          <div className="w-9 h-9 rounded-full bg-promary/10 flex items-center justify-center group-hover/btn:bg-promary group-hover/btn:text-white transition-all">
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
