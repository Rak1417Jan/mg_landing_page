"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Printer, Scissors, Layers } from "lucide-react";

const machines = [
    {
        name: "MGI JETVARNISH 3D",
        role: "Digital Embellishment",
        specs: "Spot UV, 3D Raised, Hot Foil",
        icon: Layers,
        color: "text-neon-magenta",
        image: "/images/mgi-hero.png" // Reusing hero for now, as it's the same machine
    },
    {
        name: "Ricoh Pro C7500",
        role: "Production Press",
        specs: "5-Color (CMYK + White/Neon)",
        icon: Printer,
        color: "text-neon-cyan",
        image: "/images/ricoh-c7500.png"
    },
    {
        name: "Konica Minolta AccurioPress",
        role: "High-Volume Print",
        specs: "Precision Color Consistency",
        icon: Printer,
        color: "text-white",
        image: "/images/konica-7136.png"
    },
    {
        name: "IECHO PK0705",
        role: "Digital Cutting",
        specs: "Die-less Shape Cutting",
        icon: Scissors,
        color: "text-neon-yellow",
        image: "/images/iecho-cutter.png"
    },
    {
        name: "Polar 76EM",
        role: "Finishing",
        specs: "German Precision Cutting",
        icon: Scissors,
        color: "text-gray-400",
        image: "/images/polar-cutter.png"
    },
];

export default function TechPowerSection() {
    return (
        <section className="py-20 bg-black border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">
                        Infrastructure
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Powered by Industrial<br /> Production Equipment
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We are not a photocopy shop. We are a fully equipped digital factory.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {machines.map((machine, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-zinc-900/50 border border-white/5 rounded-lg overflow-hidden hover:border-white/20 transition-all group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Machine Image area */}
                            <div className="h-32 bg-zinc-900 border-b border-white/5 p-4 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50 z-10" />
                                <Image
                                    src={machine.image}
                                    alt={machine.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain relative z-0 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className={`mb-4 ${machine.color}`}>
                                    <machine.icon size={24} />
                                </div>
                                <h3 className="text-white font-bold text-base mb-1 leading-tight group-hover:text-neon-cyan transition-colors">
                                    {machine.name}
                                </h3>
                                <p className="text-xs font-bold text-gray-500 uppercase mb-2">
                                    {machine.role}
                                </p>
                                <p className="text-sm text-gray-400 border-t border-white/5 pt-2 mt-auto">
                                    {machine.specs}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
