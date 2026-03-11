import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

// --- INTEGRATED SAMPLE DATA ---
const BLOG_DATA = [
  {
    id: 1,
    title: "The Importance of Practical Life Skills in Early Childhood",
    category: "Montessori Tips",
    date: "Oct 12, 2025",
    author: "Eleanor Pemberton",
    excerpt:
      "Discover why activities like pouring water and buttoning coats are fundamental to developing a child's concentration and coordination.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
  },
  {
    id: 2,
    title: "Upcoming Spring Science Fair: What to Expect",
    category: "School News",
    date: "Nov 05, 2025",
    author: "Marcus Sterling",
    excerpt:
      "Our elementary students are preparing to showcase their robotics and biology projects. Join us for a day of discovery and innovation.",
    image:
      "https://images.unsplash.com/photo-1564424223911-d9313ed5bbc7?q=80&w=800",
  },
  {
    id: 3,
    title: "Nurturing Emotional Intelligence Through Mixed-Age Play",
    category: "Pedagogy",
    date: "Dec 01, 2025",
    author: "Julian Chen",
    excerpt:
      "How our unique classroom structure helps older children develop empathy while giving younger students a roadmap for success.",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4A60EF]/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ed5ab0] font-bold uppercase tracking-widest text-sm"
            >
              School Journal
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
              Latest <span className="text-[#4A60EF]">News & Insights</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-slate-900 font-bold hover:text-[#4A60EF] transition-colors">
            VIEW ALL ARTICLES
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_DATA.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              {/* Image & Category Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-[#4A60EF] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#ed5ab0]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-[#4A60EF]" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#4A60EF] transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-[#4A60EF] font-black text-sm group/btn">
                  READ ARTICLE
                  <div className="w-8 h-8 rounded-full bg-[#4A60EF]/10 flex items-center justify-center group-hover/btn:bg-[#4A60EF] group-hover/btn:text-white transition-all">
                    <BookOpen size={14} />
                  </div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
