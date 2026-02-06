"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Cpu, Printer, Scissors, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const machines = [
    {
        name: "MGI AccurioShine 3600",
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

import { useHaptics } from "@/hooks/use-haptics";
import { useSoundEffects } from "@/hooks/use-sound-effects";

// ... existing imports

export default function TechPowerSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { triggerHaptic } = useHaptics();
    const { playSound } = useSoundEffects();

    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % machines.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isHovered]);

    useEffect(() => {
        // Play sound on auto-change
        // Only if not first render to avoid noise on reload
        if (currentIndex > 0 || isHovered) {
            playSound("hover"); // Using hover sound for a soft swipe effect
        }
    }, [currentIndex, playSound, isHovered]);

    // Trigger effect on index change (Haptics)
    useEffect(() => {
        // Only trigger if we are somewhat visible or just generally on change
        // For carousel, a light tick is nice.
        triggerHaptic("selection");
    }, [currentIndex, triggerHaptic]);

    const handleNext = () => {
        playSound("click");
        triggerHaptic("light");
        setCurrentIndex((prev) => (prev + 1) % machines.length);
    };

    const handlePrev = () => {
        playSound("click");
        triggerHaptic("light");
        setCurrentIndex((prev) => (prev - 1 + machines.length) % machines.length);
    };

    const currentMachine = machines[currentIndex];

    // Map color classes to hex/rgba for styles (simplified for this example, using tailwind classes in render)
    // Actually we can just use the provided color class for text and derive glow colors or use a lookup.
    // For simplicity, let's map the tailwind color names to shadow colors manually or use dynamic styles if needed.
    // We'll stick to consistent shadows for now or try to use string interpolation if possible, but safe list might be an issue.
    // Let's use a mapping for the shadow color based on the index or name if we want specific colors.

    // Helper to get shadow color based on the machine's assigned color class
    const getShadowColor = (colorClass: string) => {
        if (colorClass.includes("neon-magenta")) return "rgba(255, 0, 255, 0.4)";
        if (colorClass.includes("neon-cyan")) return "rgba(0, 255, 255, 0.4)";
        if (colorClass.includes("neon-yellow")) return "rgba(229, 255, 0, 0.4)";
        return "rgba(255, 255, 255, 0.2)";
    };

    return (
        <section className="py-24 bg-black border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollAnimation animation="fadeInUp">
                    <div className="text-center mb-12">
                        <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">
                            Infrastructure
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Powered by Industrial <br className="hidden md:block" />Production Equipment
                        </h2>
                    </div>
                </ScrollAnimation>

                {/* Carousel Container */}
                <ScrollAnimation animation="scaleUp" delay={0.2}>
                    <div
                        className="relative w-full max-w-[90vw] mx-auto h-[80vh] bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group select-none"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Background Grid/Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />

                        {/* Content Wrapper */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    className="relative w-full h-full flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Machine Image with Glow */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {/* Radial Glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"
                                            animate={{
                                                opacity: isHovered ? 0.8 : 0.4,
                                                scale: isHovered ? 1.2 : 1
                                            }}
                                            style={{
                                                background: `radial-gradient(circle, ${getShadowColor(currentMachine.color)} 0%, transparent 70%)`
                                            }}
                                        />

                                        <Image
                                            src={currentMachine.image}
                                            alt={currentMachine.name}
                                            width={1200}
                                            height={900}
                                            className="object-contain relative z-10 w-full h-full drop-shadow-2xl"
                                            priority
                                        />
                                    </div>

                                    {/* Text Overlay (Fades out on Hover) */}
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/60 backdrop-blur-[2px] transition-all duration-500"
                                        animate={{ opacity: isHovered ? 0 : 1 }}
                                    >
                                        <div className={`p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 ${currentMachine.color}`}>
                                            <currentMachine.icon size={48} />
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center tracking-tight">
                                            {currentMachine.name}
                                        </h3>
                                        <p className={`text-xl font-bold uppercase tracking-widest mb-4 ${currentMachine.color}`}>
                                            {currentMachine.role}
                                        </p>
                                        <p className="text-gray-300 text-lg border-t border-white/20 pt-4 mt-2">
                                            {currentMachine.specs}
                                        </p>

                                        <div className="absolute bottom-10 animate-bounce text-white/50 text-sm font-mono flex items-center gap-2">
                                            <span>HOVER TO REVEAL</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls (Visible on Hover) */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                            <button
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="pointer-events-auto p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="pointer-events-auto p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                            {machines.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-neon-cyan" : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
