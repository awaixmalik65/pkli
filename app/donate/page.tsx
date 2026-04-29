"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Donation Types ── */
const donationTypes = [
  {
    title: "Zakat & Donations",
    description:
      "Your Zakat fulfills a religious obligation while directly saving lives. Every rupee is directed to PKLI's most deserving kidney and liver patients who cannot afford treatment.",
    image: "/images/Doctors.webp",
    badge: "Zakat Eligible",
    badgeColor: "bg-emerald-600",
  },
  {
    title: "Sadqah Jariya",
    description:
      "A continuous charity that multiplies in reward. Fund medical equipment, infrastructure, or research that serves patients for years — earning you ongoing blessings.",
    image: "/images/BuildingPKLI.jpg",
    badge: "Ongoing Reward",
    badgeColor: "bg-pkli-navy",
  },
  {
    title: "Donate a Meal",
    description:
      "Ensure hospitalized patients and their accompanying families receive nutritious meals throughout their treatment journey at PKLI&RC.",
    image: "/images/appointment.webp",
    badge: "Feed the Needy",
    badgeColor: "bg-amber-600",
  },
  {
    title: "Sponsor a Liver Transplant",
    description:
      "A liver transplant can cost Rs. 3–5 million. Your sponsorship covers surgery, ICU care, and post-operative treatment — giving a deserving patient a second chance at life.",
    image: "/images/liver transplant.jpeg",
    badge: "Life-Saving",
    badgeColor: "bg-pkli-red",
  },
  {
    title: "Sponsor a Kidney Transplant",
    description:
      "Cover the complete cost of a kidney transplant and follow-up care for a patient who cannot afford it. Thousands are waiting — your support can move them off the list.",
    image: "/images/kidney transpant.jpg",
    badge: "Life-Saving",
    badgeColor: "bg-pkli-red",
  },
  {
    title: "Sponsor a Dialysis Patient",
    description:
      "Each dialysis session is life-sustaining care. Sponsor regular sessions for a patient in chronic kidney failure and help them live with dignity.",
    image: "/images/Dialysis.jpg",
    badge: "Regular Care",
    badgeColor: "bg-pkli-blue",
  },
];

/* ── Payment Methods ── */
const paymentMethods = [
  {
    title: "Online Donation",
    description: "Donate securely online using your credit or debit card through our payment portal — fast, safe, and fully receipted.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    accent: "bg-blue-50 text-blue-600",
  },
  {
    title: "Bank Transfer",
    description: "Transfer directly to PKLI&RC's designated bank account. Contact us for account details and mark your transfer with your name.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    accent: "bg-pkli-navy/10 text-pkli-navy",
  },
  {
    title: "Cash / Cheque / Bank Draft",
    description: "Visit our Donation Desk at PKLI&RC, Canal Road, Lahore. Cheques and drafts should be drawn in favour of 'PKLI&RC'.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    accent: "bg-amber-50 text-amber-600",
  },
  {
    title: "Zakat",
    description: "Donate your Zakat directly to PKLI&RC's dedicated Zakat fund. Our Shariah-compliant process ensures it reaches the most deserving patients.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "International Bank Transfer",
    description: "Overseas Pakistanis can donate via international wire transfer. Contact our finance team for SWIFT/IBAN details and foreign currency processing.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    accent: "bg-purple-50 text-purple-600",
  },
  {
    title: "Home Collection",
    description: "Can't visit us? We'll come to you. Our representative will collect your cheque or cash donation from your doorstep — simply call us to schedule.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    accent: "bg-pkli-red/10 text-pkli-red",
  },
];

