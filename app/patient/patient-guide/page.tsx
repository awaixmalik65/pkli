"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const registrationDocs = [
  {
    group: "Adults",
    age: "18 years and above",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    docs: ["Original CNIC (Computerized National Identity Card)", "Passport (if CNIC is unavailable)"],
    color: "from-pkli-navy to-pkli-blue",
    border: "border-pkli-navy",
    badge: "bg-pkli-navy",
  },
  {
    group: "Children",
    age: "5 years and above",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    docs: ["B-Form (Child Registration Certificate)"],
    color: "from-pkli-red to-pkli-red-dark",
    border: "border-pkli-red",
    badge: "bg-pkli-red",
  },
  {
    group: "Infants",
    age: "Under 5 years",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    docs: ["Birth Certificate (original or attested copy)"],
    color: "from-emerald-700 to-emerald-900",
    border: "border-emerald-700",
    badge: "bg-emerald-700",
  },
];

const walkinSteps = [
  {
    step: 1,
    title: "Sign-In & Token",
    desc: "Arrive at PKLI&RC and sign up at the counter to obtain your token as per your turn and category.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Triage / Screening",
    desc: "Patients with kidney or liver disease needing financial support are screened by the Triage doctor. If your condition falls within PKLI's scope, you are directed to the Financial Screening Department.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Financial Screening",
    desc: "The Financial Screening staff completes their process and informs you about the percentage of financial support provided by PKLI&RC before directing you to the Registration Counter.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Registration Counter",
    desc: "Complete your registration at the Registration Counter. Self-pay patients have their specialty confirmed by a Medical Officer and are assigned a walk-in slot or next available appointment.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Cashier's Counter",
    desc: "Proceed to the Cashier's Counter for invoice generation and payment of your dues.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Vital Assessment",
    desc: "Move to the Vital Assessment Counter where your vitals are assessed and recorded by the nursing staff.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    step: 7,
    title: "Nursing Station",
    desc: "Confirm your availability at the Nursing Station, where staff maintain the queue list for the Doctor.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    step: 8,
    title: "Doctor Consultation",
    desc: "See your doctor for your consultation and check-up.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    step: 9,
    title: "Post-Consultation",
    desc: "Return to the Nursing Station for further instructions (labs, medicine, etc.) and to book your next appointment. A porter will assist you if further areas of the Hospital need to be visited.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25" />
      </svg>
    ),
  },
];

const appointmentSteps = [
  {
    step: 1,
    title: "Sign-In & Token",
    desc: "Arrive at PKLI&RC and sign up at the counter to obtain your token as per your turn and category.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Registration Counter",
    desc: "With your token in hand, proceed directly to the Registration Counter to complete your registration.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Cashier's Counter",
    desc: "Proceed to the Cashier's Counter for payment of your dues.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Nursing Counter",
    desc: "Move to the Nursing Counter where your vitals are assessed and recorded.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Nursing Station",
    desc: "Confirm your availability at the Nursing Station where staff maintain the queue list for the Doctor.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Doctor Consultation",
    desc: "See your doctor for your scheduled consultation and check-up.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    step: 7,
    title: "Post-Consultation",
    desc: "Return to the Nursing Station for further instructions and to book your next appointment. A porter will assist you if further areas need to be visited.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25" />
      </svg>
    ),
  },
];

