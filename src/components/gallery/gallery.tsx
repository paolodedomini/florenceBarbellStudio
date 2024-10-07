"use client";
import React from "react";
import style from "./gallery.module.scss";
import Image from "next/image";

import { BsInstagram } from "react-icons/bs";

function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className={style.galleryWrapper}>
      <div
        className={style.galleryText}
        onClick={() => {
          window.open(
            "https://www.instagram.com/florence_barbell_studio/",
            "_blank"
          );
        }}
      >
        <h3>seguici su:</h3>
        <BsInstagram className={style.galleryText__icon} />
      </div>
      <div className={style.gallery}>
        {images.map((image, index) => (
          <div key={index} className={style.gallery__single}>
            <Image
              src={image}
              width={300}
              height={250}
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryGrid;
