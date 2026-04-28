"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { id: 1, image: "/images/slider 4.jpeg", alt: "PKLI Hospital" },
  { id: 2, image: "/images/slider-1.png", alt: "PKLI Hospital" },
  { id: 3, image: "/images/slider-2.png", alt: "PKLI Medical Care" },
];

const AUTOPLAY_INTERVAL = 5500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-0">
      <section
        className="relative w-full h-[260px] sm:h-[380px] lg:h-[500px] overflow-hidden rounded-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background images */}
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ scale: 1.04, opacity: 0, x: dir * 40 }),
              center: { scale: 1, opacity: 1, x: 0 },
              exit: (dir: number) => ({ scale: 0.98, opacity: 0, x: -dir * 40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={slide.id === 1}
              className="object-cover object-center"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

        {/* Left accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pkli-red via-pkli-red/40 to-transparent z-10" />

        {/* Slide dot rail — right side */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-1.5 h-8 bg-white"
                  : "w-1.5 h-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows — bottom right */}
        <div className="absolute bottom-5 right-5 z-20 flex gap-2">
          <button
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:border-white/70 hover:bg-white/10 transition-all backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-pkli-red flex items-center justify-center text-white hover:bg-pkli-red-dark transition-all shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20">
          <motion.div
            key={`progress-${current}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
            className="h-full bg-pkli-red origin-left"
          />
        </div>
      </section>
    </div>
  );
}
