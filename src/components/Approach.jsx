import { motion } from "framer-motion";
import { APPROACH_STEPS } from "../data/content";
import { Sparkles } from "lucide-react";

export default function Approach() {
  return (
    <section id="approach" className="py-28 md:py-36 bg-white border-t border-charcoal/5" aria-label="Our Approach">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs font-medium tracking-luxury uppercase mb-3"
          >
            The Creative Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            Our Approach
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
            Artistry rooted in empathy and observation. We believe the most powerful memories are those captured without orchestration.
          </motion.p>
        </div>

        {/* 4 Strategic Steps */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-y-24 max-w-6xl mx-auto">
          {APPROACH_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group pl-6 sm:pl-0 border-l sm:border-l-0 border-gold/30"
            >
              {/* Giant Serif Number background */}
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-serif text-5xl sm:text-6xl text-gold/40 group-hover:text-gold transition-colors duration-500 font-light select-none">
                  {step.number}
                </span>
                <span className="text-[10px] tracking-luxury uppercase text-charcoal-muted font-sans font-medium">
                  Phase 0{index + 1}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-light mb-2 group-hover:text-gold-dark transition-colors duration-300">
                {step.title}
              </h3>

              {/* Step Subtitle */}
              <p className="text-xs uppercase tracking-luxury text-gold-dark font-medium mb-4">
                {step.headline}
              </p>

              {/* Description */}
              <p className="text-charcoal-muted font-light text-sm sm:text-base leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Key Takeaways pill */}
              <div className="pt-4 border-t border-charcoal/10 flex items-center gap-2 text-[11px] font-sans text-charcoal-subtle tracking-wide">
                <Sparkles className="w-3 h-3 text-gold flex-shrink-0" />
                <span className="line-clamp-1">{step.focus}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
