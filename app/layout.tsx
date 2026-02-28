import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { LanguageProvider } from "@/components/providers/TranslationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MG Digital Press | Premium Digital Printing & Packaging Solutions",
  description: "Discover complete digital printing solutions with MG Digital Press. We specialize in high-volume, 5-color printing, 3D Spot UV, and precision die-cutting.",
  alternates: {
    canonical: "https://mgdigitalpress.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MG Digital Press",
              "image": "https://mgdigitalpress.com/images/logo.png",
              "url": "https://mgdigitalpress.com",
              "telephone": "+919257035570",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-60/A, Sudarshanpura Industrial Area, 22 Godam",
                "addressLocality": "Jaipur",
                "postalCode": "302006",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neon-cyan selection:text-black`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingWhatsApp />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
