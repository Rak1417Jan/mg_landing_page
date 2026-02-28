"use client";

import { useSoundContext } from "@/components/providers/SoundProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function AudioUnlockPrompt() {
    const { isAudioUnlocked, unlockAudio } = useSoundContext();
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // Show prompt immediately on mount if audio isn't unlocked
        const timer = setTimeout(() => {
            if (!isAudioUnlocked) {
                setShowPrompt(true);
            }
        }, 1000); // Small delay to not be jarring

        return () => clearTimeout(timer);
    }, [isAudioUnlocked]);

    const handleUnlock = async () => {
        await unlockAudio();
        setShowPrompt(false);
    };

    // Auto-hide when audio is unlocked
    useEffect(() => {
        if (isAudioUnlocked) {
            setShowPrompt(false);
        }
    }, [isAudioUnlocked]);

    return (
        <AnimatePresence>
            {showPrompt && !isAudioUnlocked && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-24 right-6 z-40 max-w-xs"
                >
                    <button
                        onClick={handleUnlock}
                        className="flex items-center gap-3 px-4 py-3 bg-black/90 backdrop-blur-md border border-neon-cyan/30 rounded-xl text-white shadow-lg hover:bg-neon-cyan/10 transition-all group"
                    >
                        <div className="p-2 rounded-full bg-neon-cyan/20 group-hover:bg-neon-cyan/30 transition-colors">
                            <Volume2 size={20} className="text-neon-cyan" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-semibold">Enable Sound Effects</p>
                            <p className="text-xs text-gray-400">Tap to unlock audio</p>
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
