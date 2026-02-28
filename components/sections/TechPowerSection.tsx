"use client";

import { useHaptics } from "@/hooks/use-haptics";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Layers, Printer, Scissors } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const machines = [
    {
        name: "MGI AccurioShine 3600",
        role: "Digital Embellishment",
        specs: "Spot UV, 3D Raised, Hot Foil",
        icon: Layers,
        color: "text-neon-magenta",
        image: "/images/mgi-hero.png"
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const { triggerHaptic } = useHaptics();
    const { playSound } = useSoundEffects();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const newIndex = Math.min(
            Math.floor(latest * machines.length),
            machines.length - 1
        );
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            triggerHaptic("selection");
            playSound("reveal");
        }
    });

    return (
        <section ref={containerRef} className="relative bg-black" style={{ height: `${machines.length * 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col lg:flex-row">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[40%] h-[40vh] lg:h-full flex flex-col justify-center px-6 lg:px-12 relative z-20 bg-black/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-b-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 lg:mb-12"
                    >
                        <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">
                            Infrastructure
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Powered by <br /> Industrial Grade <br /> Equipment
                        </h2>
                    </motion.div>

                    <div className="relative h-48 lg:h-64">
                        {machines.map((machine, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <div className={`p-3 w-fit rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-4 ${machine.color}`}>
                                    <machine.icon size={32} />
                                </div>
                                <h3 className="text-3xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                                    {machine.name}
                                </h3>
                                <p className={`text-lg lg:text-xl font-bold uppercase tracking-widest mb-4 ${machine.color}`}>
                                    {machine.role}
                                </p>
                                <p className="text-gray-400 text-base lg:text-lg border-t border-white/10 pt-4 mt-2">
                                    {machine.specs}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-neon-cyan"
                            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        />
                    </div>
                </div>

                {/* Right Side: Machine Visuals */}
                <div className="w-full lg:w-[60%] h-[60vh] lg:h-full relative overflow-hidden flex items-center justify-center">

                    {machines.map((machine, index) => {
                        // Determine visual state based on active index
                        const isActive = index === activeIndex;
                        const isPast = index < activeIndex;

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 flex items-center justify-center p-8 lg:p-16"
                                initial={false}
                                animate={{
                                    x: isActive ? "0%" : isPast ? "-100%" : "100%",
                                    rotate: isActive ? 0 : isPast ? -15 : 15,
                                    scale: isActive ? 1.4 : 0.3, // Even more dramatic: 1.4 active, 0.3 inactive
                                    opacity: isActive ? 1 : 0
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                            >
                                <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
                                    {/* Continuous Breathing Animation when Active */}
                                    {isActive ? (
                                        <motion.div
                                            className="w-full h-full flex items-center justify-center"
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Image
                                                src={machine.image}
                                                alt={machine.name}
                                                width={1200}
                                                height={900}
                                                className="object-contain w-full h-full drop-shadow-2xl relative z-10"
                                                priority={index === 0}
                                            />
                                        </motion.div>
                                    ) : (
                                        <Image
                                            src={machine.image}
                                            alt={machine.name}
                                            width={1200}
                                            height={900}
                                            className="object-contain w-full h-full drop-shadow-2xl relative z-10"
                                            priority={index === 0}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
