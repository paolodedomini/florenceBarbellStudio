"use client";
import Image, { StaticImageData } from "next/image";
import style from "./Hero.module.scss";
import { easeOut, motion, useTransform, useScroll } from "framer-motion";
import { useState } from "react";
import LoaderSite from "@/components/loaders/loader";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import ImagePreload from "../loaders/imagePreLoad";
/**
 * HERO VIDEO
 * Componente per la gestione del video in homepage con testo
 *
 * @param {{ videoURL: string; data: any }} param0
 * variabile videoURL: string,
 * definisce l'url del video
 * variabile data: any
 * definisce il testo da visualizzare, può essere un oggetto complesso
 */

function HeroVideo({
  typeOfData,
  IMGURL,
  VIDEOURL,
  data,
}: {
  IMGURL?: StaticImageData;
  data: any;
  typeOfData: "video" | "image";
  VIDEOURL?: string;
}) {
  const isHome = usePathname() === "/" + useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -500]);
  if (!isHome) {
    return null;
  }
  return (
    <section className={style.hero}>
      <div className={style.hero__wrapperVideo}>
        <motion.svg
          width="419"
          height="145"
          viewBox="0 0 419 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: "30%" }}
          transition={{ duration: 1, ease: easeOut, delay: 2 }}
        >
          <path d="M128.457 1H1V35.1957H128.457V1Z" stroke="white" />
          <path
            d="M112.913 53.8478H1V144H32.087V81.8261H112.913V53.8478Z"
            stroke="white"
          />
          <path
            d="M234.152 1H150.217V32.087H227.935C243.478 32.087 240.369 38.3043 240.369 47.6304C240.369 55.0913 232.08 56.9565 227.935 56.9565H150.217V144H243.478C255.913 144 274.565 137.783 277.674 100.478C279.326 80.6513 267.312 69.3913 262.13 66.2826C265.239 63.1739 268.348 60.0652 268.348 35.1957C268.348 22.7609 252.804 1 234.152 1Z"
            stroke="white"
          />
          <path
            d="M168.87 112.913V97.3696V94.2609H243.478C245.551 95.2971 249.696 98.6131 249.696 103.587C249.696 108.561 245.551 111.877 243.478 112.913H168.87Z"
            stroke="white"
          />
          <path
            d="M350.062 1H406.315C410.065 1 417.565 4.23774 417.565 17.1887C417.565 30.1396 410.065 33.3774 406.315 33.3774H352.875C343.874 33.3774 344.437 56.5854 350.062 56.5854C358.5 56.9437 378.188 57.6604 389.439 57.6604C406.186 61.9774 407.668 90.0377 406.315 103.528C406.315 127.272 395.064 141.302 369.751 144H310.685C305.06 144 299.435 138.604 299.435 125.113C299.435 114.321 306.935 108.925 310.685 108.925H366.938C368.813 108.925 375.376 106.226 375.376 98.1321C375.376 89.2324 371.733 87.3396 368.505 87.3396H335.999C326.624 86.4403 308.435 76.5472 310.685 44.1698C312.936 11.7925 337.874 1.89937 350.062 1Z"
            stroke="white"
          />
        </motion.svg>

        {typeOfData === "video" && (
          <>
            {" "}
            <video
              autoPlay
              loop
              muted
              playsInline
              className={style.hero__video}
            >
              <source src={VIDEOURL} type="video/mp4" />
              <Image
                className={style.hero__image}
                src={IMGURL || ""}
                layout="fill"
                alt="Immagine Principale HomePage"
                onLoadingComplete={() => setLoading(false)}
                priority
              />
            </video>
            <div className={style.hero__wrapperImg}>
              <Image
                className={style.hero__image}
                src={IMGURL || ""}
                layout="fill"
                alt="Immagine Principale HomePage"
                onLoadingComplete={() => setLoading(false)}
                priority
              />
              {loading && <LoaderSite loading={loading} />}
            </div>
          </>
        )}
        {typeOfData === "image" && (
          <ImagePreload
            src={IMGURL || ""}
            alt="heroImage"
            type={"hero"}
            width={1920}
            height={1080}
            isLazy={true}
          />
        )}
      </div>

      <motion.div className={style.hero__text} style={{ y }}>
        <motion.ul variants={container} initial="hidden" animate="show">
          {data.list.map((listItem: string, index: number) => (
            <motion.li key={index} variants={item}>
              <span>{listItem}</span>
            </motion.li>
          ))}
        </motion.ul>{" "}
        <motion.div
          className={style.hero__text__quoteBy}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {data.quoteBy}
        </motion.div>
      </motion.div>
    </section>
  );
}
export default HeroVideo;
