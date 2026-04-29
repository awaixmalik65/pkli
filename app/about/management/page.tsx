"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Prof. Faisal Dar",
    honorific: "Sitara-e-Imtiaz",
    credentials: "FCPS · FRCS · FEBTS",
    role: "Dean",
    image: "/images/dean.jpg",
    href: "/clinical/liver-transplant/faisal-dar",
  },
  {
    name: "Dr. Faisal Amir",
    honorific: null,
    credentials: null,
    role: "Hospital Director",
    image: null,
    href: "#",
  },
  {
    name: "Dr. Muhammad Mobin Chaudhry",
    honorific: null,
    credentials: null,
    role: "Medical Director",
    image: null,
    href: "#",
  },
  {
    name: "Wazir Muhammad",
    honorific: null,
    credentials: null,
    role: "Finance Director",
    image: null,
    href: "#",
  },
  {
    name: "Kalsoom Ramzan",
    honorific: null,
    credentials: null,
    role: "Nursing Director",
    image: null,
    href: "#",
  },
  {
    name: "Dr. Usman Iqbal Aujla",
    honorific: null,
    credentials: null,
    role: "Director Strategic Planning & Marketing",
    image: null,
    href: "#",
  },
  {
    name: "Aisha Latif",
    honorific: null,
    credentials: null,
    role: "Director Human Resource",
    image: null,
    href: "#",
  },
];

function MemberAvatar({ name, image }: { name: string; image: string | null }) {
  const [err, setErr] = useState(false);

  const parts = name.trim().split(" ");
  const initials =
    parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0].substring(0, 2).toUpperCase();

  if (image && !err) {
    return (
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top"
        onError={() => setErr(true)}
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#E8EDF4]">
      <span className="font-heading text-3xl tracking-wide text-pkli-navy/40">{initials}</span>
    </div>
  );
}

export default function ManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-[60px] md:pt-[116px]">

        {/* Hero */}
        <section className="relative h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden">
          <Image
            src="/images/BuildingPKLI.jpg"
            alt="PKLI Building"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pkli-navy/92 via-pkli-navy/75 to-pkli-navy/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <a href="/" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">Home</a>
                  <span className="text-white/30 text-xs">/</span>
                  <a href="#" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">About Us</a>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-pkli-red text-xs font-body font-semibold">Management</span>
                </div>
                <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                  About Us
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-none">
                  Our<br /><span className="text-pkli-red">Management</span>
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro strip */}
        <section className="bg-pkli-navy py-8 px-6 lg:px-16">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <p className="text-white font-heading text-xl lg:text-2xl tracking-wide leading-tight">
                Leadership Team — PKLI<span className="text-pkli-red">&</span>RC
              </p>
              <p className="text-white/50 text-xs font-body mt-1">
                Driving excellence in healthcare, research &amp; patient care
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-body">
              <div className="w-2 h-2 rounded-full bg-pkli-red" />
              Pakistan Kidney and Liver Institute and Research Center
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-12 lg:py-16 bg-[#F7F9FC]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
              <span className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body">Leadership</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <motion.a
                  key={i}
                  href={m.href}
                  onClick={(e) => { if (m.href === "#") e.preventDefault(); }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group flex flex-col ${m.href !== "#" ? "cursor-pointer" : "cursor-default"}`}
                >
                  {/* Hover-transition top bar */}
                  <div className="h-1.5 bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-pkli-red group-hover:to-pkli-red-dark transition-all duration-300" />

                  <div className="p-6 pb-7 flex flex-col items-center text-center flex-1">
                    {/* Circular photo */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 ring-gray-100 group-hover:ring-pkli-red/20 shadow-md transition-all duration-300">
                      <MemberAvatar name={m.name} image={m.image} />
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight mb-1">
                      {m.name}
                    </h3>

                    {/* Honorific badge */}
                    {m.honorific && (
                      <span className="inline-block px-2.5 py-0.5 bg-pkli-red/10 text-pkli-red text-[9px] font-bold tracking-[0.15em] uppercase font-body rounded-full mb-2">
                        {m.honorific}
                      </span>
                    )}

                    {/* Credentials */}
                    {m.credentials && (
                      <p className="text-gray-400 text-[10px] font-body font-bold tracking-wide mb-2">{m.credentials}</p>
                    )}

                    {/* Role */}
                    <span className="inline-block px-2.5 py-0.5 bg-pkli-red/10 text-pkli-red text-[9px] font-bold tracking-[0.15em] uppercase font-body rounded-full mb-3">
                      {m.role}
                    </span>

                    {/* Institution */}
                    <p className="text-gray-400 text-[11px] font-body leading-relaxed">PKLI&amp;RC</p>

                    {/* View Profile — only for members with a real page */}
                    {m.href !== "#" && (
                      <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-center">
                        <span className="inline-flex items-center gap-1.5 text-pkli-navy group-hover:text-pkli-red text-[10px] font-bold tracking-[0.18em] uppercase font-body transition-colors duration-200">
                          View Profile
                          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
