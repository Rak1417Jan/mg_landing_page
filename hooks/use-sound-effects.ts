"use client";

import { useCallback, useEffect, useRef } from "react";
import { useSoundContext } from "@/components/providers/SoundProvider";

type SoundType = "hover" | "click" | "reveal" | "success" | "notification";

const SOUND_PATHS: Record<SoundType, string> = {
    hover: "/sounds/hover.mp3",
    click: "/sounds/click.mp3",
    reveal: "/sounds/reveal.mp3",
    success: "/sounds/success.mp3",
    notification: "/sounds/notification.mp3",
};

export function useSoundEffects() {
    const { isMuted, volume } = useSoundContext();
    const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

    useEffect(() => {
        // Preload sounds
        Object.entries(SOUND_PATHS).forEach(([key, path]) => {
            if (!audioRefs.current[key]) {
                const audio = new Audio(path);
                audio.preload = "auto";
                audioRefs.current[key] = audio;
            }
        });
    }, []);

    const playSound = useCallback(
        (type: SoundType) => {
            // We only play if explicitly interactive or allowed. 
            // Note: Browsers block autoplay, so this works on user interaction (hover/click).
            // For scroll reveal, it might be blocked until first interaction.
            if (isMuted) return;

            const audio = audioRefs.current[type];
            if (audio) {
                audio.volume = volume;
                audio.currentTime = 0; // Reset to start
                audio.play().catch((err) => {
                    // Ignore play errors (e.g. user hasn't interacted yet)
                    console.debug("Audio play blocked:", err);
                });
            }
        },
        [isMuted, volume]
    );

    return { playSound };
}
