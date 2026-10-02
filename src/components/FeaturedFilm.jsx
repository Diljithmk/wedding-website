import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, MapPin, Sparkles } from "lucide-react";
import { FEATURED_FILM } from "../data/content";

export default function FeaturedFilm() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="film" className="py-28 md:py-36 bg-white border-t border-charcoal/5" aria-label="Featured Wedding Film">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs font-medium tracking-luxury uppercase mb-3"
          >
            {FEATURED_FILM.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            {FEATURED_FILM.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto"
          >
            {FEATURED_FILM.subtitle}
          </motion.p>
        </div>

        {/* Large Cinematic Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-6xl mx-auto overflow-hidden shadow-2xl group cursor-pointer border border-charcoal/10"
          onClick={() => setIsPlaying(true)}
        >
          {/* 16:9 Widescreen Aspect Ratio Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal">
            {/* Cinematic Still Thumbnail */}
            <img
              src={FEATURED_FILM.thumbnail}
              alt={FEATURED_FILM.title}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Top Film Metadata Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
              <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-luxury uppercase border border-white/15">
                {FEATURED_FILM.resolution}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] tracking-widest uppercase border border-white/20">
                <Sparkles className="w-3 h-3 text-gold-light" />
                <span>Villa Balbianello</span>
              </span>
            </div>

            {/* Center Play Button with Pulsing Gold Aura */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/play flex items-center justify-center"
              >
                {/* Pulsing ring */}
                <div className="absolute -inset-4 rounded-full border border-gold/40 animate-ping opacity-40" />
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/play:bg-gold-light group-hover/play:text-white">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 text-charcoal fill-current ml-1 transition-colors duration-300 group-hover/play:text-white" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Film Details Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div>
                <p className="text-gold-light text-xs font-serif italic mb-1">
                  Wedding Feature Film
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light">
                  {FEATURED_FILM.couple}
                </h3>
                <div className="flex items-center gap-4 text-white/70 text-xs tracking-wider uppercase mt-2">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-light" />
                    <span>{FEATURED_FILM.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-light" />
                    <span>{FEATURED_FILM.duration}</span>
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[11px] tracking-luxury uppercase border border-white/20">
                  Click To Experience Cinema
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Video Player Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-black shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-[16/9] w-full">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  poster={FEATURED_FILM.thumbnail}
                >
                  <source src={FEATURED_FILM.videoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video streaming.
                </video>
              </div>

              {/* Modal Caption */}
              <div className="p-5 bg-charcoal text-white flex items-center justify-between border-t border-white/10">
                <div>
                  <h4 className="font-serif text-lg font-light text-white">
                    {FEATURED_FILM.couple} — {FEATURED_FILM.title}
                  </h4>
                  <p className="text-xs text-white/60 tracking-wider">
                    {FEATURED_FILM.location} • Directed by Lumière & Co.
                  </p>
                </div>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="text-xs uppercase tracking-luxury text-gold-light hover:text-white transition-colors"
                >
                  Close Player
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
