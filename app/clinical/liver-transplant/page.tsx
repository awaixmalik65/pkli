"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────── Data ─────────────────── */

const surgicalPrograms = [
  {
    id: "liver",
    title: "Liver Surgery",
    image: "/images/liver1.JPG",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    procedures: [
      "Adult transplant for liver cirrhosis and liver cancer",
      "Liver resection for primary liver cancer (hepatocellular carcinoma) for benign and malignant liver diseases",
      "Laparoscopic surgery for liver cysts",
      "Vascular shunt surgery for non-cirrhotic portal hypertension",
    ],
  },
  {
    id: "gallbladder",
    title: "Gallbladder & Bile Duct Surgery",
    image: "/images/liver2.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    procedures: [
      "Laparoscopic cholecystectomy (keyhole surgery) for gallbladder stones or polyps",
      "Surgery for bile duct stones and iatrogenic bile duct injury",
      "Radical surgery for gallbladder cancer",
      "Surgery for biliary atresia and choledochal cyst",
      "Radical surgery for bile duct cancer",
    ],
  },
  {
    id: "pancreatic",
    title: "Pancreatic Surgery",
    image: "/images/liver3.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    procedures: [
      "Whipple's procedure for head of the pancreas and periampullary cancer/tumor",
      "Distal pancreatectomy with spleen preservation or splenectomy for pancreatic cancer",
      "Surgery for chronic pancreatitis",
      "Minimally invasive surgery for acute pancreatitis complications",
    ],
  },
];

const transplantServices = {
  adults: [
    "Bile Duct Injury after Gallbladder Surgery",
    "Cancer of the Liver",
    "Cancer of the Pancreas",
    "Chronic Pancreatitis in Adults",
    "Endoscopic Ultrasound",
    "Gallbladder Cancer",
    "Neuroendocrine Tumors (Carcinoid Tumors)",
    "Pancreatic Surgery for Cancer",
    "Secondary Liver Cancer (Liver Metastases)",
    "Stomach Cancer",
    "Cancer of the Bile Ducts",
  ],
  children: [
    "Biliary Atresia",
    "Choledochal Cyst in Children",
    "Chronic Pancreatitis in Children",
    "Liver Cancer (Hepatoblastoma) in Children",
    "Liver Transplant for Infants and Children",
  ],
};

