"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const members = [
  { name: "Dr. Sohail Naqvi", designation: "Member", dept: null, credentials: null, image: null },
  { name: "Mr. Zahid Saeed", designation: "Member", dept: null, credentials: null, image: null },
  { name: "Dr. Masooma Saeed", designation: "Member", dept: null, credentials: null, image: null },
  { name: "Mr. Fawad Mukhtar", designation: "Member", dept: "CEO, SIHT", credentials: null, image: null },
  { name: "Mr. Mujeeb Ur Rehman Shami", designation: "Member", dept: null, credentials: null, image: null },
  { name: "Mr. Javed Iqbal", designation: "Member", dept: null, credentials: null, image: null },
  { name: "Secretary", designation: "Ex-Officio Member", dept: "Specialized Healthcare & Medical Education Department, Govt. of Punjab", credentials: null, image: null, isSecretary: true },
  { name: "Secretary", designation: "Ex-Officio Member", dept: "Finance Department, Govt. of Punjab", credentials: null, image: null, isSecretary: true },
  { name: "Secretary", designation: "Ex-Officio Member", dept: "Planning & Development Department, Govt. of Punjab", credentials: null, image: null, isSecretary: true },
  { name: "Secretary", designation: "Ex-Officio Member", dept: "Law & Parliamentary Affairs Department, Govt. of Punjab", credentials: null, image: null, isSecretary: true },
  {
    name: "Prof. Faisal Dar",
    designation: "Member",
    dept: "Chairman — Liver Transplantation, Hepatobiliary & Pancreatic Surgery | Dean, PKLI&RC",
    credentials: "Sitara-e-Imtiaz · FCPS · FRCS · FEBTS",
    image: "/images/dean.jpg",
  },
  { name: "Dr. Faisal Amir", designation: "Member", dept: "Hospital Director, PKLI&RC", credentials: null, image: null },
];

function MemberAvatar({ name, image, dark = false }: { name: string; image: string | null; dark?: boolean }) {
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
    <div className={`w-full h-full flex items-center justify-center ${dark ? "bg-pkli-navy" : "bg-[#E8EDF4]"}`}>
      <span className={`font-heading text-3xl tracking-wide ${dark ? "text-white/60" : "text-pkli-navy/40"}`}>
        {initials}
      </span>
    </div>
  );
}

export default function BoardOfGovernorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-[60px] md:pt-[116px]">

        {/* Hero */}
        <section className="relative bg-gradient-to-r from-pkli-navy/90 via-pkli-navy/70 to-pkli-navy/30 h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden">
          <Image src="/images/BuildingPKLI.jpg" alt="PKLI Building" fill priority className="object-cover object-bottom" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-pkli-navy/92 via-pkli-navy/75 to-pkli-navy/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <a href="/" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">Home</a>
                  <span className="text-white/30 text-xs">/</span>
                  <a href="#" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">About Us</a>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-pkli-red text-xs font-body font-semibold">Board of Governors</span>
                </div>
                <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                  About Us
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-none">
                  Board of<br /><span className="text-pkli-red">Governors</span>
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patron in Chief */}
        <section className="py-14 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pkli-navy via-[#0f1f3d] to-pkli-navy p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 shadow-premium"
            >
              <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pkli-red/5 blur-3xl -translate-y-20 translate-x-20" />

              <div className="relative z-10 flex-shrink-0">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 text-center lg:text-left flex-1">
                <span className="inline-block px-3 py-1 bg-pkli-red/20 border border-pkli-red/30 text-pkli-red text-[10px] font-bold tracking-[0.25em] uppercase font-body rounded-full mb-4">
                  Patron in Chief
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white tracking-wide leading-tight mb-2">
                  Honorable Chief Minister of Punjab
                </h2>
                <p className="text-white/50 text-sm font-body tracking-widest uppercase">Government of Punjab, Pakistan</p>
              </div>

              <div className="absolute bottom-4 right-6 text-white/5 font-heading text-[80px] lg:text-[120px] leading-none select-none pointer-events-none">
                PKLI
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chairperson */}
        <section className="pb-10 bg-white">
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-premium transition-shadow duration-300"
            >
              <div className="relative h-64 lg:h-auto bg-pkli-navy">
                <Image src="/images/chairman.jpg" alt="Prof. Saeed Akhtar" fill className="object-cover object-top opacity-90" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-pkli-navy/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-pkli-navy/10" />
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <span className="px-3 py-1 bg-pkli-red text-white text-[9px] font-bold tracking-widest uppercase font-body rounded-full">Chairperson</span>
                </div>
              </div>

              <div className="p-6 lg:p-8 bg-white flex flex-col justify-center">
                <span className="hidden lg:inline-block self-start px-3 py-1 bg-pkli-red text-white text-[9px] font-bold tracking-widest uppercase font-body rounded-full mb-4">Chairperson</span>
                <h2 className="font-heading text-3xl lg:text-4xl text-pkli-navy tracking-wide leading-tight mb-1">
                  Prof. Saeed Akhtar
                </h2>
                <p className="text-pkli-red text-xs font-bold tracking-widest uppercase font-body mb-4">MD · MPH · FACS</p>
                <div className="space-y-2 mb-5">
                  {[
                    "Professor of Urology and Transplant Surgery",
                    "Diplomat, American Board of Urology",
                    "Ex-Governor, American College of Surgeons for Pakistan",
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-pkli-red mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm font-body">{c}</p>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gray-100 mb-5" />
                <p className="text-gray-400 text-[11px] font-body tracking-widest uppercase">Board of Governors · PKLI&amp;RC</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Members */}
        <section className="py-10 pb-16 bg-[#F7F9FC]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
              <span className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body">Members</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Hover-transition top bar */}
                  <div className="hover: cursor-pointer" />

                  <div className="p-6 pb-7 flex flex-col items-center text-center">
                    {/* Circular photo */}
                    <div className={`relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 transition-all duration-300 shadow-md ${m.isSecretary ? "ring-gray-200 group-hover:ring-pkli-navy/20" : "ring-gray-100 group-hover:ring-pkli-red/20"}`}>
                      <MemberAvatar name={m.name} image={m.image} dark={m.isSecretary} />
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight mb-1">
                      {m.name}
                    </h3>

                    {/* Credentials */}
                    {m.credentials && (
                      <p className="text-gray-400 text-[10px] font-body font-bold tracking-wide mb-2">{m.credentials}</p>
                    )}

                    {/* Designation pill */}
                    <span className={`inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-[0.15em] uppercase font-body rounded-full mb-3 ${m.isSecretary ? "bg-pkli-navy/10 text-pkli-navy" : "bg-pkli-red/10 text-pkli-red"}`}>
                      {m.designation}
                    </span>

                    {/* Department */}
                    {m.dept && (
                      <p className="text-gray-400 text-[11px] font-body leading-relaxed">{m.dept}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
