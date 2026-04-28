"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppDonate() {
  return (
    <section className="py-10 bg-[#F7F9FC]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">

          {/* App Download card — left (wider) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pkli-navy via-pkli-blue to-pkli-navy p-6 lg:p-8 min-h-[240px] flex flex-col justify-between shadow-card"
          >
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pkli-blue/20 blur-3xl -translate-y-20 translate-x-20" />

            <div className="relative z-10 flex items-start gap-6">
              {/* Text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4 border border-white/15">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase font-body">Available Now</span>
                </div>

                <h3 className="font-heading text-3xl lg:text-4xl text-white tracking-wide leading-tight mb-2">
                  Healthcare on the Go<br />
                  <span className="text-pkli-red">with PKLI App</span>
                </h3>
                <p className="text-white/60 text-xs font-body leading-relaxed max-w-xs mb-5">
                  Book appointments, view lab reports, connect with your care team, and access health records — from your smartphone.
                </p>

                {/* Store badges */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-white/50 text-[8px] font-body uppercase tracking-widest">Download on</p>
                      <p className="text-white font-semibold text-xs font-body">App Store</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.28.15.62.17.93.04l12.45-6.96-2.78-2.78-10.6 9.7zm-1.43-20.3C1.45 3.79 1.5 4.18 1.5 4.57v14.86c0 .39-.05.78.25 1.11l.1.09L9.6 13.8v-.2L1.85 3.37l-.1.09zm18.55 7.95L17.78 9.6 14.9 12.5l2.88 2.88 2.55-1.43c.73-.41.73-1.08-.03-1.54zM4.11.44c-.31-.13-.65-.11-.93.04l10.6 9.7 2.78-2.78L4.11.44z"/>
                    </svg>
                    <div>
                      <p className="text-white/50 text-[8px] font-body uppercase tracking-widest">Get it on</p>
                      <p className="text-white font-semibold text-xs font-body">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* PKLI App phone image */}
              <div className="hidden lg:flex flex-shrink-0 items-end self-stretch">
                <div className="relative w-44 h-64 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/pkli-app.png"
                    alt="PKLI Mobile App"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Donate card — right (narrower) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-pkli-red min-h-[240px] flex flex-col justify-between p-6 lg:p-8 shadow-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pkli-red/90 to-pkli-red-dark" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>

                <h3 className="font-heading text-3xl lg:text-4xl text-white tracking-wide leading-tight mb-2">
                  Support Our<br />Mission
                </h3>
                <p className="text-white/75 text-xs font-body leading-relaxed mb-5">
                  Your generosity funds free treatments for deserving patients who cannot afford life-saving care.
                </p>

                {/* Impact stats */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { value: "12K+", label: "Helped" },
                    { value: "Free", label: "Treatments" },
                    { value: "24/7", label: "Care" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-white font-heading text-xl">{stat.value}</p>
                      <p className="text-white/50 text-[9px] font-body uppercase tracking-wider mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-pkli-red font-bold text-sm tracking-wider font-body rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5 self-start"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Donate Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
