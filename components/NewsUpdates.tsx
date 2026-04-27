"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const news = [
  {
    id: 1,
    category: "Achievement",
    title: "PKLI Successfully Performs 2,400th Kidney Transplant Milestone",
    date: "April 18, 2026",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    category: "Research",
    title: "New Immunosuppression Protocol Reduces Rejection Rates by 32%",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    category: "Community",
    title: "Free Kidney Screening Camp Reaches 5,000 Patients Across Punjab",
    date: "March 29, 2026",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    category: "Technology",
    title: "PKLI Launches AI-Powered Diagnostic Platform for Liver Disease",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Achievement: "bg-amber-100 text-amber-700",
  Research: "bg-blue-100 text-blue-700",
  Community: "bg-green-100 text-green-700",
  Technology: "bg-purple-100 text-purple-700",
};

export default function NewsUpdates() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-2 flex items-center gap-2"
            >
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
              News &amp; Updates
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide"
            >
              Latest From <span className="text-gradient-red">Our Institute</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="hidden lg:flex items-center gap-2 text-pkli-navy font-semibold text-sm tracking-wide font-body hover:text-pkli-red transition-colors group"
          >
            View all news
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured card */}
          {news.filter((n) => n.featured).map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-pkli-navy cursor-pointer shadow-card hover:shadow-card-hover"
            >
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pkli-navy via-pkli-navy/40 to-transparent" />
              </div>
              <div className="p-5 lg:p-6">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase mb-3 ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="text-white font-heading text-xl lg:text-2xl leading-tight tracking-wide mb-3 group-hover:text-pkli-red transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-body">{item.date}</span>
                  <div className="w-7 h-7 rounded-full bg-pkli-red flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Secondary cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {news.filter((n) => !n.featured).map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ x: 3 }}
                className="group flex gap-4 p-4 rounded-xl bg-[#F7F9FC] hover:bg-white hover:shadow-card border border-transparent hover:border-gray-100 cursor-pointer transition-all duration-200"
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <span className={`inline-block self-start px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase mb-1.5 ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <h3 className="text-pkli-navy font-heading text-lg leading-tight tracking-wide mb-1.5 group-hover:text-pkli-red transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <span className="text-gray-400 text-[10px] font-body">{item.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
