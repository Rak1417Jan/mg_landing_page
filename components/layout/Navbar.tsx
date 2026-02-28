"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import QuoteModal from "@/components/ui/QuoteModal";
import { useTranslation } from "@/components/providers/TranslationContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t, language, toggleLanguage } = useTranslation();

  const navLinks = [
    { nameKey: "nav.services", href: "#services" },
    { nameKey: "nav.process", href: "#process" },
    { nameKey: "nav.industries", href: "#industries" },
    { nameKey: "nav.contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 py-5 bg-transparent"
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-4">
          {/* Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-5 shrink-0">
            <div className="relative w-20 h-20">
              <Image
                src="/images/logo.png"
                alt="MG Digital Press Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Brand Name */}
            <div className="flex flex-col leading-none gap-1">
              <span
                className="text-2xl font-extrabold tracking-tight text-white hidden sm:block"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                MG Digital
              </span>
              <span
                className="text-base font-bold tracking-[0.25em] uppercase hidden sm:block"
                style={{ color: "var(--gold)" }}
              >
                Press
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.nameKey}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide uppercase"
              >
                {t(link.nameKey)}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 transition-all text-xs font-bold tracking-widest"
              title="Toggle Language"
            >
              <Globe size={12} className="text-gray-400" />
              <span
                className={language === "en" ? "text-white" : "text-gray-500"}
              >
                EN
              </span>
              <span className="text-white/20">|</span>
              <span
                className={language === "hi" ? "text-white" : "text-gray-500"}
              >
                HI
              </span>
            </button>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              style={{
                background: "var(--gold)",
                color: "#000",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--gold)")
              }
            >
              {t("nav.cta")}
            </button>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/20 text-xs font-bold tracking-widest"
            >
              <span className={language === "en" ? "text-white" : "text-gray-500"}>EN</span>
              <span className="text-white/20">|</span>
              <span className={language === "hi" ? "text-white" : "text-gray-500"}>HI</span>
            </button>
            <button
              className="text-white hover:text-white/70 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="text-lg font-bold flex items-center gap-2"
                  style={{ color: "var(--gold)" }}
                >
                  <Phone size={18} />
                  {t("nav.cta")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
