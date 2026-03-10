import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

// --- INTEGRATED SAMPLE DATA ---
const FAQ_DATA = [
  {
    id: 1,
    question: "What is the typical teacher-to-student ratio?",
    answer:
      "We pride ourselves on maintaining a low ratio. For our Toddler groups, it is 1:5, and for Primary/Elementary classes, it is 1:10. This ensures every child receives personalized guidance.",
  },
  {
    id: 2,
    question: "Do you offer after-school care programs?",
    answer:
      "Yes, we offer an Extended Day program until 6:00 PM. This includes supervised play, light snacks, and specialized clubs like Robotics, Chess, and Art.",
  },
  {
    id: 3,
    question: "Is the Montessori curriculum recognized for college prep?",
    answer:
      "Absolutely. Montessori education fosters executive function, critical thinking, and self-discipline—skills that are highly valued by top-tier universities and future employers.",
  },
  {
    id: 4,
    question: "How do you handle transitions for new students?",
    answer:
      "We have a 'Phase-In' period where new students visit for shorter durations with their parents initially, helping them build trust with their guides and environment at their own pace.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Header Content */}
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ed5ab0] font-bold uppercase tracking-widest text-sm"
            >
              Got Questions?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
              Common <span className="text-[#4A60EF]">Inquiries</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              We understand that choosing the right school is a big decision.
              Here are answers to the questions parents ask us most.
            </p>
            <div className="p-6 bg-slate-50 rounded-3xl border-l-4 border-[#4A60EF]">
              <p className="text-slate-700 font-medium italic">
                "Don't see your question here? Feel free to reach out to our
                admissions team directly."
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {FAQ_DATA.map((item, index) => (
              <div
                key={item.id}
                className={`border-2 rounded-[24px] transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#4A60EF] bg-slate-50"
                    : "border-slate-100"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span
                    className={`text-lg md:text-xl font-bold ${
                      activeIndex === index
                        ? "text-[#4A60EF]"
                        : "text-slate-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 p-2 rounded-full transition-colors ${
                      activeIndex === index
                        ? "bg-[#4A60EF] text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {activeIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-lg border-t border-slate-200/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
