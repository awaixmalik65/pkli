"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─────────────── Data ─────────────── */

const awards = [
  {
    year: "2016",
    title: "Sitara-e-Imtiaz",
    body: "Awarded by the President of Pakistan",
    desc: "Recognised by the Government of Pakistan for outstanding contributions in establishing liver transplant services in the country.",
    // color: "border-amber-400",
    badge: "bg-amber-50 text-amber-600",
    icon: "🏅",
  },
  {
    year: "2017",
    title: "BMJ South Asia Award",
    body: "Best Surgical Team of the Year",
    desc: "Awarded by the British Medical Journal South Asia for developing world-class liver transplant services in Pakistan.",
    // color: "border-blue-400",
    badge: "bg-blue-50 text-blue-600",
    icon: "🏆",
  },
  {
    year: "2018",
    title: "Zenith Global Healthcare Award",
    body: "International Healthcare Professional & Special Recognition",
    desc: "For pioneering liver transplant, hepatobiliary and pancreatic surgical services in Pakistan on an international stage.",
    color: "border-white-400",
    badge: "bg-emerald-50 text-emerald-600",
    icon: "🌟",
  },
];

const expertise = [
  "Adult and paediatric living donor liver transplants",
  "Surgical resection of hilar cholangiocarcinoma",
  "Pancreatic resections with vascular resections",
  "Shunt surgery for non-cirrhotic portal hypertension",
  "Liver transplants for infants and small children",
  "Oval graft transplants for obese patients",
  "Small for size graft liver transplants",
];

const landmarks = [
  {
    date: "April 30, 2012",
    title: "First Paediatric Liver Transplant",
    text: "Pakistan's first living donor pediatric liver transplant performed on a 9-year-old boy.",
  },
  {
    date: "May 01, 2012",
    title: "First Adult-to-Adult LDLT",
    text: "Pakistan's first adult to adult living donor liver transplant (LDLT) on a 41-year-old man.",
  },
  {
    date: "September 21, 2012",
    title: "First Domino Liver Transplant",
    text: "Pakistan's first Domino Liver Transplant performed on a 71-year-old man.",
  },
  {
    date: "June 18, 2013",
    title: "First Transplant for Acute Liver Failure",
    text: "Pakistan's first Liver Transplant for acute liver failure on a 27-year-old man.",
  },
  {
    date: "August 02, 2013",
    title: "First Paediatric Transplant for Wilson's Disease",
    text: "Pakistan's first pediatric Liver Transplant for acute Wilson's disease on a 13-year-old boy.",
  },
  {
    date: "January 07, 2014",
    title: "First Redo Liver Transplant",
    text: "Pakistan's first Redo Liver Transplant (second transplant) on a 45-year-old man whose first transplant failed due to adverse drug reaction.",
  },
  {
    date: "April 15, 2014",
    title: "Youngest Transplant Patient",
    text: "Liver transplant performed on the youngest Pakistani patient at just 5 months of age.",
  },
  {
    date: "June 18, 2014",
    title: "First Auxiliary Liver Transplant",
    text: "Pakistan's first Auxiliary Liver Transplant on a six-year-old girl with Crigler-Najjar Syndrome.",
  },
  {
    date: "Milestone",
    title: "First Dual Graft Liver Transplant",
    text: "Also performed Pakistan's first dual graft liver transplant — a complex procedure requiring two partial grafts.",
  },
];

