"use client";
import { motion } from "framer-motion";

function AnimatedSection({
  overflowHidden = true,
  animateOnce = true,
  children,
}: {
  overflowHidden: boolean;
  animateOnce?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      style={{
        position: "relative",
        overflow: `${overflowHidden ? "hidden" : "initial"}`,
      }}
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
