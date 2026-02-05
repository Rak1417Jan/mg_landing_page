"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import clsx from "clsx";

const comparisons = [
    {
        feature: "Turnaround Time",
        traditional: "Days / Weeks",
        digital: "Hours / SAME DAY",
        digitalColor: "text-neon-cyan",
    },
    {
        feature: "Minimum Quantity",
        traditional: "High (1000+)",
        digital: "ONE (No Minimum)",
        digitalColor: "text-neon-magenta",
    },
    {
        feature: "Customization",
        traditional: "Static (All Same)",
        digital: "Variable Data (Each Unique)",
        digitalColor: "text-neon-yellow",
    },
    {
        feature: "Setup Costs",
        traditional: "Expensive Plates",
        digital: "Zero ($0)",
        digitalColor: "text-green-400",
    },
];

export default function DigitalVsTraditional() {
    return (
        <section className="py-24 bg-graphite relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Rethink Production.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Traditional offset printing is slow and rigid. Digital production is agile, precise, and limitless.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Traditional Side (Dimmed) */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-gray-400 mb-8 border-b border-white/10 pb-4">
                            Traditional Offset
                        </h3>
                        <div className="space-y-6">
                            {comparisons.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between group">
                                    <span className="text-gray-500 font-medium">{item.feature}</span>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <span className="text-right text-sm">{item.traditional}</span>
                                        <X size={16} className="text-red-500/50" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Digital Side (Highlighted) */}
                    <motion.div
                        className="bg-black border border-neon-cyan/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.1)] relative"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse delay-75"></div>
                                <div className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse delay-150"></div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                            MG Digital Precision
                            <span className="text-xs bg-neon-cyan text-black px-2 py-1 rounded font-bold uppercase">Next Gen</span>
                        </h3>

                        <div className="space-y-6">
                            {comparisons.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <span className="text-gray-300 font-medium">{item.feature}</span>
                                    <motion.div
                                        className={clsx("flex items-center gap-2 font-bold", item.digitalColor)}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <span className="text-right text-sm md:text-base">{item.digital}</span>
                                        <Check size={18} />
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Animated Progress Bar Simulation */}
                        <div className="mt-10 pt-6 border-t border-white/10">
                            <div className="flex justify-between text-xs text-gray-500 mb-2 uppercase tracking-wider">
                                <span>File Uploaded</span>
                                <span>Processing</span>
                                <span>Production</span>
                                <span>Ready</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-yellow"
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
