"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "./carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
/* import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules"; */
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import Image from "next/image";
import style from "./carousel.module.scss";

function CarouselImage({ data }: { data: string[] }) {
  return (
    <div className={style.carouselImage}>
      {" "}
      <>
        <Swiper
          spaceBetween={10}
          navigation={false}
          modules={[FreeMode]}
          autoplay={{ delay: 2 }}
          className="mySwiper"
          effect="fade"
          slidesPerView={3}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {item && (
                  <div className={style.carouselImage__wrapperSlide}>
                    <Image
                      src={item}
                      alt={"immagine palestra"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
}

export default CarouselImage;
