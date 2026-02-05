"use client";

import { motion } from "framer-motion";
import { Palette, Droplet, Layers } from "lucide-react";
import Image from "next/image";

export default function PrintingCapability() {
    return (
        <section className="py-24 bg-zinc-950 border-b border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">
                            Beyond CMYK
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            5-Color Production <br /> Printing
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We go beyond standard 4-color printing. Our <strong className="text-white">Ricoh Pro C7500</strong> and <strong className="text-white">Konica Minolta AccurioPress</strong> engines support a 5th color station for specialized applications.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white text-black rounded">
                                        <Droplet size={16} />
                                    </div>
                                    <h4 className="text-white font-bold">White Ink</h4>
                                </div>
                                <p className="text-sm text-gray-500">Print opacity on transparent, dark, or metallic stocks.</p>
                            </div>

                            <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-neon-cyan text-black rounded">
                                        <Palette size={16} />
                                    </div>
                                    <h4 className="text-white font-bold">Neon Colors</h4>
                                </div>
                                <p className="text-sm text-gray-500">Expand gamut with Neon Pink and Neon Yellow toners.</p>
                            </div>

                            <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-zinc-700 text-white rounded">
                                        <Layers size={16} />
                                    </div>
                                    <h4 className="text-white font-bold">Textured Media</h4>
                                </div>
                                <p className="text-sm text-gray-500">Flawless adhesion on textured papers up to 450gsm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Machine Visual / Graphic */}
                    <div className="lg:w-1/2 relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex items-center justify-center">
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square">
                            <Image
                                src="/images/cmyk_white_digital_print.jpeg"
                                alt="Ricoh Pro C7500 5-Color Production Printer"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full relative z-10 rounded-xl"
                            />

                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-neon-cyan/20 to-neon-magenta/20 blur-[80px] z-0" />

                            {/* Floating Badges */}
                            <motion.div
                                className="absolute top-10 right-0 bg-black/80 border border-white/10 px-4 py-2 rounded-lg backdrop-blur text-xs font-bold text-white z-20 flex items-center gap-2"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                White Ink Ready
                            </motion.div>

                            <motion.div
                                className="absolute bottom-10 left-0 bg-black/80 border border-white/10 px-4 py-2 rounded-lg backdrop-blur text-xs font-bold text-white z-20 flex items-center gap-2"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                                Neon Toner
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