const team = [
  {
    name: "Prof. Faisal Saud Dar",
    honorific: "Sitara-e-Imtiaz (SI)",
    role: "Chairman & Program Director",
    dept: "Liver Transplantation, Hepatobiliary & Pancreatic Surgery",
    initials: "FD",
    image: "/images/dean.jpg",
    href: "/clinical/liver-transplant/faisal-dar",
  },
  {
    name: "Dr. Ihsan Ul Haq",
    honorific: "",
    role: "Consultant Surgeon",
    dept: "Liver Transplantation, Hepatobiliary & Pancreatic Surgery",
    initials: "IH",
    image: "/images/Dr-Ihsan.jpeg",
    href: "#",
  },
  {
    name: "Dr. Sohail Rashid",
    honorific: "",
    role: "Consultant Surgeon",
    dept: "Liver Transplantation, Hepatobiliary & Pancreatic Surgery",
    initials: "SR",
    image: "/images/Dr.Sohail-Rashid.jpg",
    href: "#",
  },
  {
    name: "Dr. Muhammad Yasir Khan",
    honorific: "",
    role: "Consultant Surgeon",
    dept: "Liver Transplantation, Hepatobiliary & Pancreatic Surgery",
    initials: "YK",
    image: "/images/Dr yasir khan.png",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Doctor avatar with initials fallback ── */
function DoctorAvatar({ src, initials, name }: { src: string; initials: string; name: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-pkli-navy to-pkli-blue flex items-center justify-center">
        <span className="text-white font-heading text-4xl tracking-wide">{initials}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover object-top"
      onError={() => setError(true)}
    />
  );
}

/* ─────────────────── Page ─────────────────── */

export default function LiverTransplantPage() {
  const [activeDoctor, setActiveDoctor] = useState(0);

  return (
    <main className="min-h-screen pt-[116px]">
      <Navbar />

      {/* ── Compact header ── */}
      <div className="bg-pkli-navy border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-7">
          <nav className="flex items-center gap-2 text-white/50 text-[11px] font-body mb-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Clinical Area</span>
            <span className="text-white/30">/</span>
            <span className="text-pkli-red font-semibold">Liver Transplant</span>
          </nav>
          <h1 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight">
            Clinical Area <span className="text-white/30 mx-1.5 font-body font-light">→</span> Liver Transplant
          </h1>
        </div>
      </div>

      {/* ── Overview ── */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3">
                <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                Department Overview
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide mb-6">
                Liver Transplant<br />
                <span className="text-gradient-red">Program</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 font-body text-sm lg:text-[15px] leading-relaxed">
                  The hospital is among a handful of liver transplant programs in Pakistan that performs living donor transplants, giving hope to patients who may otherwise not receive lifesaving organs. PKLI has one of the country&apos;s most proficient teams of surgeons for the liver transplantation program.
                </p>
                <p className="text-gray-600 font-body text-sm lg:text-[15px] leading-relaxed">
                  Our transplant protocol and post-care transplant services are designed to reduce the risks of infection, organ rejection, and other unintended medical challenges during transplantation. We invest in our critical care and post-transplant teams, offering dedicated inpatient and surgical ICU services with specialized nursing staff experienced in liver transplantation patient care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-pkli-navy rounded-3xl p-7 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-pkli-red/10 -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <p className="text-pkli-red text-[10px] font-bold tracking-[0.2em] uppercase font-body mb-4 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-pkli-red rounded-full" />
                    Surgical Programs
                  </p>
                  <p className="text-white/60 text-xs font-body mb-5">The hospital has performed several complex procedures which include:</p>
                  <ul className="space-y-3">
                    {["Liver Surgery", "Gallbladder & Bile Duct Surgery", "Pancreatic Surgery"].map((item, i) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-pkli-red/20 border border-pkli-red/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-pkli-red text-xs font-bold font-body">{i + 1}</span>
                        </div>
                        <span className="text-white font-body text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                    {[
                      { value: "2,000+", label: "Transplants Performed" },
                      { value: "24/7", label: "Transplant ICU" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-heading text-3xl text-white">{s.value}</p>
                        <p className="text-white/40 text-[10px] font-body uppercase tracking-wider mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Surgical Programs with Images ── */}
      <div className="bg-[#F7F9FC] py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="mb-10">
            <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-2">
              <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
              Procedures & Surgeries
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
              Our Surgical <span className="text-gradient-red">Expertise</span>
            </h2>
          </div>

          <div className="space-y-6">
            {surgicalPrograms.map((prog, i) => (
              <motion.div
                key={prog.id}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-card group"
              >
                {/* Image side — alternates left/right */}
                <div className={`relative h-64 lg:h-auto min-h-[320px] ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay with number badge */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pkli-navy/60 to-pkli-navy/20" />
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-pkli-red flex items-center justify-center shadow-lg">
                    <span className="text-white font-heading text-2xl">{i + 1}</span>
                  </div>
                  {/* Icon label at bottom */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-black/40 backdrop-blur-sm px-3.5 py-2 rounded-xl">
                    <div className="text-white">{prog.icon}</div>
                    <span className="text-white text-xs font-body font-semibold">{prog.title}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`bg-white px-8 py-9 lg:px-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-first" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-pkli-red/10 flex items-center justify-center text-pkli-red flex-shrink-0 group-hover:bg-pkli-red group-hover:text-white transition-all duration-300">
                      {prog.icon}
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl text-pkli-navy tracking-wide leading-tight">{prog.title}</h3>
                  </div>

                  <ul className="space-y-3.5">
                    {prog.procedures.map((proc, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-pkli-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-pkli-red" />
                        </div>
                        <p className="text-gray-600 text-sm font-body leading-relaxed">{proc}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.15em] uppercase font-body hover:gap-3 transition-all duration-200">
                      Learn more about {prog.title}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Transplant Services ── */}
      <div className="bg-white py-14 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="mb-10">
            <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-2">
              <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
              Who We Treat
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
              Liver Transplant <span className="text-gradient-red">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-[#F7F9FC] rounded-2xl p-7 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pkli-navy flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-pkli-navy tracking-wide">For Adults</h3>
                  <p className="text-gray-400 text-[10px] font-body uppercase tracking-widest">Transplant Services</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {transplantServices.adults.map((svc) => (
                  <span key={svc} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 text-[11px] font-body font-medium hover:border-pkli-red hover:text-pkli-red transition-colors cursor-default">
                    {svc}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-[#F7F9FC] rounded-2xl p-7 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pkli-red flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-pkli-navy tracking-wide">For Children &amp; Infants</h3>
                  <p className="text-gray-400 text-[10px] font-body uppercase tracking-widest">Paediatric Services</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {transplantServices.children.map((svc) => (
                  <span key={svc} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 text-[11px] font-body font-medium hover:border-pkli-red hover:text-pkli-red transition-colors cursor-default">
                    {svc}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Meet Our Specialists ── */}
      <div className="bg-[#F0F4F8] py-14 lg:py-18">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-pkli-red text-xs font-bold tracking-[0.25em] uppercase font-body mb-2">Our Medical Team</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy tracking-wide">Meet Our Specialists</h2>
            <div className="w-16 h-1 bg-pkli-red rounded-full mx-auto mt-4" />
          </div>

          {/* Doctor cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc, i) => (
              <motion.div
                key={doc.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => setActiveDoctor(i)}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 transition-colors duration-300 ${
                  activeDoctor === i
                    ? "bg-gradient-to-r from-pkli-red to-pkli-red-dark"
                    : "bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-pkli-red/60 group-hover:to-pkli-red/30"
                }`} />

                <div className="p-6 pb-7 flex flex-col items-center text-center">
                  {/* Circular photo */}
                  <div className={`relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 transition-all duration-300 shadow-md ${
                    activeDoctor === i ? "ring-pkli-red/30 shadow-pkli-red/20" : "ring-gray-100 group-hover:ring-pkli-red/20"
                  }`}>
                    <DoctorAvatar src={doc.image} initials={doc.initials} name={doc.name} />
                  </div>

                  {/* Name */}
                  <h4 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight mb-1">
                    {doc.name}
                  </h4>

                  {/* Honorific */}
                  {doc.honorific && (
                    <span className="inline-block px-2.5 py-0.5 bg-pkli-red/10 text-pkli-red text-[9px] font-bold tracking-[0.15em] uppercase font-body rounded-full mb-2">
                      {doc.honorific}
                    </span>
                  )}

                  {/* Role */}
                  <p className="text-pkli-red text-xs font-body font-bold tracking-wide mb-1.5">
                    {doc.role}
                  </p>

                  {/* Department */}
                  <p className="text-gray-400 text-[11px] font-body leading-relaxed">
                    {doc.dept}
                  </p>

                  {/* View Profile */}
                  <div className="mt-5 pt-4 border-t border-gray-100 w-full flex justify-center">
                    <a
                      href={doc.href}
                      className="inline-flex items-center gap-1.5 text-pkli-navy group-hover:text-pkli-red text-[10px] font-bold tracking-[0.18em] uppercase font-body transition-colors duration-200"
                    >
                      View Profile
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveDoctor(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeDoctor === i ? "w-7 h-2.5 bg-pkli-red" : "w-2.5 h-2.5 bg-gray-300 hover:bg-pkli-red/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
