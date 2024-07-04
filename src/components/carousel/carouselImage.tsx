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
import { FreeMode } from "swiper/modules";
import style from "./carousel.module.scss";
import ImagePreload from "../loaders/imagePreLoad";

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
                    <ImagePreload
                      src={item}
                      alt={"immagine palestra"}
                      isLazy={true}
                      type={"fill"}
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
