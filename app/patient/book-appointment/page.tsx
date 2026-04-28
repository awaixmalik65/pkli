"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────── Types ─────────────────── */

type SlotGroup = { morning: string[]; afternoon: string[]; evening: string[] };

type Doctor = {
  id: string;
  name: string;
  honorific: string;
  credentials: string;
  role: string;
  department: string;
  location: string;
  expertise: string[];
  image: string;
  initials: string;
  profileHref: string;
  experience: string;
};

/* ─────────────────── Data ─────────────────── */

const doctors: Doctor[] = [
  {
    id: "faisal-dar",
    name: "Prof. Faisal Saud Dar",
    honorific: "Sitara-e-Imtiaz (SI)",
    credentials: "FCPS, FRCS, FEBTS",
    role: "Chairman & Program Director",
    department: "Liver Transplant",
    location: "PKLI Lahore",
    expertise: ["Living Donor Liver Transplant", "Paediatric Liver Transplant", "Hilar Cholangiocarcinoma", "Pancreatic Surgery"],
    image: "/images/dean.jpg",
    initials: "FD",
    profileHref: "/clinical/liver-transplant/faisal-dar",
    experience: "27+ Years",
  },
  {
    id: "ihsan-ul-haq",
    name: "Dr. Ihsan Ul Haq",
    honorific: "",
    credentials: "FCPS",
    role: "Consultant Surgeon",
    department: "Liver Transplant",
    location: "PKLI Lahore",
    expertise: ["Liver Transplantation", "Hepatobiliary Surgery", "Pancreatic Surgery", "Laparoscopic Surgery"],
    image: "/images/Dr-Ihsan.jpeg",
    initials: "IH",
    profileHref: "#",
    experience: "15+ Years",
  },
  {
    id: "sohail-rashid",
    name: "Dr. Sohail Rashid",
    honorific: "",
    credentials: "FCPS",
    role: "Consultant Surgeon",
    department: "Liver Transplant",
    location: "PKLI Lahore",
    expertise: ["Liver Transplantation", "Hepatobiliary Surgery", "Laparoscopic Surgery", "Biliary Surgery"],
    image: "/images/Dr.Sohail-Rashid.jpg",
    initials: "SR",
    profileHref: "#",
    experience: "12+ Years",
  },
  {
    id: "yasir-khan",
    name: "Dr. Muhammad Yasir Khan",
    honorific: "",
    credentials: "FCPS",
    role: "Consultant Surgeon",
    department: "Liver Transplant",
    location: "PKLI Lahore",
    expertise: ["Liver Transplantation", "Hepatobiliary Surgery", "Pancreatic Surgery", "HPB Surgery"],
    image: "/images/Dr yasir khan.png",
    initials: "YK",
    profileHref: "#",
    experience: "10+ Years",
  },
];

const LOCATIONS = ["All Locations", "PKLI Lahore (Main Campus)", "PKLI Rawalpindi", "PKLI Filter Clinics"];
const DEPARTMENTS = ["All Departments", "Liver Transplant", "Nephrology", "Hepatology", "Critical Care", "Oncology"];

const MORNING_SLOTS  = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
const AFTERNOON_SLOTS = ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];
const EVENING_SLOTS  = ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/* ─────────────────── Helpers ─────────────────── */

function getMockSlots(doctorId: string, date: Date): SlotGroup {
  const day = date.getDay();
  if (day === 0 || day === 6) return { morning: [], afternoon: [], evening: [] };
  const seed = date.getDate() + date.getMonth() * 31 + doctorId.charCodeAt(0);
  const keep = (i: number) => (seed + i * 13) % 10 > 3;
  return {
    morning:   MORNING_SLOTS.filter((_, i) => keep(i)),
    afternoon: AFTERNOON_SLOTS.filter((_, i) => keep(i + 6)),
    evening:   EVENING_SLOTS.filter((_, i) => keep(i + 12)),
  };
}

function hasAnySlot(slots: SlotGroup) {
  return slots.morning.length > 0 || slots.afternoon.length > 0 || slots.evening.length > 0;
}

function isSameDay(a: Date, b: Date) {
  return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
}

/* ─────────────────── Sub-components ─────────────────── */

