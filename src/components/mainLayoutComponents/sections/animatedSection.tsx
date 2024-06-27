"use client";
import { motion } from "framer-motion";

function AnimatedSection({
  animateOnce = true,
  children,
}: {
  animateOnce?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: animateOnce }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
