"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    volume: number;
    setVolume: (vol: number) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
    const [isMuted, setIsMuted] = useState(false); // Default to unmuted, or persist in localStorage
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        // Optional: Persist mute state
        const savedMute = localStorage.getItem("mg_sound_muted");
        if (savedMute !== null) {
            setIsMuted(JSON.parse(savedMute));
        }
    }, []);

    const toggleMute = () => {
        setIsMuted((prev) => {
            const newState = !prev;
            localStorage.setItem("mg_sound_muted", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, volume, setVolume }}>
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
