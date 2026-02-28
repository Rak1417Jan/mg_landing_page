"use client";

import { useCallback, useEffect, useRef } from "react";
import { useSoundContext } from "@/components/providers/SoundProvider";

type SoundType = "hover" | "click" | "reveal" | "success" | "notification" | "haptic-tick";

const SOUND_PATHS: Record<SoundType, string> = {
    hover: "/sounds/hover.mp3",
    click: "/sounds/click.mp3",
    reveal: "/sounds/reveal.mp3",
    success: "/sounds/success.mp3",
    notification: "/sounds/notification.mp3",
    "haptic-tick": "/sounds/click.mp3", // Reuse click for haptic fallback
};

export function useSoundEffects() {
    const { isMuted, volume, isAudioUnlocked } = useSoundContext();
    const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

    useEffect(() => {
        // Preload sounds
        Object.entries(SOUND_PATHS).forEach(([key, path]) => {
            if (!audioRefs.current[key]) {
                const audio = new Audio(path);
                audio.preload = "auto";
                audio.volume = volume * 0.3; // Quieter for haptic ticks
                audioRefs.current[key] = audio;
            }
        });
    }, [volume]);

    // Listen for haptic fallback events (iOS)
    useEffect(() => {
        const handleHapticFallback = (e: Event) => {
            const customEvent = e as CustomEvent;
            // Play a very short, quiet tick sound as haptic replacement
            playSound("haptic-tick");
        };

        window.addEventListener("haptic-fallback", handleHapticFallback);
        return () => window.removeEventListener("haptic-fallback", handleHapticFallback);
    }, []);

    const playSound = useCallback(
        (type: SoundType) => {
            if (isMuted) return;

            const audio = audioRefs.current[type];
            if (audio) {
                audio.volume = type === "haptic-tick" ? volume * 0.2 : volume;
                audio.currentTime = 0;

                // Attempt to play, fail silently if blocked
                audio.play().catch(() => {
                    // Silent failure as requested for iOS scroll sounds
                });
            }
        },
        [isMuted, volume]
    );

    return { playSound };
}
