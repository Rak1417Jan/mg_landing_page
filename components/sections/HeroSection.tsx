"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ScanLine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import QuoteModal from "@/components/ui/QuoteModal";
import { useState } from "react";

// ... imports

export default function HeroSection() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-graphite pt-20">
            {/* Quote Modal */}
            <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

            {/* Abstract Tech Background & Video */}
            <div className="absolute inset-0 z-0 opacity-40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                >
                    <source src="/images/digitalfoil.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center h-full">

                {/* Text Content */}
                <motion.div
                    className="max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-neon-cyan mb-8 backdrop-blur-md mx-auto">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        Industrial Digital Production
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight">
                        Print That You Can <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta">
                            Feel.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium max-w-2xl mx-auto">
                        Digital Spot UV & Foil on <span className="text-white">MGI Konica Minolta</span> Technology.
                    </p>
                    <p className="text-sm md:text-base text-gray-500 mb-10 uppercase tracking-wide">
                        5-Color Digital Printing + Embellishment in One Workflow
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wide overflow-hidden flex items-center gap-2 hover:bg-neon-cyan transition-colors rounded-sm"
                        >
                            <span className="relative z-10">Get a Quote</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Link
                            href="https://wa.me/919257035570"
                            target="_blank"
                            className="group px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                            <MessageCircle size={18} />
                            <span>WhatsApp Now</span>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
