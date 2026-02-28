"use client";

import { useSoundContext } from "@/components/providers/SoundProvider";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { Volume2, VolumeX, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SoundController() {
    const { isMuted, toggleMute, volume, setVolume, unlockAudio } = useSoundContext();
    const { playSound } = useSoundEffects();
    const [mounted, setMounted] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Global Event Listeners for "Everywhere" Sound Effects
    useEffect(() => {
        if (typeof window === "undefined") return;

        const onMouseOverSmart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a, [role='button'], input, textarea, select");
            if (interactive) {
                const from = e.relatedTarget as Node | null;
                if (!from || (from !== interactive && !interactive.contains(from))) {
                    playSound("hover");
                }
            }
        };

        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a, [role='button']");
            if (interactive) {
                playSound("click");
                // Also unlock audio on first click
                unlockAudio();
            }
        };

        window.addEventListener("mouseover", onMouseOverSmart);
        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("mouseover", onMouseOverSmart);
            window.removeEventListener("click", onClick);
        };
    }, [playSound, unlockAudio]);

    if (!mounted) return null;

    return (
        <>
            {/* Settings Panel */}
            <AnimatePresence>
                {showSettings && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 left-6 z-50 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl min-w-[200px]"
                    >
                        <h3 className="text-white font-semibold mb-3 text-sm">Sound Settings</h3>

                        {/* Volume Slider */}
                        <div className="mb-3">
                            <label className="text-gray-400 text-xs mb-2 block">Volume</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume * 100}
                                onChange={(e) => setVolume(Number(e.target.value) / 100)}
                                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                            />
                            <span className="text-neon-cyan text-xs">{Math.round(volume * 100)}%</span>
                        </div>

                        {/* Mute Toggle */}
                        <button
                            onClick={toggleMute}
                            className="w-full flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <span className="text-white text-sm">Sound Effects</span>
                            <span className={`text-xs font-semibold ${isMuted ? "text-red-400" : "text-green-400"}`}>
                                {isMuted ? "OFF" : "ON"}
                            </span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSettings(!showSettings)}
                className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:bg-neon-cyan/10 transition-colors"
                title={isMuted ? "Sound Settings (Muted)" : "Sound Settings"}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isMuted ? (
                        <motion.div
                            key="muted"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <VolumeX size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="unmuted"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Volume2 size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
}
