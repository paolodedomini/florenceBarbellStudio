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
import { useState } from "react";
import SimpleModal from "../modals/simpleModal";
import { AnimatePresence } from "motion/react";

function CarouselImage({ data }: { data: string[] }) {
  const [modalImage, setmodalImage] = useState<null | string>(null);
  const [modalState, setmodalstate] = useState<boolean>(false);
  console.log(modalImage);
  return (
    <>
      <div className={style.carouselImage}>
        {" "}
        <>
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode]}
            className="mySwiper"
            effect="fade"
            slidesPerView={3}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {item && (
                    <div
                      className={style.carouselImage__wrapperSlide}
                      onClick={() => {
                        setmodalImage(() => {
                          setmodalstate(true);
                          return item;
                        });
                      }}
                    >
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

      <SimpleModal
        image={modalImage}
        title={"immagine palestra"}
        modalState={modalState}
        setmodalstate={setmodalstate}
      />
    </>
  );
}

export default CarouselImage;
