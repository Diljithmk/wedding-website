import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND, IMAGES } from "../data/content";
import { Volume2, VolumeX, Play, Image as ImageIcon } from "lucide-react";

export default function Hero() {
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
      aria-label="Hero Section"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {isVideoMode ? (
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000 scale-105 animate-pulse"
            style={{ animationDuration: '8s' }}
            poster={IMAGES.hero}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${IMAGES.hero}')`,
            }}
          />
        )}

        {/* Sophisticated cinematic gradient overlay - keeps white text legible while preserving photography tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
      </div>

      {/* Top right subtle mode switcher */}
      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsVideoMode(!isVideoMode)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/90 text-xs tracking-wider transition-all duration-300 border border-white/15"
          title={isVideoMode ? "Switch to Editorial Photo" : "Switch to Ambient Video"}
        >
          {isVideoMode ? (
            <>
              <ImageIcon className="w-3.5 h-3.5 text-gold-light" />
              <span>Editorial Photo</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-gold-light fill-current" />
              <span>Ambient Cinema</span>
            </>
          )}
        </button>

        {isVideoMode && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/90 text-xs transition-colors border border-white/15"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-gold-light" />}
          </button>
        )}
      </div>

      {/* Centered Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 pb-16 flex flex-col items-center">
        {/* Subtle Brand Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-gold-light text-xs sm:text-sm font-medium tracking-luxury uppercase border-b border-gold-light/40 pb-1">
            Fine Art Wedding Photography & Cinema
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-white font-serif font-light text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-widest uppercase drop-shadow-sm select-none">
            {BRAND.name}
          </h1>
        </motion.div>

        {/* Thin Gold Aesthetic Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent my-8"
        />

        {/* Heading Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-white/95 font-serif font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight sm:leading-snug italic">
            "{BRAND.tagline}"
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-white/80 font-sans text-xs sm:text-sm md:text-base font-light tracking-widest uppercase mt-4 max-w-xl"
        >
          {BRAND.subtitle}
        </motion.p>

        {/* Two Minimal Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "#portfolio")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs font-medium tracking-luxury uppercase text-white bg-transparent border border-white/60 hover:bg-white hover:text-charcoal hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs font-medium tracking-luxury uppercase text-charcoal bg-white hover:bg-gold-light hover:text-charcoal transition-all duration-300 shadow-xl shadow-black/10"
          >
            Book a Session
          </a>
        </motion.div>

        {/* Subtle worldwide location indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 text-white/50 text-[11px] font-sans tracking-luxury uppercase"
        >
          Paris • New York • Lake Como • Amalfi Coast • Worldwide
        </motion.p>
      </div>

      {/* Subtle Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={(e) => scrollToSection(e, "#about")}
      >
        <span className="text-white/60 text-[10px] tracking-luxury uppercase font-sans">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
