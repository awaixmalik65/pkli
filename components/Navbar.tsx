"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type NavChild = { label: string; href: string };

type MegaColumn = {
  heading: string;
  links: NavChild[];
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: MegaColumn[];
};

const aboutMegaMenu: MegaColumn[] = [
  {
    heading: "The Hospital",
    links: [
      { label: "Chairman Message", href: "/about/chairman-message" },
      { label: "Dean Message", href: "/about/dean-message" },
      { label: "Board of Governors", href: "/about/board-of-governors" },
      { label: "Management", href: "/about/management" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Our Story", href: "/about/our-story" },
    ],
  },
  {
    heading: "The Media",
    links: [
      { label: "Videos", href: "/media/videos" },
      { label: "PIO", href: "/media/pio" },
      { label: "News & Events", href: "/media/news-events" },
      { label: "Complaint Form", href: "/media/complaint-form" },
      { label: "Patient Safety Report", href: "/media/patient-safety-report" },
    ],
  },
  {
    heading: "Publications",
    links: [
      { label: "Newsletter", href: "/publications/newsletter" },
      { label: "Audit Reports", href: "/publications/audit-reports" },
      { label: "Tenders", href: "/publications/tenders" },
      { label: "Quotations", href: "/publications/quotations" },
      { label: "Food Safety Policy", href: "/publications/food-safety-policy" },
    ],
  },
];

const navLinks: NavLink[] = [
  { label: "About Us", href: "#", megaMenu: aboutMegaMenu },
  {
    label: "Clinical Area",
    href: "#",
    children: [
      { label: "Liver Transplant", href: "/clinical/liver-transplant" },
      { label: "Nephrology", href: "#" },
      { label: "Hepatology", href: "#" },
      { label: "Critical Care", href: "#" },
      { label: "Oncology", href: "#" },
    ],
  },
  {
    label: "Patient Area",
    href: "#",
    children: [
      { label: "Book Appointment", href: "/patient/book-appointment" },
      { label: "Lab Reports", href: "#" },
      { label: "Patient Portal", href: "#" },
      { label: "Insurance", href: "#" },
    ],
  },
  { label: "Institute of Nursing & Allied Health Sciences", href: "#" },
  { label: "PKLI Rawalpindi", href: "#" },
  { label: "PKLI Filter Clinics", href: "#" },
  {
    label: "Get Involved",
    href: "#",
    children: [
      { label: "Donate", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Research", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Row 1: Logo + Contact */}
        <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden transition-all duration-300 ${scrolled ? "h-0 border-0" : "h-[72px]"}`}>
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex items-center justify-between h-[72px]">
            <a href="/" className="flex-shrink-0">
              <Image src="/images/pkli logo.png" alt="PKLI" width={340} height={52} priority className="h-[52px] w-auto object-contain" />
            </a>
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+924211117554" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-body font-medium hover:border-pkli-red hover:text-pkli-red transition-colors duration-200 whitespace-nowrap">
                <svg className="w-4 h-4 text-pkli-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 5.922 2.979 11.21 7.45 14.382l.141.097a1.14 1.14 0 001.294-.022l2.477-1.857a1.14 1.14 0 00.339-1.39l-1.23-2.612a1.14 1.14 0 00-1.322-.619l-1.144.287c-.862.216-1.71-.315-2.001-1.15a14.58 14.58 0 01-.816-4.655c0-1.607.272-3.15.773-4.589.295-.834 1.148-1.36 2.01-1.14l1.14.289a1.14 1.14 0 001.319-.623l1.22-2.617a1.14 1.14 0 00-.342-1.388L8.28 2.215a1.14 1.14 0 00-1.295-.018C4.712 3.79 2.25 6.338 2.25 6.338z" />
                </svg>
                +92 42 111 117 554
              </a>
              <a href="mailto:info@pkli.org.pk" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-body font-medium hover:border-pkli-red hover:text-pkli-red transition-colors duration-200 whitespace-nowrap">
                <svg className="w-4 h-4 text-pkli-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@pkli.org.pk
              </a>
              <a href="#donate" className="px-5 py-2 bg-pkli-red hover:bg-pkli-red-dark text-white text-sm font-body font-semibold rounded-md transition-colors duration-200 whitespace-nowrap">
                Donate Now
              </a>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Row 2: Nav links on red bar */}
        <nav className={`hidden md:block bg-pkli-red transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-start h-11">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative h-11 flex items-center"
                  onMouseEnter={() => (link.children || link.megaMenu) && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3.5 h-11 text-white text-[12.5px] font-body font-medium tracking-wide hover:bg-pkli-red-dark transition-colors duration-150 whitespace-nowrap"
                  >
                    {link.label}
                    {(link.children || link.megaMenu) && (
                      <ChevronDownIcon className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    )}
                  </a>

                  {/* Mega Menu */}
                  {link.megaMenu && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 z-50 w-[740px] bg-white shadow-2xl rounded-b-2xl overflow-hidden border-t-2 border-pkli-red"
                        >
                          <div className="flex">
                            <div className="relative w-44 flex-shrink-0 min-h-full">
                              <Image src="/images/slider-1.png" alt="PKLI Hospital" fill className="object-cover object-center" sizes="176px" />
                              <div className="absolute inset-0 bg-pkli-navy/70" />
                              <div className="absolute inset-0 flex flex-col justify-end p-5">
                                <Image src="/images/pkli-logo.png" alt="PKLI" width={120} height={36} className="w-28 h-auto object-contain brightness-0 invert mb-3" />
                                <p className="text-white/70 text-[10px] font-body leading-relaxed">JCI Accredited<br />Center of Excellence</p>
                              </div>
                            </div>
                            <div className="flex-1 grid grid-cols-3 gap-0 p-6 pb-7">
                              {link.megaMenu.map((col, ci) => (
                                <div key={col.heading} className={ci < link.megaMenu!.length - 1 ? "border-r border-gray-100 pr-6" : "pl-6"} style={ci > 0 ? { paddingLeft: "1.5rem" } : {}}>
                                  <div className="flex items-center gap-2 mb-4">
                                    <span className="w-4 h-0.5 bg-pkli-red rounded-full flex-shrink-0" />
                                    <h4 className="text-pkli-navy font-heading text-sm tracking-[0.15em] uppercase leading-none">{col.heading}</h4>
                                  </div>
                                  <ul className="space-y-1.5">
                                    {col.links.map((item) => (
                                      <li key={item.label}>
                                        <a href={item.href} className="group flex items-center gap-2 text-gray-500 hover:text-pkli-red text-[11.5px] font-body font-medium transition-all duration-150 py-0.5">
                                          <span className="w-0 group-hover:w-2 h-0.5 bg-pkli-red rounded-full transition-all duration-200 flex-shrink-0" />
                                          {item.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-pkli-red via-pkli-navy to-pkli-red" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Regular Dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl border border-gray-100 rounded-b-xl overflow-hidden z-50 border-t-2 border-pkli-red"
                        >
                          {link.children.map((child, i) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className={`block px-5 py-2.5 text-gray-700 hover:bg-pkli-red hover:text-white text-[12px] font-body font-medium transition-colors duration-150 ${i < link.children!.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-pkli-navy md:hidden overflow-y-auto"
          >
            <div className="px-6 pt-24 pb-10">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <a href={link.href} onClick={() => setMobileOpen(false)} className="block py-3.5 text-white/80 hover:text-white font-semibold text-sm tracking-wide border-b border-white/10 transition-colors">
                      {link.label}
                    </a>
                    {link.megaMenu && (
                      <div className="pl-4 mt-1 mb-2 space-y-1">
                        {link.megaMenu.map((col) => col.links.map((item) => (
                          <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-white/50 hover:text-white/80 text-xs font-medium tracking-wide transition-colors">
                            {item.label}
                          </a>
                        )))}
                      </div>
                    )}
                    {link.children && (
                      <div className="pl-4 mt-1 mb-2 space-y-1">
                        {link.children.map((child) => (
                          <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 text-white/50 hover:text-white/80 text-xs font-medium tracking-wide transition-colors">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <a href="tel:+924211117554" onClick={() => setMobileOpen(false)} className="block text-center py-3 border border-white/20 text-white/80 font-semibold text-sm rounded-md">
                  +92 42 111 117 554
                </a>
                <a href="#donate" onClick={() => setMobileOpen(false)} className="block text-center py-3 bg-pkli-red text-white font-bold text-sm rounded-md">
                  Donate Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
