"use client";

import { useCallback } from "react";

type HapticType = "light" | "medium" | "heavy" | "success" | "error" | "selection";

export function useHaptics() {
    const triggerHaptic = useCallback((type: HapticType) => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            switch (type) {
                case "light":
                    navigator.vibrate(5); // Very subtle
                    break;
                case "medium":
                    navigator.vibrate(10);
                    break;
                case "heavy":
                    navigator.vibrate(20);
                    break;
                case "selection":
                    navigator.vibrate(2); // Extremely subtle, like picker
                    break;
                case "success":
                    navigator.vibrate([10, 30, 10]); // Pattern
                    break;
                case "error":
                    navigator.vibrate([50, 50, 50]); // Pattern
                    break;
                default:
                    navigator.vibrate(10);
            }
        }
    }, []);

    return { triggerHaptic };
}
