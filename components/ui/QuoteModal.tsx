"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            requirement: formData.get("requirement"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    onClose(); // Close modal after success
                }, 3000);
            } else {
                setError("Failed to send. Please try again or WhatsApp us.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-2">Get a Fast Quote</h2>
                        <p className="text-gray-400 text-sm mb-6">
                            Enter your details and we'll reply within 30 mins.
                        </p>

                        {success ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="text-green-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
                                <p className="text-gray-400">We will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                                    <input
                                        name="phone"
                                        required
                                        type="tel"
                                        className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email (Optional)</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Requirement</label>
                                    <textarea
                                        name="requirement"
                                        required
                                        rows={3}
                                        className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none"
                                        placeholder="E.g. 500 Business Cards, Gold Foil..."
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="w-full py-3 bg-neon-cyan text-black font-bold uppercase rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                                    {loading ? "Sending..." : "Send Request"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
