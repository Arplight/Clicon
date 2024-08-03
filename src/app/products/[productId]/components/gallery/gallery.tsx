"use client";

import Image from "next/image";
import { FC, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IGallery {
  images: string[];
  productTitle: string;
}
const Gallery: FC<IGallery> = ({ images, productTitle }) => {
  // state
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  //   Handlers
  function sliderChangeHandler(swiper: any): void {
    setCurrentSlider(swiper.activeIndex);
  }

  function selectHandler(selected: number) {
    setSelectedImage(selected);

    if (swiperRef.current) {
      swiperRef.current.slideTo(selected);
    }
  }
  return (
    <span className="w-full md:w-1/2 h-[500px]">
      <div className="h-4/5">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper details-slider h-full"
          onSlideChange={sliderChangeHandler}
        >
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${productTitle}-${index}`}
                    fill
                    aria-label="product image"
                    className="object-contain object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="mt-1 overflow-x-scroll overflow-y-hidden h-1/5">
        <ul className="flex gap-1 h-full">
          {images &&
            images.map((image, index) => (
              <li
                key={index}
                onClick={() => selectHandler(index)}
                className={`rounded-[3px] cursor-pointer ${
                  currentSlider === index && "border-2 border-[#fa8232]"
                }`}
              >
                <div className="relative w-[100px] h-full ">
                  <Image
                    src={image}
                    alt={`${productTitle}-${index}`}
                    fill
                    aria-label="product image"
                    className="object-contain object-center"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </span>
  );
};

export default Gallery;
