import { Code2, Download, Sparkles } from "lucide-react";
import React from "react";
import { ABOUT_STATS, PERSONAL_INFO } from "../utils/constants";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden text-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* left column - Content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-promary/30 bg-promary/10 rounded-full w-fit">
                <Code2 className="w-4 h-4 text-promary" />
                <span className="text-sm font-medium text-blue-700">
                  Full-Stack Developer
                </span>
                <Sparkles className="w-4 h-4 text-promary" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-normal text-blue-600 leading-tight">
                Crafting Digital Experience That Matter
              </h2>

              <div className="flex flex-col gap-4">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-black/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-blue-400 via-blue-600/50 to-blue-400/20 rounded-full"></div>
                  <div className="text-3xl font-normal text-black mb-2 font-mono">
                    {stat.value}
                  </div>
                  <p className="text-sm text-black/60 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume
            </button>
          </div>

          {/* Right Column - Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-promary/10 to-promary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black/5 border-black/10 rounded-2xl p-6 hover:border-promary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-promary/10 rounded-xl">
                    <Code2 className="w-6 h-6 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Expertise
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      Specialized in building scalabel web applications with
                      morden technologies and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute isert-0 bg-linear-to-br from-promary/10 to-promary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black/5 border border-black/10 rounded-2xl p-6 hover:border-promary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-promary/10 rounded-xl w-fit mb-4">
                  <Sparkles className="w-5 h-5 text-promary" />
                </div>
                <h3 className="text-base font-semibold text-black mb-2">
                  Clean Code
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  Writing maintainable, well documented code that scales
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute isert-0 bg-linear-to-br from-promary/10 to-promary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black/5 border border-black/10 rounded-2xl p-6 hover:border-promary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-blue-600/10 rounded-xl w-fit mb-4">
                  <Download className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-base font-semibold text-black mb-2">
                  Performance
                </h3>
                <p className="text-sm text-black/70 leading-relaxed ">
                  Optimizing for speed and efficiency in every project
                </p>
              </div>
            </div>

            <div className="col-span-2 relative group">
              <div className="absolute isert-0 bg-linear-to-br from-promary/10 to-promary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black/5 border border-white/10 rounded-2xl p-6 hover:border-blue-600/30 transition-all duration-300 h-full">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-promary mb-1">
                      100%
                    </div>
                    <div className="text-xs text-blue-700">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-promary mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-blue-700">
                      Support Availabel
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-promary mb-1">
                      Fast
                    </div>
                    <div className="text-xs  text-blue-700">Delivery Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Grid Section */}

        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-black mb-2">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-black/60">
              Technologies I work with to build amazing productions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
