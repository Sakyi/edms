import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate API call
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A60EF]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ed5ab0] font-bold uppercase tracking-widest text-sm"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-8">
              Ready to Join the <span className="text-[#4A60EF]">Family?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Have questions about our curriculum or enrollment process? Our
              admissions team is here to help you every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#4A60EF] transition-colors">
                  <Phone className="text-[#4A60EF] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase">
                    Call Us
                  </p>
                  <p className="text-xl font-bold">+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#4A60EF] transition-colors">
                  <Mail className="text-[#4A60EF] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase">
                    Email Us
                  </p>
                  <p className="text-xl font-bold">admissions@edlys.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#4A60EF] transition-colors">
                  <MapPin className="text-[#4A60EF] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase">
                    Visit Us
                  </p>
                  <p className="text-xl font-bold">6701 Democracy Blvd, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:w-2/3 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl"
          >
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Application Sent!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thank you for your interest in Edlys. Our admissions officer
                  will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-[#4A60EF] font-bold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      required
                      type="text"
                      placeholder="Parent Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-400 focus:outline-none focus:border-[#4A60EF] transition-all appearance-none">
                      <option>Select Child's Age</option>
                      <option>2-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-400 focus:outline-none focus:border-[#4A60EF] transition-all appearance-none">
                      <option>Select Program of Interest</option>
                      <option>Toddler (2-3 Years)</option>
                      <option>Primary (3-6 Years)</option>
                      <option>Elementary (6-9 Years)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea
                    rows="4"
                    placeholder="Your Message || Tell us about your child"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4A60EF] transition-all"
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === "sending"}
                  className="w-full bg-[#4A60EF] hover:bg-[#ed5ab0] py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl"
                >
                  {formStatus === "sending" ? (
                    "SENDING..."
                  ) : (
                    <>
                      SUBMITINQUIRY
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Simple Map Placeholder / Integration */}
        <div className="mt-24 rounded-[40px] overflow-hidden h-[400px] border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.788574187313!2d-77.14207!3d38.90719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzI1LjkiTiA3N8KwMDgnMzEuNSJX!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
