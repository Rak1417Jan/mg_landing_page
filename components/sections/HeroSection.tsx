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

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    className="order-2 lg:order-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-neon-cyan mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        Industrial Digital Production
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
                        Print That You Can <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta">
                            Feel.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-2 font-medium">
                        Digital Spot UV & Foil on <span className="text-white">MGI Konica Minolta</span> Technology.
                    </p>
                    <p className="text-sm text-gray-500 mb-8 uppercase tracking-wide">
                        5-Color Digital Printing + Embellishment in One Workflow
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

                {/* MGI Machine Visual with Holographic Scanner Effect */}
                <motion.div
                    className="order-1 lg:order-2 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.25 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Machine Image */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center group">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/mgi-hero.png"
                                alt="MGI AccurioShine 3600"
                                width={800}
                                height={600}
                                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,255,255,0.15)] relative z-10"
                                priority
                            />
                        </div>

                        {/* Holographic Scanner Overlay REMOVED */}

                        {/* Tech Specs Floating Markers */}
                        <motion.div
                            className="absolute top-1/4 right-12 md:right-20 z-30"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-neon-magenta rounded-full animate-ping" />
                                <span className="text-xs text-neon-magenta font-mono bg-black/80 px-2 py-1 border border-neon-magenta/30 backdrop-blur-sm">SPOT UV READY</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-1/3 left-0 z-30"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-neon-yellow rounded-full animate-ping" />
                                <span className="text-xs text-neon-yellow font-mono bg-black/80 px-2 py-1 border border-neon-yellow/30 backdrop-blur-sm">iFOIL MODULE ACTIVE</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Reflection / Floor Glow */}
                    <div className="absolute -bottom-10 left-10 right-10 h-20 bg-neon-cyan/20 blur-[60px]" />
                </motion.div>

            </div>
        </section>
    );
}
