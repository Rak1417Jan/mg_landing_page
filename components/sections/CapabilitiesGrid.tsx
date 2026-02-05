"use client";

import { motion } from "framer-motion";
import { Copy, Layers, Scissors, Stamp, Printer, FileStack, BookOpen, Package } from "lucide-react";
import clsx from "clsx";

const capabilities = [
    {
        title: "Digital Printing",
        description: "CMYK + White on varied stocks with offset-grade quality.",
        icon: Printer,
        color: "group-hover:text-neon-cyan",
        border: "group-hover:border-neon-cyan/50",
    },
    {
        title: "UV & Embossing",
        description: "Raised tactile finishes that demand to be touched.",
        icon: Layers,
        color: "group-hover:text-neon-magenta",
        border: "group-hover:border-neon-magenta/50",
    },
    {
        title: "Foil Printing",
        description: "Gold, Silver, and Holographic foils without expensive dies.",
        icon: Stamp,
        color: "group-hover:text-neon-yellow",
        border: "group-hover:border-neon-yellow/50",
    },
    {
        title: "Die Cutting",
        description: "Precision shape cutting for labels, cards, and prototypes.",
        icon: Scissors,
        color: "group-hover:text-white",
        border: "group-hover:border-white/50",
    },
    {
        title: "Lamination",
        description: "Velvet, Gloss, and Matte finishes for durability.",
        icon: Copy,
        color: "group-hover:text-neon-cyan",
        border: "group-hover:border-neon-cyan/50",
    },
    {
        title: "Binding",
        description: "Wiro, Center Pin, and Perfect Binding solutions.",
        icon: BookOpen,
        color: "group-hover:text-neon-magenta",
        border: "group-hover:border-neon-magenta/50",
    },
    {
        title: "Labels & Stickers",
        description: "Half-cut sheets and individual die-cut stickers.",
        icon: FileStack,
        color: "group-hover:text-neon-yellow",
        border: "group-hover:border-neon-yellow/50",
    },
    {
        title: "Packaging",
        description: "Short-run boxes and sleeves for product testing.",
        icon: Package,
        color: "group-hover:text-white",
        border: "group-hover:border-white/50",
    },
];

export default function CapabilitiesGrid() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Production Capabilities
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mb-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            className={clsx(
                                "group relative p-8 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-all duration-300 rounded-xl overflow-hidden",
                                cap.border
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={clsx("mb-6 transition-colors duration-300", "text-zinc-500", cap.color)}>
                                <cap.icon size={40} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                                {cap.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {cap.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
