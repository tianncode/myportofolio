"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("#home")}
          className="text-lg font-semibold text-white tracking-tight"
        >
          Rizqi Akbar
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#09090B] border-b border-white/[0.05]"
          >
            <ul className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors w-full text-left py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
