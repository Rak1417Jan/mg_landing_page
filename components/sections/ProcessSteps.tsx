"use client";

import { motion } from "framer-motion";
import { UploadCloud, FileCheck, Printer, Truck } from "lucide-react";

const steps = [
    { id: 1, title: "Upload Artwork", desc: "Share your file via WhatsApp or Email.", icon: UploadCloud },
    { id: 2, title: "File Check", desc: "We review dimensions and finishes.", icon: FileCheck },
    { id: 3, title: "Production", desc: "Premium printing & finishing starts.", icon: Printer },
    { id: 4, title: "Dispatch", desc: "Pickup or delivery within hours.", icon: Truck },
];

export default function ProcessSteps() {
    return (
        <section id="process" className="py-24 bg-graphite border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Streamlined Workflow</h2>
                    <p className="text-gray-400">From concept to reality in four simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-neon-cyan/20 via-neon-magenta/20 to-neon-yellow/20" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="relative flex flex-col items-center text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-neon-cyan transition-colors shadow-lg">
                                <step.icon size={32} className="text-gray-300 group-hover:text-neon-cyan transition-colors" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center text-sm font-bold border border-black">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm max-w-[200px]">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
