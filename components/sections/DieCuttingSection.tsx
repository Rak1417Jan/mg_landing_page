"use client";

import { motion } from "framer-motion";
import { Scissors, Sticker, Package } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useTranslation } from "@/components/providers/TranslationContext";

export default function DieCuttingSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation animation="slideLeft">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 border-l-4 border-neon-yellow">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {t("die.h2")}
              </h2>
              <p className="text-gray-400">
                {t("die.sub")}
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <span className="text-xs font-bold bg-zinc-800 text-white px-3 py-1 rounded uppercase">
                {t("die.nomq")}
              </span>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <ScrollAnimation animation="fadeInUp" delay={0.1} className="h-full">
            <motion.div
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-neon-yellow/50 transition-colors group h-full"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                <Sticker size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("die.card1.h")}</h3>
              <p className="text-gray-400 text-sm mb-4">{t("die.card1.p")}</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Paper & Vinyl</li>
                <li>• Gold/Silver Polyester</li>
                <li>• Clear on Clear</li>
              </ul>
            </motion.div>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation animation="fadeInUp" delay={0.2} className="h-full">
            <motion.div
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-neon-yellow/50 transition-colors group h-full"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:text-black transition-colors">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("die.card2.h")}</h3>
              <p className="text-gray-400 text-sm mb-4">{t("die.card2.p")}</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Product Boxes</li>
                <li>• Sleeve Packaging</li>
                <li>• Header Cards</li>
              </ul>
            </motion.div>
          </ScrollAnimation>

          {/* Card 3 — Visual */}
          <ScrollAnimation animation="fadeInUp" delay={0.3} className="h-full">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 group h-80">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" />
              <Image
                src="/images/digital_die_cut.jpeg"
                alt="MG Digital Press custom digital die-cutting and kiss-cutting output for bespoke packaging and sticker labels (Iecho PK tech)"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                <h3 className="text-xl font-bold text-white mb-2">{t("die.card3.h")}</h3>
                <p className="text-sm text-gray-300">{t("die.card3.p")}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