function StepFlow({ steps, color }: { steps: typeof walkinSteps; color: "navy" | "red" }) {
  const accent = color === "navy" ? "bg-pkli-navy" : "bg-pkli-red";
  const accentText = color === "navy" ? "text-pkli-navy" : "text-pkli-red";
  const accentBorder = color === "navy" ? "border-pkli-navy/20" : "border-pkli-red/20";
  const accentBg = color === "navy" ? "bg-pkli-navy/5" : "bg-pkli-red/5";

  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div className={`absolute left-5 top-10 bottom-10 w-px ${color === "navy" ? "bg-pkli-navy/15" : "bg-pkli-red/15"} hidden lg:block`} />

      <div className="space-y-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={`flex gap-4 p-4 rounded-xl border ${accentBorder} ${accentBg} hover:shadow-md transition-shadow duration-200`}
          >
            {/* Step number + icon */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className={`w-10 h-10 rounded-xl ${accent} flex items-center justify-center text-white shadow-sm`}>
                {s.icon}
              </div>
              <span className={`text-[10px] font-bold font-body ${accentText} tracking-widest`}>{String(s.step).padStart(2, "0")}</span>
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className={`font-heading text-lg ${accentText} tracking-wide leading-tight mb-1`}>{s.title}</h4>
              <p className="text-gray-500 text-xs font-body leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PatientGuidePage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white pt-[60px] md:pt-[116px]">

      {/* Hero */}
      <section className="relative h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden">
        <Image
          src="/images/building.jpg"
          alt="PKLI Patient Guide"
          fill
          priority
          className="object-cover "
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pkli-navy/90 via-pkli-navy/70 to-pkli-navy/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <a href="/" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">Home</a>
                <span className="text-white/30 text-xs">/</span>
                <a href="#" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">Patient Area</a>
                <span className="text-white/30 text-xs">/</span>
                <span className="text-pkli-red text-xs font-body font-semibold">Patient Guide</span>
              </div>
              <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                Patient Area
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-none">
                Patient &amp; Visitor<br />
                <span className="text-pkli-red">Guide</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                Our Commitment
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy tracking-wide leading-none mb-6">
                Your Complete<br />
                <span className="text-gradient-red">Care Experience</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm font-body leading-relaxed">
                <p>
                  Quality healthcare is of the utmost importance to every patient at PKLI&RC — and that includes not only their treatment by our medical team but also their initial and subsequent interactions with Clinical and Non-Clinical staff.
                </p>
                <p>
                  We believe that every appointment is a complete experience for the patients, from start to finish. Being friendly and helpful to each patient when they show up at our doors sets a positive tone for the whole span of their stay at the hospital.
                </p>
                <p>
                  It is imperative to have patients verify their awareness of the admission procedures of the Hospital — this proves to be time saving and helps the Hospital staff in accommodating a larger number of patients on a daily basis.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-premium">
                <Image
                  src="/images/appointment.webp"
                  alt="PKLI Medical Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pkli-navy/60 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-premium border border-gray-100">
                <p className="font-heading text-4xl text-pkli-red leading-none">JCI</p>
                <p className="text-pkli-navy text-xs font-body font-semibold mt-1">Accredited Hospital</p>
                <p className="text-gray-400 text-[10px] font-body">International Standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Patient Registration */}
      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
              Documentation
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy tracking-wide leading-none mb-4">
              New Patient <span className="text-gradient-red">Registration</span>
            </h2>
            <p className="text-gray-500 text-sm font-body max-w-xl mx-auto leading-relaxed">
              The following documents are mandatory for registration and must be presented during the registration process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {registrationDocs.map((doc, i) => (
              <motion.div
                key={doc.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:shadow-premium transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${doc.badge} text-white flex items-center justify-center mb-4 shadow-sm`}>
                    {doc.icon}
                  </div>
                  {/* Group label */}
                  <div className="mb-1">
                    <span className="font-heading text-2xl text-pkli-navy tracking-wide">{doc.group}</span>
                  </div>
                  <p className="text-xs font-body text-gray-400 mb-4 tracking-wide">{doc.age}</p>
                  {/* Documents */}
                  <ul className="space-y-2.5">
                    {doc.docs.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full ${doc.badge} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs font-body leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4"
          >
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-amber-800 text-xs font-body leading-relaxed">
              <span className="font-semibold">Important:</span> All documents are mandatory for registration and must be presented in original form. Failure to provide the required documentation may result in delayed or deferred registration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Walk-in & Appointment Process side by side */}
      <section className="py-14 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
              Patient Journey
              <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-pkli-navy tracking-wide leading-none">
              Step-by-Step <span className="text-gradient-red">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* Walk-in */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-pkli-navy text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl tracking-wide leading-none">Walk-in Patient</h3>
                  <p className="text-white/60 text-[10px] font-body mt-0.5 tracking-widest uppercase">No prior appointment</p>
                </div>
              </motion.div>
              <StepFlow steps={walkinSteps} color="navy" />
            </div>

            {/* Appointment */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-pkli-red text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl tracking-wide leading-none">Appointment Case</h3>
                  <p className="text-white/60 text-[10px] font-body mt-0.5 tracking-widest uppercase">Pre-booked appointment</p>
                </div>
              </motion.div>
              <StepFlow steps={appointmentSteps} color="red" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pkli-navy via-pkli-blue to-pkli-navy p-8 lg:p-12 text-center"
          >
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10">
              <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center justify-center gap-2">
                <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                Ready to Visit Us?
                <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
              </p>
              <h3 className="font-heading text-4xl lg:text-5xl text-white tracking-wide leading-none mb-4">
                Book Your Appointment<br />
                <span className="text-pkli-red">Today</span>
              </h3>
              <p className="text-white/60 text-sm font-body max-w-md mx-auto mb-8 leading-relaxed">
                Our team is ready to help you. Schedule a consultation with our specialist doctors at your convenience.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/patient/book-appointment"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-pkli-red hover:bg-pkli-red-dark text-white font-bold text-sm tracking-wider font-body rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  Book Appointment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:+924211117554"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm tracking-wider font-body rounded-full transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 5.922 2.979 11.21 7.45 14.382l.141.097a1.14 1.14 0 001.294-.022l2.477-1.857a1.14 1.14 0 00.336-1.39l-1.23-2.612a1.14 1.14 0 00-1.322-.619l-1.144.287c-.862.216-1.71-.315-2.001-1.15a14.58 14.58 0 01-.816-4.655c0-1.607.272-3.15.773-4.589.295-.834 1.148-1.36 2.01-1.14l1.14.289a1.14 1.14 0 001.319-.623l1.22-2.617a1.14 1.14 0 00-.342-1.388L8.28 2.215a1.14 1.14 0 00-1.295-.018C4.712 3.79 2.25 6.338 2.25 6.338z" />
                  </svg>
                  +92 42 111 117 554
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
