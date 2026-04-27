"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Liver Transplant",
    description: "Pakistan's most advanced liver transplant program with exceptional outcomes and expert surgical teams.",
    image: "/images/liver transplant.jpeg",
    tag: "Transplantation",
    color: "#BE0000",
  },
  {
    id: 2,
    title: "Kidney Transplant",
    description: "Pakistan's leading kidney transplant program with exceptional long-term patient outcomes.",
    image: "/images/kidney transpant.jpg",
    tag: "Transplantation",
    color: "#1E3A5F",
  },
  {
    id: 3,
    title: "Interventional Endoscopy",
    description: "State-of-the-art diagnostic and therapeutic endoscopic procedures for gastrointestinal conditions.",
    image: "/images/Endoscopy.jpg",
    tag: "Gastroenterology",
    color: "#0A1628",
  },
  {
    id: 4,
    title: "Dialysis Unit",
    description: "Round-the-clock hemodialysis and peritoneal dialysis with advanced monitoring systems.",
    image: "/images/Dialysis.jpg",
    tag: "Nephrology",
    color: "#BE0000",
  },
  {
    id: 5,
    title: "Radiology",
    description: "MRI, CT, PET scanning, and interventional radiology for precise diagnostics and treatment.",
    image: "/images/Interventional Radiology.jpg",
    tag: "Radiology",
    color: "#1B2B4B",
  },
  {
    id: 6,
    title: "Critical Care",
    description: "24/7 intensive care unit with expert intensivists and cutting-edge life-support technology.",
    image: "/images/Critical Care.jpg",
    tag: "ICU / CCU",
    color: "#0A1628",
  },
  {
    id: 7,
    title: "Pathology",
    description: "Comprehensive diagnostic pathology services with state-of-the-art laboratory analysis.",
    image: "/images/Pathology.jpg",
    tag: "Diagnostics",
    color: "#1E3A5F",
  },
];

const CARD_W = 280;
const GAP = 20;
const STEP = CARD_W + GAP;

export default function ServicesSlider() {
  const [active, setActive] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getMaxIndex = useCallback(() => {
    if (!containerRef.current) return services.length - 1;
    const containerW = containerRef.current.offsetWidth;
    const visible = Math.floor(containerW / STEP);
    return Math.max(0, services.length - visible);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? getMaxIndex() : i - 1));
  }, [getMaxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= getMaxIndex() ? 0 : i + 1));
  }, [getMaxIndex]);

  const offset = -currentIndex * STEP;

  return (
    <section id="services" className="section-pad bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2"
            >
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
              Expert Specialty Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl lg:text-6xl text-pkli-navy leading-none tracking-wide"
            >
              World-Class<br />
              <span className="text-gradient-red">Clinical Services</span>
            </motion.h2>
          </div>

          {/* Arrow controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-pkli-navy/20 hover:border-pkli-red hover:bg-pkli-red text-pkli-navy hover:text-white flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-pkli-red hover:bg-pkli-red-dark text-white flex items-center justify-center transition-all duration-200 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            drag="x"
            dragConstraints={{ left: -(services.length - 1) * STEP, right: 0 }}
            dragElastic={0.05}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={(_, info) => {
              setTimeout(() => { isDragging.current = false; }, 100);
              if (info.offset.x < -CARD_W / 3) next();
              else if (info.offset.x > CARD_W / 3) prev();
            }}
            className="flex gap-5 cursor-grab active:cursor-grabbing select-none"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onHoverStart={() => !isDragging.current && setActive(svc.id)}
                onHoverEnd={() => setActive(null)}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-white shadow-card group"
                style={{ width: CARD_W, height: 380 }}
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="280px"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-widest uppercase font-body"
                      style={{ backgroundColor: svc.color }}
                    >
                      {svc.tag}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl text-pkli-navy tracking-wide leading-tight mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-body leading-relaxed flex-1">{svc.description}</p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active === svc.id ? 1 : 0 }}
                    className="mt-4 flex items-center gap-1.5 text-pkli-red text-xs font-bold tracking-wider font-body"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left bg-pkli-red" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile nav dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-200 ${
                i === currentIndex ? "w-6 h-2 bg-pkli-red" : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
