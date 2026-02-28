"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    volume: number;
    setVolume: (vol: number) => void;
    isAudioUnlocked: boolean;
    unlockAudio: () => Promise<void>;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Persist mute state
        const savedMute = localStorage.getItem("mg_sound_muted");
        if (savedMute !== null) {
            setIsMuted(JSON.parse(savedMute));
        }

        // Initialize AudioContext
        if (typeof window !== "undefined" && !audioContextRef.current) {
            try {
                const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                audioContextRef.current = new AudioContextClass();
            } catch (err) {
                console.warn("AudioContext not supported:", err);
            }
        }
    }, []);

    const unlockAudio = async () => {
        if (!audioContextRef.current) return;

        try {
            if (audioContextRef.current.state === "suspended") {
                await audioContextRef.current.resume();
            }
            setIsAudioUnlocked(true);
            console.log("Audio unlocked successfully");
        } catch (err) {
            console.warn("Failed to unlock audio:", err);
        }
    };

    const toggleMute = () => {
        setIsMuted((prev) => {
            const newState = !prev;
            localStorage.setItem("mg_sound_muted", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, volume, setVolume, isAudioUnlocked, unlockAudio }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSoundContext() {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error("useSoundContext must be used within a SoundProvider");
    }
    return context;
}
