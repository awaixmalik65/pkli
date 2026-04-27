"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const credentials = [
  { label: "Qualification", value: "MD, MPH, FACS" },
  { label: "Specialty", value: "Professor of Urology and Transplant Surgery" },
  { label: "Board", value: "Diplomat American Board of Urology" },
  { label: "Former", value: "Ex-Governor, American College of Surgeons for Pakistan" },
];

const paragraphs = [
  "It has been an honor and a privilege, remaining associated with Pakistan Kidney and Liver Institute and Research Center (PKLI&RC). Since inception, we have been working hard, to offer excellent healthcare services to the deserving members of the society. I feel humbled and immensely grateful for the unwavering support rendered by each one of the staff members in this institute's operational journey.",
  "Since inception, PKLI&RC's priority has been the 10 million Hepatitis C and 5 million Hepatitis B patients in the country. PKLI has been successfully performing Kidney and Liver Transplants and other major surgeries, including laser surgery for stone, Liver Resection, and major cancer surgeries for bladder tumors requiring bladder reconstruction. The institute has effectively served millions of patient interactions so far.",
  "PKLI's highly trained surgeons have successfully conducted thousands of major and minor surgeries, including nearly 2000 kidney and liver transplantations. Thousands of dialysis treatments have also been provided to the patients. Because the urge to save lives and helping the volatile members of the society had been the major drive behind this institute and there have been dramatic changes in the challenges faced by the nation.",
  "PKLI&RC was able to rapidly transform its role to one of the premium coronavirus care centers. Hundreds of PKLI's coronavirus patients have already recovered, returned home and they are now leading a normal life.",
  "I am proud of the fact that the hospital has never compromised on the quality of healthcare being provided by the hospital. Our focus has always been on maintaining the highest standards of service delivery by providing top-notch medical facilities. As part of our on-going commitment to remaining at the cutting-edge of innovation and technology, we have realized the idea of introducing modern screening equipment with the 'Positron Emission Tomography-Computed' generally known as PET-CT. PKLI, now, also owns SPECT Scan (Gamma Camera), a number of procedures are being done in the Endoscopy unit.",
  "We have been working and will continue to work, tirelessly, to ensure top of the line services for our patients. In the backdrop of an ever-increasing and a huge number of patients having kidney and liver diseases, limited resources have always been one of the greatest challenges faced by the institute, in providing treatment to the deserving patients. PKLI has been providing either free-of-cost or subsidized treatment to people, who need it the most, without discrimination.",
  "Let us all join our hands together and pledge our support to the fight against inequalities and deficiencies in our country's healthcare infrastructure so that we can significantly lessen the burden of disease, whether this is an ailment related to kidney and liver.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ChairmanMessagePage() {
  return (
    <main className="min-h-screen pt-[116px]">
      <Navbar />

      {/* ── Compact page header ── */}
      <div className="bg-pkli-navy border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-7">
          <nav className="flex items-center gap-2 text-white/50 text-[11px] font-body mb-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">About Us</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60">The Hospital</span>
            <span className="text-white/30">/</span>
            <span className="text-pkli-red font-semibold">Chairman's Message</span>
          </nav>
          <h1 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight">
            About Us <span className="text-white/30 mx-1.5 font-body font-light">→</span> Chairman's Message
          </h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="bg-[#F7F9FC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* ── Left: Profile Card (sticky) ── */}
            <motion.aside
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-4 lg:sticky lg:top-24"
            >
              <div className="relative bg-white rounded-3xl shadow-card overflow-hidden mb-5">
                <div className="h-1.5 bg-gradient-to-r from-pkli-red to-pkli-red-dark" />
                <div className="p-6 pb-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
                    <Image
                      src="/images/chairman.jpg"
                      alt="Dr. Saeed Akhtar — Chairman Board of Governors, PKLI"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pkli-navy/60 to-transparent" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-3xl text-pkli-navy tracking-wide leading-tight">
                    Dr. Saeed Akhtar
                  </h2>
                  <div className="flex items-center gap-2 mt-1 mb-4">
                    <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
                    <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
                      Chairman Board of Governors
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {credentials.map((c) => (
                      <li key={c.label} className="flex gap-3">
                        <div className="flex-shrink-0 w-0.5 rounded-full bg-pkli-red/30 mt-1 self-stretch" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-body uppercase tracking-widest font-bold">{c.label}</p>
                          <p className="text-gray-700 text-xs font-body leading-snug mt-0.5">{c.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mx-6 mb-6 px-4 py-3 bg-pkli-navy rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pkli-red flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold font-body">PKLI&RC, Lahore</p>
                    <p className="text-white/50 text-[9px] font-body uppercase tracking-widest">JCI Accredited</p>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* ── Right: Message Content ── */}
            <motion.article
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-8"
            >
              <div className="mb-7">
                <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-2">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  Chairman's Message
                </p>
                <h3 className="font-heading text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
                  A Message of Commitment<br />
                  <span className="text-gradient-red">&amp; Compassionate Care</span>
                </h3>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-4 right-8 text-[160px] font-heading text-pkli-navy/[0.04] leading-none select-none pointer-events-none">"</div>

                <blockquote className="relative border-l-4 border-pkli-red pl-6 mb-7 py-1">
                  <p className="text-pkli-navy font-body text-base lg:text-lg font-medium leading-relaxed italic">
                    "It has been an honor and a privilege, remaining associated with Pakistan Kidney and Liver Institute and Research Center. We have been working hard to offer excellent healthcare services to the deserving members of society."
                  </p>
                </blockquote>

                <div className="space-y-5">
                  {paragraphs.slice(1).map((para, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="text-gray-600 font-body text-sm lg:text-[15px] leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-9 pt-7 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-pkli-red/20 shadow">
                    <Image
                      src="/images/chairman.jpg"
                      alt="Dr. Saeed Akhtar"
                      width={48}
                      height={48}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-xl text-pkli-navy tracking-wide">Dr. Saeed Akhtar</p>
                    <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
                      MD, MPH, FACS — Chairman Board of Governors
                    </p>
                    <p className="text-gray-400 text-[10px] font-body mt-0.5">Pakistan Kidney and Liver Institute &amp; Research Center</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
