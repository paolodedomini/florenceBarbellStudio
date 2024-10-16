"use client";
import React from "react";
import { delay, easeInOut, motion } from "framer-motion";
import style from "./animations.module.scss";
import { easeIn } from "framer-motion/dom";

function TitleAnimations({
  testo,
  subtesto,
  animation,
  className,
  isMainTitle,
  once,
}: {
  testo: string;
  subtesto?: string;
  animation: "letter" | "word";
  className?: string;
  isMainTitle?: boolean;
  once?: boolean;
}) {
  function testoToArray(testo: string, animation: "letter" | "word") {
    if (animation === "word") {
      return testo.split(" ");
    }
    return testo.split("");
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: animation === "word" ? 0.2 : 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 1, y: 250 },
    show: {
      opacity: 1,

      y: 0,
      transition: {
        duration: 0.5,
        easeIn,
      },
    },
  };
  if (isMainTitle) {
    return (
      <motion.h1
        className={`${style.titleAnimationsWrapper} ${style[className as keyof typeof style]}`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: once || false }}
      >
        {testoToArray(testo, animation).map((item, index) => {
          if (item === " ") {
            return <span key={index}>&nbsp;</span>;
          }
          return (
            <motion.span
              className={`${animation === "word" && style.word}`}
              variants={letter}
              key={index}
            >
              {item}
            </motion.span>
          );
        })}
        <motion.div
          className={style.sub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {subtesto}
        </motion.div>
      </motion.h1>
    );
  } else {
    return (
      <motion.div
        className={`${style.titleAnimationsWrapper} ${style[className as keyof typeof style]}`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: once || false }}
      >
        {testoToArray(testo, animation).map((item, index) => {
          if (item === " ") {
            return <span key={index}>&nbsp;</span>;
          }
          return (
            <motion.span
              className={`${animation === "word" && style.word}`}
              variants={letter}
              key={index}
            >
              {item}
            </motion.span>
          );
        })}
        <motion.div
          className={style.sub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {subtesto}
        </motion.div>
      </motion.div>
    );
  }
}

export default TitleAnimations;
