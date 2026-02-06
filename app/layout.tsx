import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { SoundProvider } from "@/components/providers/SoundProvider";
import SoundController from "@/components/ui/SoundController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MG Digital Press | Premium Digital Printing & Finishing",
  description: "Where Print Becomes Experience. Engineered surfaces, precision finishes, and rapid prototyping in Jaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neon-cyan selection:text-black`}
      >
        <SoundProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingWhatsApp />
          <SoundController />
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
