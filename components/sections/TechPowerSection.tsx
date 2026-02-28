"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Layers, Printer, Scissors, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "@/components/providers/TranslationContext";

type Machine = {
  id: string;
  nameKey: string; // display name — no model number
  roleKey: string;
  headlineKey: string;
  uspKeys: string[];
  icon: typeof Layers;
  color: string;
  accentStyle: React.CSSProperties;
  machineImage: string;
  outputImages: { src: string; label: string }[];
};

const machines: Machine[] = [
  {
    id: "mgi",
    nameKey: "MGI AccurioShine",
    roleKey: "mgi.role",
    headlineKey: "mgi.headline",
    uspKeys: ["mgi.usp1", "mgi.usp2", "mgi.usp3", "mgi.usp4", "mgi.usp5", "mgi.usp6"],
    icon: Layers,
    color: "text-neon-magenta",
    accentStyle: { color: "#FF00FF" },
    machineImage: "/images/mgi-hero.png",
    outputImages: [
      { src: "/images/mgi-output-business-cards.jpg", label: "3D Spot UV Cards" },
      { src: "/images/mgi-output-wedding-invite.jpg", label: "Wedding Invites" },
      { src: "/images/mgi-output-packaging.jpg", label: "Luxury Packaging" },
      { src: "/images/spot_uv_foil.jpeg", label: "Spot UV & Foil" },
    ].map(img => ({ ...img, alt: `MG Digital Press MGI AccurioShine digital embellishment output - ${img.label.toLowerCase()}` })),
  },
  {
    id: "ricoh",
    nameKey: "Ricoh Pro C7500",
    roleKey: "ricoh.role",
    headlineKey: "ricoh.headline",
    uspKeys: ["ricoh.usp1", "ricoh.usp2", "ricoh.usp3", "ricoh.usp4", "ricoh.usp5", "ricoh.usp6"],
    icon: Printer,
    color: "text-neon-cyan",
    accentStyle: { color: "#00FFFF" },
    machineImage: "/images/ricoh-c7500.png",
    outputImages: [
      { src: "/images/ricoh-output-brochures.jpg", label: "Premium Brochures" },
      { src: "/images/cmyk_white_digital_print.jpeg", label: "5-Color Output" },
      { src: "/images/envelopes.jpeg", label: "Envelopes" },
      { src: "/images/texture-foil.jpg", label: "Specialty Stock" },
    ].map(img => ({ ...img, alt: `MG Digital Press Ricoh Pro C7500 high volume 5-color print output - ${img.label.toLowerCase()}` })),
  },
  {
    id: "konica",
    nameKey: "Konica Minolta AccurioPress",
    roleKey: "konica.role",
    headlineKey: "konica.headline",
    uspKeys: ["konica.usp1", "konica.usp2", "konica.usp3", "konica.usp4", "konica.usp5", "konica.usp6"],
    icon: Printer,
    color: "text-white",
    accentStyle: { color: "#E5E5E5" },
    machineImage: "/images/konica-7136.png",
    outputImages: [
      { src: "/images/texture-uv.jpg", label: "Precision Color" },
      { src: "/images/foil_stickers.jpeg", label: "Foil Stickers" },
      { src: "/images/cmyk_white_digital_print.jpeg", label: "High Volume Print" },
      { src: "/images/envelopes.jpeg", label: "Commercial Print" },
    ].map(img => ({ ...img, alt: `MG Digital Press Konica Minolta commercial print output - ${img.label.toLowerCase()}` })),
  },
  {
    id: "iecho",
    nameKey: "Iecho Digital Cutter",
    roleKey: "iecho.role",
    headlineKey: "iecho.headline",
    uspKeys: ["iecho.usp1", "iecho.usp2", "iecho.usp3", "iecho.usp4", "iecho.usp5"],
    icon: Scissors,
    color: "text-neon-yellow",
    accentStyle: { color: "#FFFF00" },
    machineImage: "/images/iecho-cutter.png",
    outputImages: [
      { src: "/images/digital_die_cut.jpeg", label: "Die-Cut Shapes" },
      { src: "/images/foil_stickers.jpeg", label: "Custom Labels" },
      { src: "/images/iecho-cutter.png", label: "Smart Cutting" },
      { src: "/images/digital_die_cut.jpeg", label: "Packaging Cuts" },
    ].map(img => ({ ...img, alt: `MG Digital Press Iecho digital die-cutting finishing output - ${img.label.toLowerCase()}` })),
  },
  {
    id: "polar",
    nameKey: "Polar 76 EM",
    roleKey: "polar.role",
    headlineKey: "polar.headline",
    uspKeys: ["polar.usp1", "polar.usp2", "polar.usp3", "polar.usp4", "polar.usp5"],
    icon: Scissors,
    color: "text-gray-300",
    accentStyle: { color: "#C9A84C" },
    machineImage: "/images/polar-cutter.png",
    outputImages: [
      { src: "/images/polar-cutter.png", label: "Precision Cut" },
      { src: "/images/envelopes.jpeg", label: "Clean Edges" },
      { src: "/images/cmyk_white_digital_print.jpeg", label: "Bulk Cutting" },
      { src: "/images/foil_stickers.jpeg", label: "Professional Finish" },
    ].map(img => ({ ...img, alt: `MG Digital Press Polar 76 EM precision paper cutting output - ${img.label.toLowerCase()}` })),
  },
];

