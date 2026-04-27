import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PKLI — Pakistan Kidney & Liver Institute | World-Class Healthcare",
  description:
    "Pakistan Kidney and Liver Institute and Research Center — JCI Accredited. Expert specialty care in nephrology, hepatology, transplantation, and more.",
  keywords: "PKLI, kidney transplant, liver transplant, Lahore hospital, JCI accreditation, Pakistan healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
