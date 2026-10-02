import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Instagram, WhatsApp } from "./Icons";
import { BRAND, NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-white/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm"
            : "py-6 sm:py-8 bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Studio Brandmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex flex-col items-start"
          >
            <span
              className={`font-serif tracking-luxury uppercase text-xl sm:text-2xl transition-colors duration-300 font-light ${
                scrolled ? "text-charcoal group-hover:text-gold-dark" : "text-white group-hover:text-gold-light"
              }`}
            >
              {BRAND.name}
            </span>
            <span
              className={`text-[9px] font-sans tracking-widest uppercase transition-colors duration-300 -mt-0.5 ${
                scrolled ? "text-charcoal-muted" : "text-white/60"
              }`}
            >
              Fine Art Weddings
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-medium tracking-luxury uppercase transition-colors duration-300 relative py-1 group ${
                  scrolled
                    ? "text-charcoal-light hover:text-charcoal"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-luxury uppercase transition-all duration-300 ${
                scrolled
                  ? "bg-charcoal text-white hover:bg-black"
                  : "bg-white text-charcoal hover:bg-gold-light"
              }`}
            >
              <span>Book Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-charcoal hover:text-gold-dark" : "text-white hover:text-gold-light"
              }`}
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Pure White Editorial Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Mobile Menu */}
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-6">
              <div>
                <span className="font-serif tracking-widest text-2xl text-charcoal font-light">
                  {BRAND.name}
                </span>
                <p className="text-[10px] text-charcoal-muted tracking-widest uppercase">
                  Wedding Photography & Cinema
                </p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-full border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                aria-label="Close mobile navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="py-10">
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    className="font-serif text-3xl sm:text-4xl text-charcoal hover:text-gold transition-colors duration-300 font-light flex items-center justify-between py-1"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans text-charcoal-muted tracking-widest uppercase">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer & Direct Contact */}
            <div className="border-t border-charcoal/10 pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
                >
                  <WhatsApp className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{BRAND.instagramHandle}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full btn-primary text-center"
                >
                  Request Wedding Date Consultation
                </a>
              </div>

              <p className="text-[10px] text-charcoal-muted/70 tracking-widest uppercase text-center">
                New York • Paris • Lake Como • Worldwide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
