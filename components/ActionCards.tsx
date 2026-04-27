"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Find a Doctor",
    description: "Search by specialty, name, or condition",
    image: "/images/Doctors.webp",
    href: "#",
    color: "from-pkli-navy/80 to-pkli-blue/60",
    accent: "#1E3A5F",
  },
  {
    title: "Book Appointment",
    description: "Schedule online in under 2 minutes",
    image: "/images/appointment.webp",
    href: "/patient/book-appointment",
    color: "from-pkli-red-dark/80 to-pkli-red/60",
    accent: "#BE0000",
  },
  {
    title: "Lab Reports",
    description: "Access your results instantly, securely",
    image: "/images/reports.jpg",
    href: "#",
    color: "from-slate-900/80 to-slate-700/60",
    accent: "#334155",
  },
  {
    title: "Donate Now",
    description: "Help us save lives — give what you can",
    image: "/images/donate.jpg",
    href: "#donate",
    color: "from-pkli-red/80 to-rose-800/60",
    accent: "#BE0000",
  },
];

export default function ActionCards() {
  return (
    <section className="relative z-10 mt-5 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {cards.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="group relative overflow-hidden rounded-xl h-[200px] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5 group-hover:from-black/85 transition-all duration-300" />

            {/* Colored tint */}
            <div className={`absolute inset-0 bg-gradient-to-t ${card.color} mix-blend-multiply`} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h3 className="text-white font-heading text-[1.6rem] tracking-wide leading-none mb-1">
                {card.title}
              </h3>
              <p className="text-white/70 text-[11px] font-body font-medium leading-relaxed mb-3">
                {card.description}
              </p>
              <div className="flex items-center gap-1.5 text-white/60 group-hover:text-white text-[11px] font-semibold tracking-wider font-body transition-colors duration-200">
                <span>Learn more</span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
