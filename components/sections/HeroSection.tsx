"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuoteModal from "@/components/ui/QuoteModal";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState } from "react";
import { useTranslation } from "@/components/providers/TranslationContext";

const outputImages = [
  {
    src: "/images/hero-premium-outputs.jpg",
    alt: "Premium printed outputs — business cards, invitations, brochures",
    label: "Premium Outputs",
  },
  {
    src: "/images/hero-spot-uv-macro.jpg",
    alt: "Macro spot UV texture on luxury print",
    label: "Spot UV Texture",
  },
  {
    src: "/images/mgi-output-business-cards.jpg",
    alt: "Business cards with 3D raised spot UV and gold foil",
    label: "Business Cards",
  },
  {
    src: "/images/mgi-output-packaging.jpg",
    alt: "Premium packaging with embossed spot UV",
    label: "Luxury Packaging",
  },
];

export default function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-graphite pt-20">
      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover mix-blend-luminosity"
        >
          <source src="/images/digitalfoil.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Text Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
                <span style={{ color: "var(--gold)" }}>{t("hero.badge")}</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
                {t("hero.h1.line1")}{" "}
                <br className="hidden sm:block" />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--gold) 0%, #fff 50%, var(--gold-light) 100%)",
                  }}
                >
                  {t("hero.h1.line2")}
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <p className="text-lg md:text-xl text-gray-300 mb-4 font-medium max-w-xl mx-auto lg:mx-0">
                {t("hero.sub")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <p className="text-xs md:text-sm text-gray-500 mb-10 uppercase tracking-[0.2em] mx-auto lg:mx-0">
                {t("hero.tags")}
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="group relative px-8 py-4 font-bold text-sm uppercase tracking-wide overflow-hidden flex items-center gap-2 rounded-sm transition-all"
                  style={{ background: "var(--gold)", color: "#000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
                >
                  <span>{t("hero.cta.quote")}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="https://wa.me/919257035570"
                  target="_blank"
                  className="group px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/5 transition-colors flex items-center gap-2 rounded-sm"
                >
                  <MessageCircle size={18} />
                  <span>{t("hero.cta.whatsapp")}</span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* RIGHT: Output Image Gallery */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="grid grid-cols-2 gap-3">
              {outputImages.map((img, i) => (
                <motion.div
                  key={i}
                  className={`relative overflow-hidden rounded-lg border border-white/10 group ${i === 0 ? "col-span-2 h-52" : "h-36"}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Label */}
                  <div className="absolute bottom-2 left-3">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{ background: "rgba(0,0,0,0.6)", color: "var(--gold)" }}
                    >
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative glow behind grid */}
            <div
              className="absolute -inset-8 rounded-full blur-[80px] opacity-20 pointer-events-none -z-10"
              style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
