"use client";

import { motion, useInView, UseInViewOptions, Variant } from "framer-motion";
import { useRef } from "react";

type AnimationType =
    | "fadeInUp"
    | "fadeIn"
    | "scaleUp"
    | "slideRight"
    | "slideLeft"
    | "none";

// ... existing imports

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    viewport?: UseInViewOptions;
    as?: React.ElementType; // allow rendering as different tags (e.g. span, section)
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
    fadeInUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    none: {
        hidden: {},
        visible: {},
    },
};

export default function ScrollAnimation({
    children,
    animation = "fadeInUp",
    delay = 0,
    duration = 0.6,
    className = "",
    viewport = { once: true, margin: "-10%" },
    as = "div",
}: ScrollAnimationProps) {
    const Component = motion[as as keyof typeof motion] as any;

    return (
        <Component
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </Component>
    );
}
