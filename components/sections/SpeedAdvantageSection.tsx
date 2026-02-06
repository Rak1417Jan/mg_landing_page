"use client";

import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function SpeedAdvantageSection() {
    return (
        <section className="py-24 bg-gradient-to-r from-neon-cyan/5 via-black to-neon-magenta/5 border-y border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <ScrollAnimation animation="scaleUp" duration={0.8}>
                    <div className="inline-flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-widest mb-4">
                        <Zap size={20} />
                        <span>The Speed Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
                        From File to Finished <br /> Product in <span className="text-neon-yellow">Hours</span>.
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
                        {/* Offset */}
                        <div className="text-center opacity-40">
                            <div className="text-3xl font-bold text-gray-400 mb-2">OFFSET</div>
                            <div className="h-2 w-48 bg-gray-700 rounded-full mx-auto relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-1/4 bg-gray-500" />
                            </div>
                            <div className="mt-2 text-sm text-gray-500">3-5 DAYS</div>
                        </div>

                        {/* VS */}
                        <div className="text-2xl font-black text-white/20 italic">VS</div>

                        {/* MG Digital */}
                        <div className="text-center scale-110">
                            <div className="text-4xl font-black text-white mb-2">MG DIGITAL</div>
                            <div className="h-4 w-64 bg-gray-800 rounded-full mx-auto relative overflow-hidden ring-2 ring-neon-cyan/50">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                />
                            </div>
                            <div className="mt-3 text-lg font-bold text-neon-cyan flex items-center justify-center gap-2">
                                <Clock size={16} />
                                SAME DAY / HOURS
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
