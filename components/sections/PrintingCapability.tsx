"use client";

import { motion } from "framer-motion";
import { Palette, Droplet, Layers } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useTranslation } from "@/components/providers/TranslationContext";

export default function PrintingCapability() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Droplet,
      titleKey: "printing.white.title",
      descKey: "printing.white.desc",
      iconBg: "bg-white",
      iconColor: "text-black",
    },
    {
      icon: Palette,
      titleKey: "printing.5th.title",
      descKey: "printing.5th.desc",
      iconBg: "bg-neon-cyan",
      iconColor: "text-black",
    },
    {
      icon: Layers,
      titleKey: "printing.texture.title",
      descKey: "printing.texture.desc",
      iconBg: "bg-zinc-700",
      iconColor: "text-white",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Content */}
          <div className="lg:w-1/2">
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <span className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 block">
                {t("printing.label")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t("printing.h2")}
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {t("printing.desc")}
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feat, i) => (
                  <ScrollAnimation
                    key={i}
                    animation="fadeInUp"
                    delay={0.2 + i * 0.1}
                    className={`h-full ${i === 2 ? "col-span-1 sm:col-span-2 md:col-span-1" : ""}`}
                  >
                    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 ${feat.iconBg} ${feat.iconColor} rounded`}>
                          <feat.icon size={16} />
                        </div>
                        <h4 className="text-white font-bold">{t(feat.titleKey)}</h4>
                      </div>
                      <p className="text-sm text-gray-500">{t(feat.descKey)}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>

          {/* Machine Visual */}
          <ScrollAnimation animation="scaleUp" delay={0.2} className="lg:w-1/2 relative bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square">
              <Image
                src="/images/ricoh-output-brochures.jpg"
                alt="MG Digital Press high-volume 5-color (CMYK + White) commercial printing output — premium tri-fold marketing brochures"
                width={600}
                height={600}
                className="object-cover w-full h-full relative z-10 rounded-xl"
              />

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-neon-cyan/20 to-neon-magenta/20 blur-[80px] z-0" />

              {/* Floating Badges */}
              <motion.div
                className="absolute top-10 right-0 bg-black/80 border border-white/10 px-4 py-2 rounded-lg backdrop-blur text-xs font-bold text-white z-20 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                White Ink Ready
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 bg-black/80 border border-white/10 px-4 py-2 rounded-lg backdrop-blur text-xs font-bold text-white z-20 flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                5th Color Station
              </motion.div>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
