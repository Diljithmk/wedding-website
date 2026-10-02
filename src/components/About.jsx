import { motion } from "framer-motion";
import { ABOUT, IMAGES, BRAND } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-white overflow-hidden" aria-label="About Us">
      <div className="section-container">
        {/* Section Header Eyebrow */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs font-medium tracking-luxury uppercase mb-3"
          >
            {ABOUT.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-charcoal-muted">Our Philosophy & Craft</span>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Editorial Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-champagne-light shadow-xl shadow-black/5">
                <img
                  src={IMAGES.aboutImage}
                  alt="Fine art wedding portrait by Lumière & Co."
                  className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle border framing */}
                <div className="absolute inset-3 border border-white/40 pointer-events-none" />
              </div>

              {/* Floating Editorial Stamp badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-6 sm:-right-8 bg-white p-6 shadow-xl shadow-black/10 border border-charcoal/10 max-w-[210px]"
              >
                <p className="text-[10px] tracking-luxury uppercase text-gold font-medium mb-1">
                  Artistic Legacy
                </p>
                <p className="font-serif text-lg leading-tight text-charcoal italic">
                  "Documenting timeless love across continents."
                </p>
                <div className="w-6 h-px bg-gold/50 my-2" />
                <p className="text-[9px] text-charcoal-muted tracking-widest uppercase">
                  Est. 2014 • Worldwide
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal leading-[1.15] tracking-tight">
                {ABOUT.heading}
              </h2>
            </motion.div>

            {/* Emotional Narrative Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-charcoal-light font-sans font-light text-base sm:text-lg leading-relaxed"
            >
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:text-charcoal leading-relaxed">
                {ABOUT.paragraph1}
              </p>
              <p className="text-charcoal-muted text-base leading-relaxed">
                {ABOUT.paragraph2}
              </p>
              <div className="p-6 bg-champagne-light/50 border-l-2 border-gold space-y-2">
                <span className="text-xs uppercase tracking-luxury text-gold-dark font-medium block">
                  Our Artistic Core
                </span>
                <p className="text-charcoal-light font-serif italic text-base sm:text-lg leading-relaxed">
                  "{ABOUT.philosophy}"
                </p>
              </div>
            </motion.div>

            {/* Studio Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-charcoal/10"
            >
              {BRAND.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="block font-serif text-3xl sm:text-4xl text-charcoal font-light">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] font-sans tracking-luxury uppercase text-charcoal-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Honors & Accolades */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-2"
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-wider text-charcoal-muted uppercase">
                {ABOUT.accolades.map((accolade, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{accolade}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
