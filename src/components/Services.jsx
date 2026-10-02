import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../data/content";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleInquire = (serviceTitle) => {
    setSelectedService(null);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      // Notify contact form or prefill message
      window.dispatchEvent(
        new CustomEvent("select-wedding-service", { detail: { service: serviceTitle } })
      );
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-white border-t border-charcoal/5" aria-label="Our Services">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs font-medium tracking-luxury uppercase mb-3"
          >
            Bespoke Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            Our Services
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
            Curated documentation crafted for discerning couples. Every collection is bespoke, ensuring your narrative is preserved with utmost artistry.
          </motion.p>
        </div>

        {/* 6 Minimal Luxury Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer flex flex-col bg-white border border-charcoal/10 hover:border-gold/60 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-black/5"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-champagne-light">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle vignette on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />

                {/* Service Number Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-mono tracking-widest border border-white/40">
                  {service.number}
                </div>

                {/* Tagline Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] tracking-luxury uppercase text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 border border-white/20">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-light group-hover:text-gold-dark transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-charcoal/10 flex items-center justify-between text-xs tracking-luxury uppercase text-charcoal group-hover:text-gold font-medium transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-charcoal/15"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold text-xs font-mono tracking-widest">{selectedService.number}</span>
                <div className="w-6 h-px bg-gold" />
                <span className="text-xs uppercase tracking-luxury text-charcoal-muted">{selectedService.tagline}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mb-4">
                {selectedService.title}
              </h3>

              <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden bg-champagne-light">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-charcoal-light text-base leading-relaxed mb-6 font-light">
                {selectedService.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-luxury font-medium text-charcoal mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>Bespoke Collection Inclusions</span>
                </h4>
                <ul className="space-y-3">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-muted">
                      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-champagne flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-gold-dark" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-charcoal-muted tracking-wide">
                  Limited availability per wedding season.
                </p>
                <button
                  onClick={() => handleInquire(selectedService.title)}
                  className="w-full sm:w-auto btn-primary"
                >
                  Inquire For Your Date
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
