"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Printer, Star } from "lucide-react";

const usps = [
    { text: "DIGITAL SPOT UV", icon: Layers },
    { text: "DIGITAL FOIL (Gold / Silver / Colors)", icon: Star },
    { text: "NO DIES OR PLATES", icon: Zap },
    { text: "SHORT RUN PRODUCTION", icon: Printer },
    { text: "SAME DAY DELIVERY", icon: Zap },
    { text: "5 COLOR DIGITAL PRINTING (CMYK + WHITE)", icon: Printer },
];

export default function CoreUSPStrip() {
    return (
        <section className="bg-neon-cyan text-black py-4 overflow-hidden relative z-20">
            <div className="flex whitespace-nowrap">
                {/* Infinite Scroll Wrapper */}
                <motion.div
                    className="flex gap-12 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {/* Duplicated list for infinite loop */}
                    {[...usps, ...usps, ...usps].map((usp, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <usp.icon size={18} strokeWidth={2.5} />
                            <span className="text-sm md:text-base font-black tracking-wider uppercase">
                                {usp.text}
                            </span>
                            <div className="w-1.5 h-1.5 bg-black rounded-full ml-12" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
