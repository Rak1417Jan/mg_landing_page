"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import QuoteModal from "@/components/ui/QuoteModal";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo.png"
                alt="MG Digital"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Fallback Text if image fails (visually hidden if image loads, but useful for structure) */}
            <span className="sr-only">MG Digital</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-5 py-2 text-sm font-bold bg-white text-black hover:bg-neon-cyan transition-colors cursor-pointer rounded-sm"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-neon-cyan transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="text-lg font-bold text-neon-cyan flex items-center gap-2"
                >
                  <Phone size={18} />
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
