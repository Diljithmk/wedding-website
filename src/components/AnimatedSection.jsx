import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  };

  const directionKey = direction.toLowerCase();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[directionKey] || variants.up}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", gap = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: gap },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
