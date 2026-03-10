import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Volume2,
  VolumeX,
} from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    // Using a video background for the primary slide
    video: "https://www.pexels.com/download/video/5198164/",
    poster:
      "https://media.istockphoto.com/id/2217360610/photo/businesswoman-smiling-and-holding-tablet-during-a-business-conference.jpg?s=1024x1024&w=is&k=20&c=46EP0leyUuLJThDmoQauFJXIG1tVf0PF55TvNBss98U=", // Static fallback
    title: "Nurturing Young Minds for a Brighter Future",
    subtitle:
      "Experience the Montessori difference where every child is valued.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200",
    title: "A Community of Growth and Excellence",
    subtitle:
      "Our curriculum is designed to inspire curiosity and independence.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    title: "Enrollment Now Open for 2026/2027",
    subtitle: "Join our family and give your child the best start in life.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    setIsVideoLoaded(false); // Reset loader for next video if applicable
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setIsVideoLoaded(false);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // 10s for better video engagement
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative h-[85vh] w-full overflow-hidden bg-slate-950"
    >
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Media */}
          <div className="absolute inset-0 overflow-hidden">
            {slide.video ? (
              <>
                {/* Loader Overlay */}
                {!isVideoLoaded && index === current && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900">
                    <Loader2 className="w-10 h-10 text-[#4A60EF] animate-spin" />
                  </div>
                )}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onCanPlayThrough={() => setIsVideoLoaded(true)}
                  poster={slide.poster}
                  className={`h-full w-full object-cover transition-opacity duration-700 ${
                    isVideoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </>
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-full w-full object-cover transition-transform duration-8000ms ease-linear ${
                  index === current ? "scale-110" : "scale-100"
                }`}
              />
            )}

            {/* dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80 z-10" />
          </div>

          {/* Text Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
            <div
              className={`max-w-4xl transition-all duration-1000 delay-300 transform ${
                index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-200 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <button className="bg-[#4A60EF] hover:bg-[#ed5ab0] text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl">
                  Enroll Now
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                  Take a Tour
                </button>
              </div>
            </div>
          </div>

          {/* Mute/Unmute Toggle for Video Slide */}
          {/* Video Specific Controls */}
          {slide.video && index === current && isVideoLoaded && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-28 right-10 z-30 p-4 rounded-full bg-white/10 text-white hover:bg-[#4A60EF] backdrop-blur-md transition-all border border-white/20"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          )}
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/10 text-white hover:bg-[#4A60EF] backdrop-blur-md transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/10 text-white hover:bg-[#4A60EF] backdrop-blur-md transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative h-1.5"
          >
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                i === current ? "w-12 bg-[#4A60EF]" : "w-4 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
