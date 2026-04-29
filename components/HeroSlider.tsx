"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { image: "/images/slider-1.png", alt: "PKLI Hospital" },
  { image: "/images/slider-2.png", alt: "PKLI Medical Care" },
  { image: "/images/slider 4.jpeg", alt: "PKLI Hospital" },
];

export default function HeroSlider() {
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

  const PEEK = containerWidth * 0.05;
  const GAP = 10;
  const slideWidth = containerWidth > 0 ? containerWidth - PEEK * 2 - GAP : 0;
  const trackOffset = containerWidth > 0 ? PEEK + GAP / 2 - current * (slideWidth + GAP) : 0;

  return (
    // Pull back up over the main pt offset so this fills from below the navbar
    <section
      className="relative overflow-hidden bg-black -mt-[60px] md:-mt-[116px] pt-[60px] md:pt-[116px]"
      style={{ height: "90svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      isActive ? "brightness-90 scale-100" : "brightness-[0.18] scale-[1.04]"
                    }`}
                    sizes="95vw"
                    priority={i === 0}
                  />
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Left arrow */}
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

        {/* Right arrow */}
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

        {/* Counter + dots — bottom right */}
        <div className="absolute bottom-5 right-8 sm:right-12 z-20 flex flex-col items-end gap-2.5">
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

        {/* Progress bar */}
        {!paused && (
          <motion.div
            key={`progress-${current}`}
            className="absolute bottom-0 z-20 h-[3px] bg-pkli-red origin-left"
            style={{
              left: `${(PEEK / containerWidth) * 100}%`,
              width: `${(slideWidth / containerWidth) * 100}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5.5, ease: "linear" }}
          />
        )}
      </div>
    </section>
  );
}
