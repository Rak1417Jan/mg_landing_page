"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function FastTurnaroundCTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-neon-cyan/10 via-black to-neon-magenta/10 border-y border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-widest mb-4">
                        <Clock size={20} />
                        <span>Speed Matters</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        From file to finished product <br /> in <span className="text-neon-yellow">hours</span>.
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Don't let production timelines kill your creativity. We manufacture at the speed of thought.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-block px-10 py-5 bg-white text-black font-bold text-lg uppercase tracking-wide hover:bg-neon-cyan transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-sm"
                    >
                        Start Your Project
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
