"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "Muhammad Bilal",
    condition: "Kidney Transplant Recipient",
    story:
      "After years of dialysis, I had almost lost hope. The team at PKLI not only gave me a new kidney but a completely new life. Their care was exceptional — professional, compassionate, and world-class.",
    rating: 5,
    location: "Lahore",
  },
  {
    id: 2,
    name: "Fatima Siddiqui",
    condition: "Liver Disease Recovery",
    story:
      "I was diagnosed with advanced liver cirrhosis and told I had months to live. PKLI's hepatology team crafted a treatment plan that turned everything around. Two years later, I'm healthier than ever.",
    rating: 5,
    location: "Islamabad",
  },
  {
    id: 3,
    name: "Ahmad Hassan",
    condition: "CKD Management",
    story:
      "The nephrology team at PKLI managed my CKD so effectively that I was able to avoid dialysis for three additional years. Their holistic approach made all the difference.",
    rating: 5,
    location: "Faisalabad",
  },
  {
    id: 4,
    name: "Zara Malik",
    condition: "Living Donor — Kidney",
    story:
      "Donating a kidney to my brother was the most important decision of my life. PKLI's team walked me through every step. The surgery went perfectly and we're both thriving.",
    rating: 5,
    location: "Karachi",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientStories() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const next = () => goTo((current + 1) % stories.length);
  const prev = () => goTo((current - 1 + stories.length) % stories.length);

  const story = stories[current];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
          <span className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body">Patient Stories</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-stretch">

          {/* Left — testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between lg:col-span-2"
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-pkli-navy leading-none tracking-wide mb-5">
                Lives We Have<br />
                <span className="text-gradient-red">Transformed</span>
              </h2>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={story.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 24 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="bg-[#F7F9FC] rounded-2xl p-5 border border-gray-100"
                >
                  <div className="text-pkli-red/20 font-heading text-6xl leading-none -mb-1 select-none">"</div>
                  <p className="text-gray-600 text-sm font-body font-light leading-relaxed italic mb-4">
                    {story.story}
                  </p>

                  <Stars count={story.rating} />

                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-pkli-navy flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading text-sm">{story.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-pkli-navy font-semibold text-sm font-body">{story.name}</p>
                      <p className="text-pkli-red text-[10px] font-bold tracking-widest uppercase font-body">{story.condition}</p>
                    </div>
                    <span className="text-gray-400 text-xs font-body">{story.location}</span>
                  </div>

                  {/* Read Full Review */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 mt-4 text-pkli-red text-xs font-bold tracking-wider font-body hover:gap-2.5 transition-all duration-200 group"
                  >
                    Read full review
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-gray-200 hover:border-pkli-red hover:bg-pkli-red flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "w-6 h-2 bg-pkli-red" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-pkli-red hover:bg-pkli-red-dark flex items-center justify-center text-white transition-all duration-200 shadow-md"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <span className="ml-auto text-gray-400 text-xs font-body">{current + 1} / {stories.length}</span>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden min-h-[320px] lg:min-h-[420px] lg:col-span-3"
          >
            <Image
              src="/images/patient-stories.webp"
              alt="PKLI Patient Care"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-pkli-navy/90 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
              <p className="text-white font-heading text-2xl leading-none">75%</p>
              <p className="text-white/70 text-xs font-body mt-0.5">Patients receive free or<br />subsidised treatment</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
