"use client";

import { motion } from "framer-motion";
import { Check, X, Layers, Sparkles, ScanLine } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/components/providers/TranslationContext";

export default function MGIFeatureShowcase() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      titleKey: "mgi.showcase.feat1.title",
      descKey: "mgi.showcase.feat1.desc",
      color: "text-neon-yellow",
    },
    {
      icon: Layers,
      titleKey: "mgi.showcase.feat2.title",
      descKey: "mgi.showcase.feat2.desc",
      color: "text-neon-cyan",
    },
    {
      icon: ScanLine,
      titleKey: "mgi.showcase.feat3.title",
      descKey: "mgi.showcase.feat3.desc",
      color: "text-neon-magenta",
    },
  ];

  const outputImages = [
    { src: "/images/mgi-output-business-cards.jpg", label: "3D Spot UV Cards" },
    { src: "/images/mgi-output-wedding-invite.jpg", label: "Wedding Invites" },
    { src: "/images/mgi-output-packaging.jpg", label: "Luxury Packaging" },
  ];

  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-magenta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(201,168,76,0.05)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded bg-neon-magenta/20 flex items-center justify-center text-neon-magenta">
                <Layers size={20} />
              </div>
              <span className="text-neon-magenta font-bold uppercase tracking-widest text-sm">
                {t("mgi.showcase.label")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t("mgi.showcase.h2.line1")} <br />
              <span className="text-gray-500">{t("mgi.showcase.h2.line2")}</span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              {t("mgi.showcase.desc")}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-10">
              {features.map((feat, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <feat.icon className={`${feat.color} shrink-0 mt-1`} size={20} />
                  <div>
                    <h4 className="text-white font-bold mb-1">{t(feat.titleKey)}</h4>
                    <p className="text-sm text-gray-400">{t(feat.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Production Advantage Comparison */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-20 blur rounded-2xl" />
              <div className="relative bg-black border border-white/10 rounded-2xl p-6 overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-5 border-b border-white/10 pb-4">
                  {t("mgi.showcase.advantage")}
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="opacity-50">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">{t("mgi.showcase.old")}</h4>
                    <ul className="space-y-2.5 text-sm text-gray-400">
                      {["mgi.showcase.old1","mgi.showcase.old2","mgi.showcase.old3","mgi.showcase.old4"].map((k) => (
                        <li key={k} className="flex gap-2"><X size={15} className="text-red-500 shrink-0 mt-0.5" />{t(k)}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neon-cyan uppercase mb-3">{t("mgi.showcase.new")}</h4>
                    <ul className="space-y-2.5 text-sm text-white">
                      {["mgi.showcase.new1","mgi.showcase.new2","mgi.showcase.new3","mgi.showcase.new4"].map((k) => (
                        <li key={k} className="flex gap-2"><Check size={15} className="text-neon-cyan shrink-0 mt-0.5" />{t(k)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Output Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Primary large output image */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group"
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={outputImages[0].src}
                alt="MG Digital Press premium business cards featuring 3D raised Spot UV and foil embellishments (MGI AccurioShine technology)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.7)", color: "var(--gold)" }}>
                  {outputImages[0].label}
                </span>
              </div>
            </motion.div>

            {/* Two smaller outputs */}
            <div className="grid grid-cols-2 gap-3">
              {outputImages.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  className="relative h-44 rounded-xl overflow-hidden border border-white/10 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={img.src}
                    alt={`MG Digital Press luxury print embellishment sample - ${(img as any).label.toLowerCase()}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.7)", color: "var(--gold)" }}>
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Machine image small badge */}
            <div className="flex items-center gap-4 p-4 bg-white/3 rounded-xl border border-white/5">
              <div className="relative w-16 h-12 shrink-0">
                <Image src="/images/mgi-hero.png" alt="MGI AccurioShine machine" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neon-magenta mb-0.5">MGI AccurioShine</p>
                <p className="text-xs text-gray-500">Proprietary Inkjet Technology · Piezoelectric Printheads · Flexible Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