function DoctorAvatar({ src, initials }: { src: string; initials: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-pkli-navy to-pkli-blue flex items-center justify-center">
        <span className="text-white font-heading text-3xl">{initials}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={initials} className="w-full h-full object-cover object-top" onError={() => setError(true)} />
  );
}

function SelectFilter({
  label, value, options, onChange,
}: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="relative flex-1 min-w-[180px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-700 text-sm font-body font-medium focus:outline-none focus:border-pkli-red focus:ring-2 focus:ring-pkli-red/10 cursor-pointer transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-gray-400 tracking-widest uppercase font-body">
        {label}
      </label>
    </div>
  );
}

/* ─── Mini Calendar ─── */
function MiniCalendar({
  month, selectedDate, onDateSelect, onMonthChange,
}: {
  month: Date;
  selectedDate: Date | null;
  onDateSelect: (d: Date) => void;
  onMonthChange: (d: Date) => void;
}) {
  const today = new Date(); today.setHours(0,0,0,0);
  const year = month.getFullYear();
  const mon  = month.getMonth();
  const firstDow = new Date(year, mon, 1).getDay();
  const daysInMonth = new Date(year, mon + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, mon, d));

  const prevMonth = () => onMonthChange(new Date(year, mon - 1, 1));
  const nextMonth = () => onMonthChange(new Date(year, mon + 1, 1));

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="font-body font-bold text-pkli-navy text-sm">{MONTHS[mon]} {year}</span>
        <button onClick={nextMonth} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">{d}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`e${i}`} />;
          const isPast    = day < today;
          const isWeekend = day.getDay() === 0 || day.getDay() === 6;
          const disabled  = isPast || isWeekend;
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isToday    = isSameDay(day, today);

          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => onDateSelect(day)}
              className={`h-9 w-full rounded-lg text-sm font-body font-medium transition-all
                ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-pkli-red/10 cursor-pointer"}
                ${isSelected ? "bg-pkli-red text-white shadow-md" : ""}
                ${isToday && !isSelected ? "ring-1 ring-pkli-red text-pkli-red font-bold" : ""}
                ${!disabled && !isSelected && !isToday ? "text-gray-700" : ""}
              `}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>

      <p className="text-[10px] text-gray-400 font-body text-center mt-3">
        Weekends &amp; past dates unavailable
      </p>
    </div>
  );
}

