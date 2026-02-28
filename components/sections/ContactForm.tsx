"use client";

import { useState, useEffect } from "react";
import { Upload, Send, MessageCircle, X } from "lucide-react";
import clsx from "clsx";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            if (files.length + selectedFiles.length > 2) {
                setError("Maximum 2 files allowed.");
                return;
            }
            setSelectedFiles((prev) => [...prev, ...files].slice(0, 2));
            setError("");
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files = Array.from(e.dataTransfer.files);
            if (files.length + selectedFiles.length > 2) {
                setError("Maximum 2 files allowed.");
                return;
            }
            setSelectedFiles((prev) => [...prev, ...files].slice(0, 2));
            setError("");
        }
    };

    const removeFile = (index: number) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);

        // Append selected files
        selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        // Ensure requirement is populated (mapping message -> requirement)
        formData.append("requirement", formData.get("message") as string);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSuccess(true);
                setSelectedFiles([]);
                formElement.reset();
            } else {
                setError("Failed to send. Please try again or WhatsApp us.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ... existing logic ...

    // ... existing logic ...

    if (success) {
        return (
            <section id="contact" className="py-24 bg-black relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-xl mx-auto text-center py-12 bg-zinc-900 border border-white/10 rounded-2xl">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="text-green-500" size={40} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
                        <p className="text-gray-400 mb-8">We have received your enquiry and will contact you shortly.</p>
                        <button onClick={() => setSuccess(false)} className="text-neon-cyan hover:underline">
                            Send another request
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <span className="text-neon-cyan text-sm font-bold uppercase tracking-widest mb-2 block">Start Production</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to print?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Send us your file or requirement. We will check it and send you a quote within 30 minutes.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-2">Production Studio</h4>
                                <p className="text-gray-400">B-60/A, Sudarshanpura Industrial Area,</p>
                                <p className="text-gray-400">22 Godam, Jaipur, 302006</p>
                                <a
                                    href="https://maps.app.goo.gl/uUfs9uQs2y624zAu7?g_st=ic"
                                    target="_blank"
                                    className="text-xs text-neon-cyan mt-2 inline-block hover:underline"
                                >
                                    View on Google Maps →
                                </a>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Direct Line</h4>
                                <div className="space-y-1">
                                    <a href="tel:+919257035570" className="block text-2xl font-mono text-white hover:text-neon-cyan transition-colors">
                                        +91 92570 35570
                                    </a>
                                    <a href="tel:+919784112272" className="block text-lg font-mono text-gray-300 hover:text-neon-cyan transition-colors">
                                        +91 97841 12272
                                    </a>
                                    <a href="tel:+9101414503777" className="block text-md font-mono text-gray-400 hover:text-neon-cyan transition-colors">
                                        0141-4503777
                                    </a>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Available 9 AM - 9 PM</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Email</h4>
                                <a href="mailto:printmgd@gmail.com" className="text-lg text-white hover:text-neon-cyan transition-colors">
                                    printmgd@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                    <input name="name" required type="text" className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                                    <input name="phone" required type="tel" className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="+91 90000 00000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                <input name="email" required type="email" className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="you@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Requirement</label>
                                <textarea name="message" required rows={4} className="w-full bg-black/50 border border-white/20 rounded p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Describe your project (Qty, Size, Paper, Finishes)..."></textarea>
                            </div>

                            {/* File Upload Simulation */}
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                    Upload File (Optional - Max 2)
                                </label>
                                <div
                                    className={clsx(
                                        "border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer relative",
                                        dragActive ? "border-neon-cyan bg-neon-cyan/5" : "border-white/10 hover:border-white/30 hover:bg-white/5"
                                    )}
                                    onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
                                    onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
                                    onDragOver={(e) => { e.preventDefault(); }}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        multiple
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                        accept=".pdf,.ai,.cdr,.jpg,.jpeg,.png"
                                    />
                                    <Upload className="mx-auto text-gray-500 mb-2" size={24} />
                                    <p className="text-sm text-gray-400">Drag & drop or click to upload</p>
                                    <p className="text-xs text-gray-600 mt-1">PDF, AI, CDR, JPG, PNG (Max 5MB)</p>
                                </div>

                                {/* File Preview List */}
                                {selectedFiles.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {selectedFiles.map((file, idx) => (
                                            <div key={idx} className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/10">
                                                <span className="text-xs text-white truncate max-w-[200px]">{file.name}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFile(idx)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button disabled={loading} className="w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm disabled:opacity-50">
                                <Send size={18} />
                                {loading ? "Sending..." : "request quote"}
                            </button>
                        </form>

                        <div className="mt-6 flex items-center gap-4">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <span className="text-xs text-gray-500 uppercase">OR</span>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <a href="https://wa.me/919257035570" target="_blank" className="mt-6 w-full py-4 border border-green-500/50 text-green-400 font-bold uppercase tracking-wide hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2 rounded-sm">
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