const education = [
  {
    year: "1997",
    degree: "MBBS",
    full: "Bachelor of Medicine & Bachelor of Surgery",
    institution: "University of the Punjab, Lahore, Pakistan",
  },
  {
    year: "2003",
    degree: "FCPS",
    full: "Fellow of College of Physicians & Surgeons",
    institution: "College of Physicians & Surgeons Pakistan",
  },
  {
    year: "2006",
    degree: "FRCS",
    full: "Fellow of the Royal College of Surgeons",
    institution: "Royal College of Surgeons in Ireland",
  },
  {
    year: "2008",
    degree: "Fellowship",
    full: "Hepatobiliary & Pancreatic Surgery",
    institution: "St. Bart's & The Royal London Hospitals, NHS Trust, London, UK",
  },
  {
    year: "2009",
    degree: "Fellowship",
    full: "Liver Transplantation / HPB Surgery",
    institution: "Kings College Hospital, Kings College London, UK",
  },
  {
    year: "—",
    degree: "FEBTS",
    full: "Fellow of European Board in Transplant Surgery",
    institution: "European Board in Transplant Surgery, Paris, France",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ─────────────── Page ─────────────── */

export default function FaisalDarPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[116px]">
      <Navbar />

      {/* ── Compact header ── */}
      <div className="bg-pkli-navy border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-7">
          <nav className="flex items-center gap-2 text-white/50 text-[11px] font-body mb-1.5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/clinical/liver-transplant" className="hover:text-white transition-colors">Liver Transplant</Link>
            <span className="text-white/30">/</span>
            <span className="text-pkli-red font-semibold">Prof. Faisal Saud Dar</span>
          </nav>
          <h1 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight">
            Doctor Profile <span className="text-white/30 mx-1.5 font-body font-light">→</span> Prof. Faisal Saud Dar
          </h1>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* ── Left: sticky profile card ── */}
            <motion.aside
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-4 lg:sticky lg:top-24 space-y-4"
            >
              {/* Profile card */}
              <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-pkli-red to-pkli-red-dark" />

                {/* Photo */}
                <div className="p-6 pb-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
                    <Image
                      src="/images/dean.jpg"
                      alt="Prof. Faisal Saud Dar — Dean, PKLI&RC"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pkli-navy/60 to-transparent" />
                    {/* SI Badge */}
                    <div className="absolute top-3 right-3 bg-amber-400 text-pkli-navy text-[9px] font-bold tracking-wider uppercase font-body px-2.5 py-1 rounded-full shadow">
                      SI Award 2016
                    </div>
                  </div>
                </div>

                {/* Name & role */}
                <div className="px-6 pt-5 pb-2">
                  <h2 className="font-heading text-3xl text-pkli-navy tracking-wide leading-tight">
                    Prof. Faisal Saud Dar
                  </h2>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
                    <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
                      Dean, PKLI&RC
                    </p>
                  </div>
                  {/* Credentials pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["FCPS", "FRCS", "FEBTS", "SI"].map((c) => (
                      <span key={c} className="px-2.5 py-0.5 bg-pkli-navy/8 border border-pkli-navy/15 rounded-full text-pkli-navy text-[10px] font-bold font-body tracking-wide">
                        {c}
                      </span>
                    ))}
                  </div>
                  {/* Department */}
                  <div className="flex items-start gap-2.5 mb-1">
                    <div className="w-0.5 rounded-full bg-pkli-red/40 flex-shrink-0 mt-1 self-stretch" />
                    <div>
                      <p className="text-[9px] text-gray-400 font-body uppercase tracking-widest font-bold">Department</p>
                      <p className="text-gray-700 text-xs font-body leading-snug mt-0.5">
                        Liver Transplantation, Hepatobiliary &amp; Pancreatic Surgery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mx-6 mb-5 mt-3 grid grid-cols-2 gap-3">
                  {[
                    { value: "1050+", label: "Transplants" },
                    { value: "27+", label: "Years Exp." },
                    { value: "3", label: "Int'l Awards" },
                    { value: "9", label: "Pakistan Firsts" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#F7F9FC] rounded-xl px-3 py-2.5 text-center border border-gray-100">
                      <p className="font-heading text-2xl text-pkli-navy leading-none">{s.value}</p>
                      <p className="text-gray-400 text-[9px] font-body uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Book Appointment CTA */}
                <div className="px-6 pb-6 space-y-2.5">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-pkli-red hover:bg-pkli-red-dark text-white font-body font-bold text-sm rounded-xl transition-colors duration-200 shadow-lg shadow-pkli-red/25"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Book Appointment
                  </a>
                  <a
                    href="tel:+924211117554"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 hover:border-pkli-red text-gray-600 hover:text-pkli-red font-body font-semibold text-sm rounded-xl transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 5.922 2.979 11.21 7.45 14.382l.141.097a1.14 1.14 0 001.294-.022l2.477-1.857a1.14 1.14 0 00.339-1.39l-1.23-2.612a1.14 1.14 0 00-1.322-.619l-1.144.287c-.862.216-1.71-.315-2.001-1.15a14.58 14.58 0 01-.816-4.655c0-1.607.272-3.15.773-4.589.295-.834 1.148-1.36 2.01-1.14l1.14.289a1.14 1.14 0 001.319-.623l1.22-2.617a1.14 1.14 0 00-.342-1.388L8.28 2.215a1.14 1.14 0 00-1.295-.018C4.712 3.79 2.25 6.338 2.25 6.338z" />
                    </svg>
                    +92 42 111 117 554
                  </a>
                </div>
              </div>

              {/* Accreditation badge */}
              <div className="bg-pkli-navy rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-pkli-red flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-body">PKLI&RC, Lahore</p>
                  <p className="text-white/45 text-[9px] font-body uppercase tracking-widest">JCI Accredited Hospital</p>
                </div>
              </div>
            </motion.aside>

            {/* ── Right: content ── */}
            <motion.article
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Title heading */}
              <div>
                <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-2">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  Consultant Liver Transplantation
                </p>
                <h3 className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
                  Prof. Faisal Saud Dar<br />
                  <span className="text-gradient-red">Sitara-e-Imtiaz</span>
                </h3>
                <p className="text-gray-500 font-body text-sm lg:text-[15px] leading-relaxed mt-4 max-w-2xl">
                  Prof. Dar is a pioneering liver transplant surgeon who has transformed hepatobiliary and pancreatic surgical care in Pakistan. As Chairman &amp; Program Director at PKLI&RC, he leads one of the most advanced liver transplant programs in South Asia.
                </p>
              </div>

              {/* ── Awards ── */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  <h4 className="text-pkli-navy font-heading text-2xl tracking-wide">Awards &amp; Recognition</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {awards.map((award, i) => (
                    <motion.div
                      key={award.title}
                      custom={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className={`bg-white rounded-2xl p-6 shadow-card border-l-4 ${award.color} relative overflow-hidden`}
                    >
                      <div className={`absolute top-4 right-5 px-2.5 py-1 rounded-full text-[10px] font-bold font-body tracking-wide ${award.badge}`}>
                        {award.year}
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0 mt-0.5">{award.icon}</span>
                        <div className="pr-16">
                          <h5 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight">{award.title}</h5>
                          <p className="text-pkli-red text-[11px] font-bold tracking-wide font-body mt-0.5 mb-2">{award.body}</p>
                          <p className="text-gray-500 text-sm font-body leading-relaxed">{award.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── Clinical Interest ── */}
              <section className="bg-white rounded-2xl shadow-card p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  <h4 className="text-pkli-navy font-heading text-2xl tracking-wide">Clinical Interest</h4>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">
                  Prof. Dar has a special interest in adult and paediatric living donor liver transplants, surgical resection of hilar cholangiocarcinoma, pancreatic resections with vascular resections and shunt surgery for non-cirrhotic portal hypertension. He has particular expertise in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#F7F9FC] rounded-xl px-4 py-3 border border-gray-100">
                      <div className="w-5 h-5 rounded-full bg-pkli-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-pkli-red" />
                      </div>
                      <p className="text-gray-600 text-xs font-body leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Overview & Landmark Surgeries ── */}
              <section className="bg-white rounded-2xl shadow-card p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  <h4 className="text-pkli-navy font-heading text-2xl tracking-wide">Overview</h4>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                  Prof. Dar has performed more than <strong className="text-pkli-navy font-semibold">1,050 living donor liver transplants</strong> at Shifa International Hospital alone. His landmark surgeries represent a series of Pakistan firsts, fundamentally advancing the country&apos;s transplant capabilities.
                </p>

                {/* Landmark timeline */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pkli-red via-pkli-red/40 to-transparent ml-5" />
                  <div className="space-y-0">
                    {landmarks.map((l, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative pl-14 pb-6 last:pb-0"
                      >
                        {/* Dot */}
                        <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-pkli-red flex items-center justify-center shadow-sm">
                          <span className="text-pkli-red font-heading text-sm">{i + 1}</span>
                        </div>
                        {/* Content */}
                        <div className="bg-[#F7F9FC] rounded-xl px-4 py-3.5 border border-gray-100">
                          <p className="text-pkli-red text-[10px] font-bold tracking-widest uppercase font-body mb-0.5">{l.date}</p>
                          <p className="text-pkli-navy font-body font-semibold text-sm mb-0.5">{l.title}</p>
                          <p className="text-gray-500 text-xs font-body leading-relaxed">{l.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Area of Expertise ── */}
              <section className="bg-pkli-navy rounded-2xl p-7 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pkli-red/10 -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                    <h4 className="text-white font-heading text-2xl tracking-wide">Area of Expertise</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Adult and paediatric living donor liver transplants",
                      "Surgical resection of hilar cholangiocarcinoma",
                      "Pancreatic resections with vascular resections and shunt surgery for non-cirrhotic portal hypertension",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-xl bg-pkli-red/20 border border-pkli-red/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-pkli-red text-xs font-bold font-body">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <p className="text-white/80 font-body text-sm leading-relaxed pt-1.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Education & Training ── */}
              <section className="bg-white rounded-2xl shadow-card p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  <h4 className="text-pkli-navy font-heading text-2xl tracking-wide">Education &amp; Training</h4>
                </div>
                <div className="space-y-0">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className={`flex gap-5 pb-6 ${i < education.length - 1 ? "border-b border-gray-100 mb-6" : ""}`}
                    >
                      {/* Year badge */}
                      <div className="flex-shrink-0 text-right" style={{ width: "52px" }}>
                        <span className={`inline-block px-2 py-1 rounded-lg text-[10px] font-bold font-body tracking-wide ${
                          edu.year === "—"
                            ? "bg-gray-100 text-gray-400"
                            : "bg-pkli-navy text-white"
                        }`}>
                          {edu.year}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-block px-2.5 py-0.5 bg-pkli-red/10 text-pkli-red text-[10px] font-bold tracking-wide font-body rounded-full">
                            {edu.degree}
                          </span>
                        </div>
                        <p className="text-pkli-navy font-body font-semibold text-sm leading-snug">{edu.full}</p>
                        <p className="text-gray-400 text-xs font-body mt-0.5 leading-relaxed">{edu.institution}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* ── Bottom CTA ── */}
              <div className="bg-gradient-to-r from-pkli-red to-pkli-red-dark rounded-2xl p-7 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <h4 className="font-heading text-2xl text-white tracking-wide">Schedule a Consultation</h4>
                  <p className="text-white/70 text-sm font-body mt-1">Speak directly with Prof. Faisal Saud Dar for expert evaluation.</p>
                </div>
                <a
                  href="#"
                  className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 bg-white text-pkli-red hover:bg-pkli-navy hover:text-white font-body font-bold text-sm rounded-xl transition-colors duration-200 shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Book Appointment
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
