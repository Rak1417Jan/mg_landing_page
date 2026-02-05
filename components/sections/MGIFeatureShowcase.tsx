"use client";

import { motion } from "framer-motion";
import { Check, X, Layers, Sparkles } from "lucide-react";

export default function MGIFeatureShowcase() {
    return (
        <section className="py-24 bg-graphite relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded bg-neon-magenta/20 flex items-center justify-center text-neon-magenta">
                                <Layers size={20} />
                            </div>
                            <span className="text-neon-magenta font-bold uppercase tracking-widest text-sm">
                                MGI JetVarnish 3D
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Digital Embellishment <br />
                            <span className="text-gray-500">Without Limits.</span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                            Eliminate the need for expensive dies and blocks. Our MGI technology applies Spot UV and 3D textures directly from your digital file.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                <Sparkles className="text-neon-yellow shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">Variable Data Foiling</h4>
                                    <p className="text-sm text-gray-400">Personalize every single sheet with unique names or patterns in gold foil.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                <Layers className="text-neon-cyan shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">3D Raised Texture</h4>
                                    <p className="text-sm text-gray-400">Tactile varnish up to 232 microns thick that you can literally feel.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Comparison */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-30 blur rounded-2xl" />
                        <div className="relative bg-black border border-white/10 rounded-2xl p-8 overflow-hidden">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                                Production Advantage
                            </h3>

                            <div className="grid grid-cols-2 gap-8">
                                {/* Old Way */}
                                <div className="opacity-50">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Traditional Hot Foil</h4>
                                    <ul className="space-y-3 text-sm text-gray-400">
                                        <li className="flex gap-2"><X size={16} className="text-red-500" /> Expensive Metal Dies</li>
                                        <li className="flex gap-2"><X size={16} className="text-red-500" /> Setup Time: Days</li>
                                        <li className="flex gap-2"><X size={16} className="text-red-500" /> High Min. Quantity</li>
                                        <li className="flex gap-2"><X size={16} className="text-red-500" /> Static Content Only</li>
                                    </ul>
                                </div>

                                {/* New Way */}
                                <div>
                                    <h4 className="text-sm font-bold text-neon-cyan uppercase mb-4">MGI Digital</h4>
                                    <ul className="space-y-3 text-sm text-white">
                                        <li className="flex gap-2"><Check size={16} className="text-neon-cyan" /> No Dies Required</li>
                                        <li className="flex gap-2"><Check size={16} className="text-neon-cyan" /> Setup Time: Minutes</li>
                                        <li className="flex gap-2"><Check size={16} className="text-neon-cyan" /> Print JUST ONE</li>
                                        <li className="flex gap-2"><Check size={16} className="text-neon-cyan" /> Variable Data Ready</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Visual Representation of Layers */}
                            <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Layer Build-up</p>
                                <div className="flex justify-center items-end gap-1 h-20">
                                    <motion.div className="w-8 bg-zinc-800" animate={{ height: "40%" }} />
                                    <motion.div className="w-8 bg-cyan-900" animate={{ height: "60%" }} />
                                    <motion.div className="w-8 bg-blue-600" animate={{ height: "100%" }} />
                                    <motion.div className="w-8 bg-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.5)]" animate={{ height: "80%" }} />
                                </div>
                                <p className="text-xs text-gray-600 mt-2">Paper • Toner • Varnish • Foil</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
