"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";
import { BsCupHotFill } from "react-icons/bs";

const navLinks = [
  { href: "/#about", label: "عن قهوجي الرياض" },
  { href: "/#services", label: "خدماتنا المميزة" },
  { href: "/#packages", label: "باقاتنا الخاصة" },
  { href: "/articles", label: "مقالاتنا" },
  { href: "/#contact", label: "تواصل واحجز" },
];
export function Header({
  brandName,
  telephone,
}: HeaderData & { telephone?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 container mx-auto border-2 border-black bg-main-background`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3  sm:text-lg md:text-xl font-bold text-black">
            <span className="w-8 h-8 rounded bg-card-background flex items-center justify-center">
              <BsCupHotFill className="w-5 h-5 text-white" />
            </span>
            <span>{brandName}</span>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-black/70 transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="toggle mobile menu"
              className="lg:hidden text-black cursor-pointer p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <a
              target="_blank"
              href={`tel:${telephone}`}
              className="flex items-center gap-1 bg-main-color text-black hover:bg-main-color/90 font-semibold md:px-6 md:py-2.5 px-4 py-2 text-sm md:text-base shadow-lg transition-all">
              احجز الآن
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black text-white border-t border-white/20">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }
                  className="text-white hover:text-white/70 transition-colors font-medium py-2">
                  {link.label}
                </Link>
              ))}
              <a
                target="_blank"
                href={`tel:${telephone}`}
                className="bg-white hover:bg-white/90 text-black md:px-6 md:py-3 px-4 py-2 text-sm md:text-base rounded-lg shadow-lg transition-all">
                احجز الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
