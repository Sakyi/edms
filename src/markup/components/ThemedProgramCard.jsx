import { motion } from "framer-motion";

export const ThemedProgramCard = ({ program, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
  >
    {/* Background Image */}
    <img
      src={program.image}
      alt={program.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Dynamic Gradient Overlay: Bottom (Theme Color) -> Middle (Dark) -> Top (Transparent) */}
    <div
      className={`absolute inset-0 bg-gradient-to-t ${program.theme} via-slate-900/80 to-transparent transition-opacity duration-300 group-hover:opacity-90`}
    />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
      <div className="flex justify-between items-center mb-4 transition-transform duration-500 group-hover:-translate-y-3">
        <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
          {program.icon}
        </div>
        <span
          className={`px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-lg ${program.badge}`}
        >
          {program.age}
        </span>
      </div>

      <h3 className="text-3xl font-black mb-3 transition-transform duration-500 group-hover:-translate-y-3">
        {program.title}
      </h3>

      <p className="text-white/80 leading-relaxed mb-6 text-sm line-clamp-2 transition-transform duration-500 group-hover:-translate-y-3">
        {program.desc}
      </p>

      {/* Button with Dynamic Hover Color */}
      <button
        className={`w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${program.btnHover} hover:text-white active:scale-95`}
      >
        Explore Program
      </button>
    </div>
  </motion.div>
);
