"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

const applications = [
    {
        title: "Branding & Corporate",
        desc: "Visiting cards, folders, letterheads, and brochures.",
        size: "col-span-1 md:col-span-2 row-span-2",
        image: "/images/texture-foil.jpg" // Placeholder using existing texture
    },
    {
        title: "Packaging & Labels",
        desc: "Product labels, prototype packaging, and rigid boxes.",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "/images/texture-uv.jpg" // Placeholder using existing texture
    },
    {
        title: "Events & Invitations",
        desc: "Wedding cards, premium invites, and event tickets.",
        size: "col-span-1 md:col-span-1 row-span-2",
        image: "/images/mgi-hero.png" // Fallback to machine image if no specific image
    },
    {
        title: "Marketing Material",
        desc: "Flyers, standees, catalogs, and lookbooks.",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "/images/ricoh-c7500.png" // Fallback to machine image
    },
];

export default function ApplicationsShowcase() {
    return (
        <section className="py-24 bg-graphite">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">Possibilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Application Showcase
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-right md:text-left">
                        Real-world applications of our digital production technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {applications.map((app, idx) => (
                        <motion.div
                            key={idx}
                            className={clsx(
                                "relative rounded-xl overflow-hidden group flex flex-col justify-end border border-white/10 bg-zinc-900 transition-all hover:bg-zinc-800",
                                app.size
                            )}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <ArrowUpRight className="text-white" />
                            </div>

                            <div className="relative z-10 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                    {app.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
