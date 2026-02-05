"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/919257035570"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:bg-[#128C7E] transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        >
            <MessageCircle size={28} />
        </motion.a>
    );
}
