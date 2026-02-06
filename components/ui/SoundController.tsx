"use client";

import { useSoundContext } from "@/components/providers/SoundProvider";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SoundController() {
    const { isMuted, toggleMute } = useSoundContext();
    const { playSound } = useSoundEffects();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Global Event Listeners for "Everywhere" Sound Effects
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleInteraction = (e: MouseEvent, type: "hover" | "click") => {
            const target = e.target as HTMLElement;
            // Check if the target is interactive (button, link, or specific classes)
            const interactive = target.closest("button, a, [role='button'], .hover-sound");

            if (interactive) {
                // Determine if we should play logic (debouncing could be added if needed)
                if (type === "hover") {
                    // Prevent crazy spam if moving within same element (mouseenter vs mouseover)
                    // We use mouseover delegated, so we rely on the event firing.
                    playSound("hover");
                } else if (type === "click") {
                    playSound("click");
                }
            }
        };

        const onMouseOver = (e: MouseEvent) => handleInteraction(e, "hover");
        const onClick = (e: MouseEvent) => handleInteraction(e, "click");

        // Use capture to ensure we catch it before strict stopPropagation (though bubbling is usually fine)
        // Check performance implications? it's just a check.
        // For hover, 'mouseover' bubbles. 'mouseenter' does not. Delegated 'mouseover' is standard.
        // But 'mouseover' fires many times when moving inside children. 'mouseenter' doesn't bubble so can't be delegated easily on body.
        // Solution: check if the relatedTarget is same container. Or simplified: just play sound. 
        // Better: standard delegation with check.

        // Actually, for a truly "sober" effect, maybe we only want it when entering the element, not moving inside.
        // Implementing a smart hover listener that only triggers when entering the interactive zone.
        const onMouseOverSmart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a, [role='button'], input, textarea, select");
            if (interactive) {
                // Check if we just entered this specific interactive element
                // e.relatedTarget is where we came from.
                const from = e.relatedTarget as Node | null;
                if (!from || (from !== interactive && !interactive.contains(from))) {
                    playSound("hover");
                }
            }
        };

        window.addEventListener("mouseover", onMouseOverSmart);
        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("mouseover", onMouseOverSmart);
            window.removeEventListener("click", onClick);
        };
    }, [playSound]);

    if (!mounted) return null;

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
                // Prevent double click sound from global listener? 
                // The global listener will catch this too. That's fine.
                // Or stopPropagation? 
                // e.stopPropagation(); // If we stop here, we might miss other logic.
                // Let's just let it play or let the global handle it.
                toggleMute();
            }}
            className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:bg-neon-cyan/10 transition-colors"
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
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
    );
}