/* ─── Booking Modal ─── */
function BookingModal({
  doctor, onClose,
}: { doctor: Doctor; onClose: () => void }) {
  const today = new Date(); today.setHours(0,0,0,0);
  const [calMonth, setCalMonth]       = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed]       = useState(false);

  const slots = useMemo<SlotGroup | null>(
    () => (selectedDate ? getMockSlots(doctor.id, selectedDate) : null),
    [doctor.id, selectedDate]
  );

  const handleDateSelect = (d: Date) => { setSelectedDate(d); setSelectedSlot(null); };
  const handleConfirm = () => { if (selectedSlot) setConfirmed(true); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-pkli-navy/70 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 8 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Modal header */}
        <div className="flex items-center gap-4 px-4 md:px-7 py-4 md:py-5 border-b border-gray-100">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-pkli-red/20">
            <DoctorAvatar src={doctor.image} initials={doctor.initials} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-xl text-pkli-navy tracking-wide leading-tight truncate">
              {doctor.name}
            </h3>
            <p className="text-pkli-red text-[10px] font-bold tracking-[0.15em] uppercase font-body">
              {doctor.role} — {doctor.department}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {confirmed ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-3xl text-pkli-navy tracking-wide mb-2">Appointment Confirmed!</h4>
                <p className="text-gray-500 font-body text-sm mb-1">
                  Your appointment with <strong className="text-pkli-navy">{doctor.name}</strong> has been booked.
                </p>
                <div className="mt-5 bg-[#F7F9FC] rounded-2xl px-8 py-4 border border-gray-100 space-y-1 text-sm font-body">
                  <p className="text-gray-500"><span className="font-semibold text-pkli-navy">Date: </span>
                    {selectedDate?.toLocaleDateString("en-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <p className="text-gray-500"><span className="font-semibold text-pkli-navy">Time: </span>{selectedSlot}</p>
                  <p className="text-gray-500"><span className="font-semibold text-pkli-navy">Location: </span>{doctor.location}</p>
                </div>
                <p className="text-gray-400 text-xs font-body mt-4">A confirmation will be sent to your registered contact.</p>
                <button onClick={onClose} className="mt-7 px-8 py-3 bg-pkli-red hover:bg-pkli-red-dark text-white font-body font-bold text-sm rounded-xl transition-colors">
                  Done
                </button>
              </motion.div>
            ) : (
              /* ── Calendar + Slots ── */
              <motion.div key="picker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left: Calendar */}
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-pkli-red font-body mb-4 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Select Date
                  </p>
                  <MiniCalendar
                    month={calMonth}
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                    onMonthChange={setCalMonth}
                  />
                </div>

                {/* Right: Time slots */}
                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-pkli-red font-body mb-4 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Select Time
                  </p>

                  {!selectedDate && (
                    <div className="flex flex-col items-center justify-center h-48 text-center">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm font-body">Select a date to view available slots</p>
                    </div>
                  )}

                  {selectedDate && slots && !hasAnySlot(slots) && (
                    <div className="flex flex-col items-center justify-center h-48 text-center">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-pkli-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-pkli-navy font-body font-semibold text-sm mb-1">No slots available</p>
                      <p className="text-gray-400 text-xs font-body leading-relaxed">
                        No appointments available on{" "}
                        {selectedDate.toLocaleDateString("en-PK", { weekday: "short", month: "short", day: "numeric" })}.
                        <br />Please select another date.
                      </p>
                    </div>
                  )}

                  {selectedDate && slots && hasAnySlot(slots) && (
                    <div className="space-y-5 overflow-y-auto max-h-64">
                      {[
                        { label: "Morning", icon: "🌅", list: slots.morning },
                        { label: "Afternoon", icon: "☀️", list: slots.afternoon },
                        { label: "Evening", icon: "🌆", list: slots.evening },
                      ].filter(g => g.list.length > 0).map((group) => (
                        <div key={group.label}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-body mb-2 flex items-center gap-1.5">
                            <span>{group.icon}</span> {group.label}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.list.map((slot) => (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-body font-semibold border transition-all duration-150
                                  ${selectedSlot === slot
                                    ? "bg-pkli-red text-white border-pkli-red shadow-md"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-pkli-red hover:text-pkli-red"
                                  }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal footer */}
        {!confirmed && (
          <div className="px-4 md:px-7 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FAFBFC]">
            <div className="text-xs font-body text-gray-400">
              {selectedDate && selectedSlot
                ? `📅 ${selectedDate.toLocaleDateString("en-PK", { month: "short", day: "numeric" })} · ${selectedSlot}`
                : "Select date & time to confirm"}
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button onClick={onClose} className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-body font-semibold hover:border-gray-300 transition-colors">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedSlot}
                className={`px-6 py-2.5 rounded-xl text-sm font-body font-bold flex items-center gap-2 transition-all
                  ${selectedSlot
                    ? "bg-pkli-red hover:bg-pkli-red-dark text-white shadow-lg shadow-pkli-red/25"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────── Main Page ─────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function BookAppointmentPage() {
  const [locFilter, setLocFilter]     = useState("All Locations");
  const [deptFilter, setDeptFilter]   = useState("All Departments");
  const [docFilter, setDocFilter]     = useState("All Doctors");
  const [bookingDoc, setBookingDoc]   = useState<Doctor | null>(null);

  /* When department changes, reset doctor filter if no longer valid */
  const doctorOptions = useMemo(() => {
    const base = deptFilter === "All Departments" ? doctors : doctors.filter(d => d.department === deptFilter);
    return ["All Doctors", ...base.map(d => d.name)];
  }, [deptFilter]);

  useEffect(() => {
    if (docFilter !== "All Doctors" && !doctorOptions.includes(docFilter)) {
      setDocFilter("All Doctors");
    }
  }, [deptFilter, docFilter, doctorOptions]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      if (locFilter !== "All Locations" && !doc.location.includes(locFilter.replace(" (Main Campus)", ""))) return false;
      if (deptFilter !== "All Departments" && doc.department !== deptFilter) return false;
      if (docFilter !== "All Doctors" && doc.name !== docFilter) return false;
      return true;
    });
  }, [locFilter, deptFilter, docFilter]);

  const clearFilters = useCallback(() => {
    setLocFilter("All Locations");
    setDeptFilter("All Departments");
    setDocFilter("All Doctors");
  }, []);

  const isFiltered = locFilter !== "All Locations" || deptFilter !== "All Departments" || docFilter !== "All Doctors";

  return (
    <main className="min-h-screen pt-[60px] md:pt-[116px]">
      <Navbar />

      {/* ── Header ── */}
      <div className="bg-pkli-navy border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-7">
          <nav className="flex items-center gap-2 text-white/50 text-[11px] font-body mb-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">Patient Area</span>
            <span className="text-white/30">/</span>
            <span className="text-pkli-red font-semibold">Book Appointment</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl lg:text-3xl text-white tracking-wide leading-tight">
                Book an Appointment
              </h1>
              <p className="text-white/50 text-sm font-body mt-1">
                Browse our consultants and book a slot at your convenience.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-body">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online booking available
            </div>
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-[44px] z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-4">
          <div className="flex flex-wrap items-end gap-3">
            <SelectFilter label="Location" value={locFilter} options={LOCATIONS} onChange={setLocFilter} />
            <SelectFilter label="Department" value={deptFilter} options={DEPARTMENTS} onChange={setDeptFilter} />
            <SelectFilter label="Doctor" value={docFilter} options={doctorOptions} onChange={setDocFilter} />
            {isFiltered && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-4 py-3 text-pkli-red hover:bg-pkli-red/5 text-xs font-body font-bold rounded-xl border border-pkli-red/30 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="bg-[#F0F4F8] min-h-[60vh]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-10">

          {/* Count */}
          <div className="flex items-center justify-between mb-7">
            <p className="text-gray-500 text-sm font-body">
              Showing <span className="font-bold text-pkli-navy">{filteredDoctors.length}</span> consultant{filteredDoctors.length !== 1 ? "s" : ""}
              {isFiltered && <span className="text-pkli-red"> (filtered)</span>}
            </p>
          </div>

          {/* Doctor cards */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Top accent bar — same as Liver Transplant page */}
                  <div className="h-1.5 bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-pkli-red group-hover:to-pkli-red-dark transition-all duration-300" />

                  <div className="p-6 pb-7 flex flex-col items-center text-center">
                    {/* Circular photo */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 ring-gray-100 group-hover:ring-pkli-red/20 shadow-md transition-all duration-300">
                      <DoctorAvatar src={doc.image} initials={doc.initials} />
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

                    {/* Credentials */}
                    <p className="text-gray-400 text-[10px] font-body font-bold tracking-wide mb-1">{doc.credentials}</p>

                    {/* Role */}
                    <p className="text-pkli-red text-xs font-body font-bold tracking-wide mb-1.5">
                      {doc.role}
                    </p>

                    {/* Department */}
                    <p className="text-gray-400 text-[11px] font-body leading-relaxed">
                      {doc.department}
                    </p>

                    {/* Bottom actions */}
                    <div className="mt-5 pt-4 border-t border-gray-100 w-full space-y-2.5">
                      {/* View Profile — identical to Liver Transplant page */}
                      <div className="flex justify-center">
                        <Link
                          href={doc.profileHref}
                          className="inline-flex items-center gap-1.5 text-pkli-navy group-hover:text-pkli-red text-[10px] font-bold tracking-[0.18em] uppercase font-body transition-colors duration-200"
                        >
                          View Profile
                          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                      {/* Book Appointment */}
                      <button
                        onClick={() => setBookingDoc(doc)}
                        className="w-full py-2.5 bg-pkli-red hover:bg-pkli-red-dark text-white text-[10px] font-body font-bold tracking-[0.12em] uppercase rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-pkli-red/20"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-pkli-navy mb-2">No consultants found</h3>
              <p className="text-gray-400 text-sm font-body mb-5">No results match your current filters.</p>
              <button onClick={clearFilters} className="px-6 py-2.5 bg-pkli-red text-white text-sm font-body font-bold rounded-xl hover:bg-pkli-red-dark transition-colors">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Booking Modal ── */}
      <AnimatePresence>
        {bookingDoc && (
          <BookingModal doctor={bookingDoc} onClose={() => setBookingDoc(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
