"use client";
import { FC } from "react";
import MainButton from "../buttons/main_button/mainButton";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface IProductCard {
  cardTitle: string;
  cardDescription: string;
  cardPrice: number;
  cardId: number;
  cardImages: string[];
}

const ProductCard: FC<IProductCard> = ({
  cardTitle,
  cardDescription,
  cardPrice,
  cardImages,
  cardId,
}) => {
  const formatedPath: string = cardTitle?.replaceAll(" ", "-");

  return (
    <div
      className="flex flex-col gap-1 p-1.5 border-2 border-[#E4E7E9] rounded-[3px] w-[300px] duration-700 hover:shadow-lg overflow-hidden m-auto"
      aria-label={cardTitle}
    >
      <Link href={`products/${formatedPath}-${cardId}`}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {cardImages &&
            cardImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden relative h-[280px]">
                  <Image
                    src={image}
                    fill
                    alt={cardTitle}
                    className="object-center object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Link>
      <div className="flex flex-col gap-0.5">
        <Link href={`products/${formatedPath}-${cardId}`}>
          <h3 className="">{cardTitle}</h3>
        </Link>
        <p className="small-paragraph">
          {cardDescription?.length > 75
            ? cardDescription?.slice(0, 75) + "..."
            : cardDescription}
        </p>
        <p className="small-paragraph font-sky font-bold">
          ${cardPrice?.toFixed(2)?.toLocaleString()}
        </p>
        <MainButton
          buttonLabel={"Add to cart"}
          buttonRole={"button"}
          isHollow={false}
          isLarge={true}
          isLoading={false}
          isDisabled={false}
          buttonIcon={<GiShoppingCart size={20} />}
          withStyle="mt-2"
        />
      </div>
    </div>
  );
};

export default ProductCard;
