"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import style from "./loader.module.scss";
export const ImagePreload = ({
  src,
  alt,
  width,
  height,
  full,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  full?: boolean;
}) => {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  return (
    <div
      className={`${style.imagePreloadWrapper} ${full ? style.full : ""}`}
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      {full ? (
        <Image
          className={style.imagePreload}
          src={src}
          alt={alt}
          layout="fill"
          style={{ visibility, objectFit: "cover", width: "100%" }}
          onError={() => setReveal(true)}
          onLoadingComplete={() => setReveal(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ visibility }}
          onError={() => setReveal(true)}
          onLoadingComplete={() => setReveal(true)}
        />
      )}
      <AnimatePresence>
        {!reveal && (
          <motion.div
            className={style.loader}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <Image
                src="/image/florencebarbellstudiologo.png"
                width={300}
                height={58}
                alt="logo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ImagePreload;
