import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Maximize2, ExternalLink } from "lucide-react";
import { Instagram } from "./Icons";
import { PORTFOLIO_ITEMS, BRAND } from "../data/content";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const categories = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "preWedding", label: "Pre-Wedding" },
    { id: "cinematic", label: "Cinematic Films" },
    { id: "engagement", label: "Engagement" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, nextImage, prevImage]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItemIndex]);

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-white" aria-label="Featured Portfolio">
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
            Curated Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            Featured Portfolio
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
            A visual retrospective of timeless celebrations captured across the globe. Each collection represents an unrepeatable narrative.
          </motion.p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIndex(null);
              }}
              className={`px-5 py-2.5 text-xs font-medium tracking-luxury uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-charcoal text-white border-charcoal shadow-md"
                  : "bg-white text-charcoal-muted border-charcoal/15 hover:border-charcoal/40 hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid group cursor-pointer relative bg-champagne-light overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.location}`}
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Video Indicator Pill */}
                {item.isVideo && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-luxury uppercase flex items-center gap-1.5 border border-white/20">
                    <Play className="w-2.5 h-2.5 text-gold-light fill-current" />
                    <span>Cinema • {item.videoDuration}</span>
                  </div>
                )}

                {/* Editorial Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                  <span className="text-gold-light text-[10px] tracking-luxury uppercase font-medium mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs tracking-wider uppercase font-light mt-1">
                    {item.location}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-white/90 text-[11px] tracking-luxury uppercase">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
                    <span>Expand Gallery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View on Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center pt-8 border-t border-charcoal/10"
        >
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-medium tracking-luxury uppercase text-charcoal hover:text-gold transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Our Daily Journal On Instagram</span>
            <ExternalLink className="w-3 h-3 text-charcoal-muted" />
          </a>
        </motion.div>
      </div>

      {/* Clean Fullscreen Editorial Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
            onClick={closeLightbox}
          >
            {/* Lightbox Top Bar */}
            <div className="px-6 py-5 flex items-center justify-between z-20 text-white border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg tracking-wider font-light">
                  {BRAND.name}
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-white/60 text-xs font-mono tracking-widest">
                  {String(selectedItemIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[11px] text-white/50 tracking-luxury uppercase">
                  Use arrow keys to navigate
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Media Content */}
            <div
              className="relative flex-grow flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all border border-white/15"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image or Video */}
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[75vh] flex flex-col items-center justify-center"
              >
                {currentItem.isVideo ? (
                  <div className="relative aspect-[16/9] w-[85vw] max-w-4xl bg-black shadow-2xl">
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                      poster={currentItem.image}
                    >
                      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <img
                    src={currentItem.image}
                    alt={`${currentItem.title} — ${currentItem.location}`}
                    className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                  />
                )}
              </motion.div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all border border-white/15"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Caption Bar */}
            <div className="px-6 py-5 bg-black/60 border-t border-white/10 text-center z-20">
              <p className="text-gold-light text-xs uppercase tracking-luxury font-medium">
                {currentItem.tag}
              </p>
              <h4 className="text-white font-serif text-xl sm:text-2xl font-light">
                {currentItem.title}
              </h4>
              <p className="text-white/60 text-xs tracking-wider uppercase">
                {currentItem.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
