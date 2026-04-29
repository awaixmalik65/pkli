"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const slides = [
  { image: "/images/slider-1.png" },
  { image: "/images/slider-2.png" },
  { image: "/images/slider 4.jpeg" },
];

export default function PKLIRawalpindiPage() {
  const [current, setCurrent] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(current + 1), 5500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, goTo]);

  // 5% peek strip on each side
  const PEEK = containerWidth * 0.05;
  const GAP = 10;
  const slideWidth = containerWidth > 0 ? containerWidth - PEEK * 2 - GAP : 0;
  const trackOffset = containerWidth > 0 ? PEEK + GAP / 2 - current * (slideWidth + GAP) : 0;

  return (
    <>
      <Navbar />

      {/* Full-viewport height slider, offset by navbar height */}
      <section
        className="relative overflow-hidden bg-black pt-[60px] md:pt-[116px]"
        style={{ height: "90svh" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Inner area fills remaining height */}
        <div ref={containerRef} className="absolute inset-0 top-[60px] md:top-[116px]">
          {containerWidth > 0 && (
            <motion.div
              className="absolute top-0 left-0 h-full flex"
              animate={{ x: trackOffset }}
              transition={{ type: "spring", stiffness: 220, damping: 30, mass: 1 }}
            >
              {slides.map((slide, i) => {
                const isActive = i === current;
                return (
                  <div
                    key={i}
                    className="relative flex-shrink-0 h-full overflow-hidden"
                    style={{
                      width: slideWidth,
                      marginRight: i < slides.length - 1 ? GAP : 0,
                      borderRadius: 10,
                    }}
                  >
                    {/* Background image */}
                    <Image
                      src={slide.image}
                      alt={`Slide ${i + 1}`}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isActive ? "brightness-75 scale-100" : "brightness-[0.18] scale-[1.04]"
                      }`}
                      sizes="95vw"
                      priority={i === 0}
                    />

                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Left arrow — sits over the left peek strip */}
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous"
            className="absolute left-0 top-0 bottom-0 z-20 flex items-center justify-center group"
            style={{ width: Math.max(PEEK, 40) }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-white/25 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          {/* Right arrow — sits over the right peek strip */}
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next"
            className="absolute right-0 top-0 bottom-0 z-20 flex items-center justify-center group"
            style={{ width: Math.max(PEEK, 40) }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-white/25 border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Bottom-right: counter + dots */}
          <div className="absolute bottom-6 right-8 sm:right-12 z-20 flex flex-col items-end gap-3">
            <p className="text-white/40 text-[10px] font-body tracking-widest select-none">
              <span className="text-white/80 font-bold text-sm font-heading">{String(current + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              {String(slides.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-7 h-[5px] bg-pkli-red" : "w-[5px] h-[5px] bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar along the very bottom */}
          {!paused && (
            <motion.div
              key={`progress-${current}`}
              className="absolute bottom-0 z-20 h-[3px] bg-pkli-red origin-left"
              style={{ left: `${PEEK / containerWidth * 100}%`, width: `${slideWidth / containerWidth * 100}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5.5, ease: "linear" }}
            />
          )}
        </div>
      </section>
    </>
  );
}
