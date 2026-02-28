"use client";

import { useCallback } from "react";

type HapticType = "light" | "medium" | "heavy" | "success" | "error" | "selection";

// Detect iOS
const isIOS = typeof navigator !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent);

export function useHaptics() {
    const triggerHaptic = useCallback((type: HapticType) => {
        // Try native vibration API (works on Android)
        if (typeof navigator !== "undefined" && navigator.vibrate && !isIOS) {
            switch (type) {
                case "light":
                    navigator.vibrate(5);
                    break;
                case "medium":
                    navigator.vibrate(10);
                    break;
                case "heavy":
                    navigator.vibrate(20);
                    break;
                case "selection":
                    navigator.vibrate(2);
                    break;
                case "success":
                    navigator.vibrate([10, 30, 10]);
                    break;
                case "error":
                    navigator.vibrate([50, 50, 50]);
                    break;
                default:
                    navigator.vibrate(10);
            }
            return;
        }

        // Fallback for iOS: Use audio tick (handled by components that call this)
        // We'll dispatch a custom event that the audio system can listen to
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("haptic-fallback", { detail: { type } }));
        }
    }, []);

    return { triggerHaptic };
}
