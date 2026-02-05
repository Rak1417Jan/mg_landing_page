"use client";

import { Square, Scissors, Layers, Book, StickyNote, FileText, Circle } from "lucide-react";

const finishes = [
    { name: "Glue Binding", icon: Book },
    { name: "Wiro Binding", icon: Layers },
    { name: "Center Pinning", icon: FileText },
    { name: "Lamination", icon: StickyNote },
    { name: "Corner Cutting", icon: Square },
    { name: "Half Cutting", icon: Scissors },
    { name: "Perforation", icon: Circle },
    { name: "Polar 76EM Cutting", icon: Layers },
];

export default function FinishingServicesGrid() {
    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">In-House Production</span>
                    <h3 className="text-3xl font-bold text-white mb-4">Complete Finishing</h3>
                    <p className="text-gray-500">Everything produced under one roof for faster turnaround.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {finishes.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-6 bg-zinc-900/30 rounded-lg hover:bg-zinc-900/80 transition-colors border border-dashed border-zinc-800 hover:border-zinc-700 hover:border-solid group">
                            <item.icon className="text-gray-500 mb-3 group-hover:text-neon-cyan transition-colors" size={24} strokeWidth={1.5} />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