export default function TechPowerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * machines.length),
      machines.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-black" style={{ height: `${machines.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col lg:flex-row">

        {/* ── LEFT: Text Panel ── */}
        <div className="w-full lg:w-[42%] h-auto lg:h-full flex flex-col justify-center px-6 lg:px-12 relative z-20 bg-black border-b lg:border-b-0 lg:border-r border-white/5 py-8 lg:py-0">

          {/* Section Header (always visible) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--gold)" }}>
              {t("infra.label")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight whitespace-pre-line">
              {t("infra.h2")}
            </h2>
          </motion.div>

          {/* Active Machine Info */}
          <div className="relative flex-1 min-h-[240px] lg:min-h-[300px]">
            {machines.map((machine, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={machine.id}
                  className={`absolute inset-0 transition-all duration-500 ${isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
                >
                  {/* Machine icon + name (no model number) */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10"
                      style={machine.accentStyle}
                    >
                      <machine.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={machine.accentStyle}>
                        {t(machine.roleKey)}
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                        {machine.nameKey}
                      </h3>
                    </div>
                  </div>

                  {/* Headline */}
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed border-l-2 pl-3" style={{ borderColor: machine.accentStyle.color }}>
                    {t(machine.headlineKey)}
                  </p>

                  {/* USP Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {machine.uspKeys.map((key, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={machine.accentStyle} />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Machine image — below USPs */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="relative w-40 h-28 shrink-0 rounded-lg overflow-hidden bg-zinc-900 border border-white/10 p-1.5">
                      <Image
                        src={machine.machineImage}
                        alt={machine.nameKey}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {machine.nameKey}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Machine selector dots + progress bar */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-3">
              {machines.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "28px" : "8px",
                    background: i === activeIndex ? "var(--gold)" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
              <span className="text-xs text-gray-600 ml-auto uppercase tracking-widest">
                {activeIndex + 1} / {machines.length}
              </span>
            </div>
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ scaleX: scrollYProgress, transformOrigin: "left", background: "var(--gold)" }}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Output Showcase ── */}
        <div className="w-full lg:w-[58%] h-[50vh] lg:h-full relative overflow-hidden bg-zinc-950">
          {machines.map((machine, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            return (
              <motion.div
                key={machine.id}
                className="absolute inset-0 p-4 lg:p-6"
                initial={false}
                animate={{
                  x: isActive ? "0%" : isPast ? "-100%" : "100%",
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* 2×2 output gallery — PRIMARY focus */}
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
                  {machine.outputImages.map((img, i) => (
                    <div key={i} className="relative overflow-hidden rounded-lg group">
                      <Image
                        src={img.src}
                        alt={(img as any).alt || img.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <span
                          className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-sm"
                          style={{ background: "rgba(0,0,0,0.5)", color: machine.accentStyle.color }}
                        >
                          {img.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
