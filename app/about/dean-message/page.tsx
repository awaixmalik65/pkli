"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const credentials = [
  { label: "Qualification", value: "SI, DSc, FCPS, FRCS, FEBS" },
  { label: "Position", value: "Dean, Pakistan Kidney and Liver Institute & Research Center (PKLI&RC)" },
];

const paragraphs = [
  "At PKLI&RC, our mission is to provide affordable quality healthcare without any discrimination. Since its inception, PKLI&RC has been working hard, to offer excellent healthcare services to deserving members of society. I feel honoured and immensely grateful for the unwavering support rendered by each one of the staff members of the institute during its operational journey.",
  "I am proud to mention that the hospital is truly dedicated to delivering the best patient care with the heart and values true to our mission. To support us in shaping and maintaining this culture of integrity, we are all required to work together to create a conducive work environment that is founded upon the principles, values of integrity, ethics, respect, and professionalism.",
  "Similarly, I encourage each one of you to keep working tirelessly towards PKLI's mission of delivering state-of-the-art medical care, while playing your role in fostering a culture of prevention, and medical education. Here, through your dedication, you will be actively supporting the noble cause of serving the ailing humanity and shaping the future of Pakistan's healthcare, for future generations. This way you will be able to make a difference in the lives of millions of Pakistani citizens.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function DeanMessagePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[116px]">
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
            <span className="text-pkli-red font-semibold">Dean's Message</span>
          </nav>
          <h1 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight">
            About Us <span className="text-white/30 mx-1.5 font-body font-light">→</span> Dean's Message
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
                      src="/images/dean.jpg"
                      alt="Prof. Faisal Saud Dar — Dean, PKLI&RC"
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
                    Prof. Faisal Saud Dar
                  </h2>
                  <div className="flex items-center gap-2 mt-1 mb-4">
                    <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
                    <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
                      Dean, PKLI&RC
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
                  Dean's Message
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
                  Committed to Quality,<br />
                  <span className="text-gradient-red">Integrity &amp; Excellence</span>
                </h3>
              </div>

              {/* Message card */}
              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10 relative overflow-hidden mb-6">
                <div className="absolute top-4 right-8 text-[160px] font-heading text-pkli-navy/[0.04] leading-none select-none pointer-events-none">"</div>

                <blockquote className="relative border-l-4 border-pkli-red pl-6 mb-7 py-1">
                  <p className="text-pkli-navy font-body text-base lg:text-lg font-medium leading-relaxed italic">
                    "At PKLI&RC, our mission is to provide affordable quality healthcare without any discrimination — delivering state-of-the-art medical care while shaping the future of Pakistan's healthcare for generations to come."
                  </p>
                </blockquote>

                <div className="space-y-5">
                  {paragraphs.map((para, i) => (
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

                {/* Signature */}
                <div className="mt-9 pt-7 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-pkli-red/20 shadow">
                    <Image
                      src="/images/dean.jpg"
                      alt="Prof. Faisal Saud Dar"
                      width={48}
                      height={48}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-xl text-pkli-navy tracking-wide">Prof. Faisal Saud Dar</p>
                    <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
                      SI, DSc, FCPS, FRCS, FEBS — Dean, PKLI&RC
                    </p>
                    <p className="text-gray-400 text-[10px] font-body mt-0.5">Pakistan Kidney and Liver Institute &amp; Research Center</p>
                  </div>
                </div>
              </div>

              {/* ── YouTube Video ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-white rounded-3xl shadow-card overflow-hidden"
              >
                <div className="px-8 pt-7 pb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-pkli-navy font-heading text-lg tracking-wide">Watch Dean's Message</p>
                    <p className="text-gray-400 text-[11px] font-body">Prof. Faisal Saud Dar — PKLI&RC</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-pkli-navy">
                    <iframe
                      src="https://www.youtube.com/embed/Ks3N65VO_pQ"
                      title="Dean's Message — Prof. Faisal Saud Dar, PKLI&RC"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>

            </motion.article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
