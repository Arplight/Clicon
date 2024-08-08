"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { FC } from "react";
import ProductCard from "../product_card/productCard";
import MainSection from "../main_section/mainSection";

interface ICarousel {
  cardsData: Product[] | undefined;
  carouselTitle: string;
}
const Carousel: FC<ICarousel> = ({ cardsData, carouselTitle }) => {
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
            cardsData.map((card) => (
              <SwiperSlide key={card.id} className="pb-6 pr-[6px]">
                <ProductCard
                  cardDescription={card.description}
                  cardTitle={card.title}
                  cardPrice={card.price}
                  cardId={card.id}
                  cardImages={card.images}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </MainSection>
  );
};

export default Carousel;
