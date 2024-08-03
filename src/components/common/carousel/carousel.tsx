"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { FC } from "react";
import ProductCard from "../product_card/productCard";
import MainSection from "../main_section/mainSection";

type cardsData = {
  cardDescription: string;
  cardTitle: string;
  cardPrice: number;
  cardId: number;
  cardImages: string[];
};
interface ICarousel {
  cardsData: cardsData[];
  carouselTitle: string;
}
const Carousel: FC<ICarousel> = ({ cardsData, carouselTitle }) => {
  const images: string[] = [
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png",
  ];
  return (
    <MainSection withStyle="flex justify-center">
      <div className="container m-auto">
        <h1 className="mb-2 text-center">{carouselTitle}</h1>

        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper carousel "
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {cardsData &&
            cardsData.map((property, index) => (
              <SwiperSlide key={index} className="pb-6 pr-[6px]">
                <ProductCard
                  cardDescription="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
                  cardTitle="AKG K240"
                  cardPrice={12000}
                  cardId={12}
                  cardImages={images}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </MainSection>
  );
};

export default Carousel;