const stats = [
  { value: "10M+", label: "Hepatitis C Patients in Pakistan" },
  { value: "5M+", label: "Hepatitis B Patients in Pakistan" },
  { value: "75%", label: "Patients Receive Free or Subsidised Care" },
  { value: "2,000+", label: "Transplants Performed at PKLI" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-[60px] md:pt-[116px]">

        {/* ── Hero ── */}
        <section className="relative h-[300px] sm:h-[380px] lg:h-[460px] overflow-hidden">
          <Image
            src="/images/donate.jpg"
            alt="Donate to PKLI — Save a Life"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pkli-navy/95 via-pkli-navy/80 to-pkli-navy/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-2 mb-4">
                  <a href="/" className="text-white/50 text-xs font-body hover:text-white/80 transition-colors">Home</a>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-pkli-red text-xs font-body font-semibold">Donate</span>
                </div>
                <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-pkli-red rounded-full" />
                  Make a Difference Today
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-4">
                  Give Life.<br />
                  <span className="text-pkli-red">Give Hope.</span>
                </h1>
                <p className="text-white/70 text-sm font-body leading-relaxed max-w-xl">
                  Your Zakat and donations turn despair into hope — saving lives and rebuilding families across Pakistan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#ways-to-donate"
                    className="px-7 py-3 bg-pkli-red hover:bg-pkli-red-dark text-white text-sm font-body font-bold tracking-wide rounded-full transition-colors shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    Donate Now
                  </a>
                  <a
                    href="#how-to-donate"
                    className="px-7 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-body font-bold tracking-wide rounded-full transition-colors backdrop-blur-sm"
                  >
                    How to Donate
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Impact Stats ── */}
        <section className="bg-pkli-navy py-8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center px-4 py-2"
                >
                  <p className="font-heading text-3xl lg:text-4xl text-white tracking-wide">{s.value}</p>
                  <p className="text-white/45 text-[10px] font-body uppercase tracking-wider mt-1 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission Narrative ── */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <p className="flex items-center gap-2 text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3">
                  <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
                  PKLI&amp;RC
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide mb-7">
                  A Nation&apos;s Hope,<br />
                  <span className="text-gradient-red">Built to Save Lives</span>
                </h2>

                <blockquote className="border-l-4 border-pkli-red pl-5 mb-7 py-1">
                  <p className="text-pkli-navy font-body text-base lg:text-lg font-medium leading-relaxed italic">
                    "Your Zakat and donations turn despair into hope, saving lives and rebuilding families. Together, we can give countless Pakistanis a second chance at life."
                  </p>
                </blockquote>

                <div className="space-y-4 text-gray-600 font-body text-sm lg:text-[15px] leading-relaxed">
                  <p>
                    Pakistan faces a growing crisis of kidney and liver disease, with millions affected by Hepatitis B and C and thousands needing life-saving transplants each year. For decades, free and comprehensive transplant care was simply not available.
                  </p>
                  <p>
                    In 2017, a powerful public–private partnership turned a long-held dream into reality with the establishment of the Pakistan Kidney and Liver Institute &amp; Research Center (PKLI&amp;RC), which began serving patients on December 25. PKLI was created so that no Pakistani would be forced to sell their home or seek treatment abroad to survive.
                  </p>
                  <p>
                    Today, PKLI stands as a national center of excellence for kidney, liver and bone marrow transplantation, providing life-saving care to thousands every year, regardless of financial status. With its expansion to Rawalpindi, this hope now reaches even more families.
                  </p>
                  <p>
                    However, each transplant costs millions. PKLI carries this burden for the most deserving patients, but it cannot do so without your support.
                  </p>
                </div>
              </motion.div>

              {/* Right column — image + CTA card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5 space-y-5"
              >
                <div className="relative rounded-3xl overflow-hidden h-64 lg:h-72 shadow-card">
                  <Image
                    src="/images/patient-stories.webp"
                    alt="PKLI Patients"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pkli-navy/80 via-pkli-navy/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white font-heading text-2xl leading-tight tracking-wide">
                      75% of patients receive<br />free or subsidised care
                    </p>
                  </div>
                </div>

                {/* Quick donate card */}
                <div className="bg-pkli-red rounded-3xl p-6 shadow-card relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <p className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase font-body mb-2">Ready to Help?</p>
                    <h3 className="font-heading text-2xl text-white tracking-wide leading-tight mb-4">
                      Every Rupee Saves a Life
                    </h3>
                    <p className="text-white/70 text-xs font-body leading-relaxed mb-5">
                      We look up to your support to continue serving underprivileged patients grappling with deadly kidney and liver diseases.
                    </p>
                    <a
                      href="#ways-to-donate"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-pkli-red font-bold text-sm tracking-wider font-body rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      Choose How to Give
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Ways to Donate ── */}
        <section id="ways-to-donate" className="py-14 lg:py-18 bg-[#F7F9FC]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
                <span className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body">Choose Your Cause</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
                Ways You Can <span className="text-gradient-red">Donate</span>
              </h2>
              <p className="text-gray-500 text-sm font-body mt-3 max-w-xl leading-relaxed">
                We look up to your support to continue serving underprivileged patients grappling with deadly kidney and liver diseases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {donationTypes.map((d, i) => (
                <motion.div
                  key={d.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2.5 py-0.5 ${d.badgeColor} text-white text-[9px] font-bold tracking-widest uppercase font-body rounded-full`}>
                        {d.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight mb-2 group-hover:text-pkli-red transition-colors duration-200">
                      {d.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-body leading-relaxed mb-5 flex-1">
                      {d.description}
                    </p>
                    <a
                      href="#how-to-donate"
                      className="flex items-center justify-center gap-2 py-2.5 bg-pkli-red hover:bg-pkli-red-dark text-white text-[11px] font-body font-bold tracking-[0.12em] uppercase rounded-xl transition-colors duration-200 shadow-md shadow-pkli-red/20"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      Donate Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Donate ── */}
        <section id="how-to-donate" className="py-14 lg:py-18 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-pkli-red rounded-full" />
                <span className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body">Easy & Secure</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-pkli-navy leading-none tracking-wide">
                Methods to <span className="text-gradient-red">Donate</span>
              </h2>
              <p className="text-gray-500 text-sm font-body mt-3 max-w-xl leading-relaxed">
                Choose the donation method most convenient for you. All donations are acknowledged with an official receipt.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paymentMethods.map((m, i) => (
                <motion.div
                  key={m.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-md transition-shadow duration-200 flex gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${m.accent}`}>
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-base text-pkli-navy tracking-wide leading-tight mb-1.5">{m.title}</h4>
                    <p className="text-gray-500 text-xs font-body leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 rounded-3xl bg-pkli-navy p-7 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10">
                <p className="text-pkli-red text-[10px] font-bold tracking-[0.2em] uppercase font-body mb-2">Get in Touch</p>
                <h3 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight mb-1">
                  Questions About Donating?
                </h3>
                <p className="text-white/50 text-xs font-body leading-relaxed max-w-md">
                  Our Donation Team is happy to assist — whether you need account details, Zakat guidance, or want to schedule a home collection.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="tel:+924211117554"
                  className="flex items-center gap-2 px-5 py-3 border border-white/20 text-white/80 text-sm font-body font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4 text-pkli-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 5.922 2.979 11.21 7.45 14.382l.141.097a1.14 1.14 0 001.294-.022l2.477-1.857a1.14 1.14 0 00.339-1.39l-1.23-2.612a1.14 1.14 0 00-1.322-.619l-1.144.287c-.862.216-1.71-.315-2.001-1.15a14.58 14.58 0 01-.816-4.655c0-1.607.272-3.15.773-4.589.295-.834 1.148-1.36 2.01-1.14l1.14.289a1.14 1.14 0 001.319-.623l1.22-2.617a1.14 1.14 0 00-.342-1.388L8.28 2.215a1.14 1.14 0 00-1.295-.018C4.712 3.79 2.25 6.338 2.25 6.338z" />
                  </svg>
                  +92 42 111 117 554
                </a>
                <a
                  href="mailto:info@pkli.org.pk"
                  className="flex items-center gap-2 px-5 py-3 bg-pkli-red hover:bg-pkli-red-dark text-white text-sm font-body font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
