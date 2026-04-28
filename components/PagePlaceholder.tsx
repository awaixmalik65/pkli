import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  section: string;
  title: string;
}

export default function PagePlaceholder({ section, title }: Props) {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[116px]">
      <Navbar />

      {/* Page hero */}
      <div className="bg-pkli-navy py-14">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <p className="text-pkli-red text-xs font-bold tracking-[0.2em] uppercase font-body mb-3 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-pkli-red rounded-full" />
            {section}
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide">{title}</h1>
        </div>
      </div>

      {/* Placeholder body */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20">
        <div className="flex flex-col items-center justify-center text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
          <div className="w-16 h-16 rounded-2xl bg-pkli-red/10 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-pkli-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl text-pkli-navy tracking-wide mb-2">{title}</h2>
          <p className="text-gray-400 text-sm font-body max-w-sm">
            This page is currently being developed. Content will be available soon.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
