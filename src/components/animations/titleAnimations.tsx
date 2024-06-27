"use client";
import React from "react";
import { motion } from "framer-motion";
import style from "./titleAnimations.module.scss";

function TitleAnimations({ testo }: { testo: string }) {
  function testoToArray(testo: string) {
    return testo.split("");
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      style={{ color: "black" }}
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      {testoToArray(testo).map((item, index) => {
        return (
          <motion.span variants={letter} key={index}>
            {item}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default TitleAnimations;
