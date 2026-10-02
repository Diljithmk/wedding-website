import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  const activeTestimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-white border-t border-charcoal/5"
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            Words of Gratitude
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            What Our Couples Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-center"
          />
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          {/* Subtle Quote Mark Icon */}
          <div className="flex justify-center mb-8">
            <Quote className="w-10 h-10 text-champagne-dark/50 rotate-180" />
          </div>

          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 35 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-8"
              >
                <blockquote className="font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed sm:leading-snug italic max-w-3xl mx-auto">
                  "{activeTestimonial.quote}"
                </blockquote>

                <div className="space-y-1 pt-2">
                  <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                    {activeTestimonial.couple}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-charcoal-muted">
                    <span>{activeTestimonial.date}</span>
                    <span>•</span>
                    <span className="text-gold-dark">{activeTestimonial.location}</span>
                  </div>
                  <p className="text-[11px] tracking-luxury uppercase text-charcoal-subtle pt-1">
                    {activeTestimonial.highlight}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev/Next & Dots */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-charcoal/10 max-w-md mx-auto">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-1.5 transition-all duration-400 rounded-full ${
                    index === current ? "w-8 bg-charcoal" : "w-2 bg-charcoal/20 hover:bg-charcoal/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full border border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
