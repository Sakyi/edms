import {
  BookOpen,
  GraduationCap,
  Target,
  Heart,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import React from "react";

// Sample Data Integrated to avoid external dependencies
const SCHOOL_STATS = [
  { label: "Years of Excellence", value: "20" },
  { label: "Certified Educators", value: "40+" },
  { label: "Happy Students", value: "700+" },
];

const SCHOOL_INFO = {
  welcome: "Welcome to Edlys Montessori School",
  motto: "Nurturing Curiosity, Empowering Futures",
  description: [
    "Founded on the principles of Dr. Maria Montessori, our school provides a sanctuary for young minds to explore their potential. We believe that every child is born with a unique set of talents and a natural desire to learn.",
    "Our campus combines modern facilities with traditional Montessori tools, creating a holistic environment where academic excellence goes hand-in-hand with social and emotional growth.",
  ],
  vision:
    "To create an enabling environment that would provide a very high quality basic education that ensures a holistic development of all pupils to make them functionally literate in all spheres of life.",
  mission:
    "To create an enabling environment that would provide a very high quality basic education that ensures a holistic development of all pupils to make them functionally literate in all spheres of life.",
  objective:
    "Building critical thinking, self-discipline, and social harmony in every student we guide.",
};

const WelcomeSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#4A60EF]/20 bg-[#4A60EF]/5 rounded-full w-fit">
                <GraduationCap className="w-4 h-4 text-[#4A60EF]" />
                <span className="text-sm font-bold text-[#4A60EF] uppercase tracking-wider">
                  Est. 2006
                </span>
                <Sparkles className="w-4 h-4 text-[#ed5ab0]" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                {SCHOOL_INFO.welcome}
              </h2>

              <div className="flex flex-col gap-4">
                {SCHOOL_INFO.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-8">
              {SCHOOL_STATS.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#4A60EF] to-transparent rounded-full" />
                  <div className="text-3xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 bg-[#4A60EF] hover:bg-[#ed5ab0] text-white rounded-2xl px-10 py-5 text-base font-bold transition-all duration-300 w-fit shadow-xl shadow-blue-200">
              Learn More About Us
              <BookOpen className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Mission/Vision/Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vision Card - Full Width */}
            <div className="md:col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A60EF]/10 to-transparent rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:border-[#4A60EF]/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-[#4A60EF]">
                    <Target size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 leading-relaxed italic">
                      "{SCHOOL_INFO.vision}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative group">
              <div className="relative bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-[32px] p-8 hover:border-[#ed5ab0]/30 transition-all duration-300 h-full">
                <div className="p-3 bg-[#ed5ab0]/10 rounded-xl w-fit mb-5 text-[#ed5ab0]">
                  <Heart size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {SCHOOL_INFO.mission}
                </p>
              </div>
            </div>

            {/* Objective Card */}
            <div className="relative group">
              <div className="relative bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-[32px] p-8 hover:border-[#4A60EF]/30 transition-all duration-300 h-full">
                <div className="p-3 bg-[#4A60EF]/10 rounded-xl w-fit mb-5 text-[#4A60EF]">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  Core Objective
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {SCHOOL_INFO.objective}
                </p>
              </div>
            </div>

            {/* Summary Trust Bar */}
            <div className="md:col-span-2 mt-4 relative bg-slate-900 rounded-[32px] p-8 overflow-hidden">
              <div className="relative z-10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-[#ed5ab0] mb-1">
                    100%
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    Safety Record
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white mb-1">5:1</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    Child Ratio
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#4A60EF] mb-1">
                    Global
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    Curriculum
                  </div>
                </div>
              </div>
              {/* Decorative background circle */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#4A60EF]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
