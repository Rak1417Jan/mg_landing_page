"use client";

import { motion } from "framer-motion";
import { Scissors, Sticker, Package } from "lucide-react";

export default function DieCuttingSection() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 border-l-4 border-neon-yellow">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            Die Cutting & Labels
                        </h2>
                        <p className="text-gray-400">Powered by <span className="text-neon-yellow font-bold">IECHO Digital Cutting</span> System</p>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <span className="text-xs font-bold bg-zinc-800 text-white px-3 py-1 rounded uppercase">No Minimum qty</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-neon-yellow/50 transition-colors group"
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                            <Sticker size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Custom Shape Stickers</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Kiss-cut labels on sheets or individual die-cut stickers. Any shape, any size.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Paper & Vinyl</li>
                            <li>• Gold/Silver Polyester</li>
                            <li>• Clear on Clear</li>
                        </ul>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-neon-yellow/50 transition-colors group"
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                            <Scissors size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Short-Run Packaging</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Printed and cut prototypes on folding carton board (up to 350gsm).
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Product Boxes</li>
                            <li>• Sleeve Packaging</li>
                            <li>• Header Cards</li>
                        </ul>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-neon-yellow/50 transition-colors group"
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                            <Package size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Finishing Operations</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Precision cutting and creasing for complex folding projects.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Half-Cutting</li>
                            <li>• Creasing / Scoring</li>
                            <li>• Perforation</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
