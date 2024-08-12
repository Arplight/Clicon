"use client";
import { FC, useState } from "react";
import MainButton from "../buttons/main_button/mainButton";
import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FadeLoader } from "react-spinners";
import useCart from "@/src/lib/hooks/useCart";

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
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);
  // cart handler
  const { addingHandler, isAddedToCart } = useCart({
    itemTitle: cardTitle,
    itemDescription: cardDescription,
    itemPrice: cardPrice,
    itemImage: cardImages[0],
    itemId: cardId,
  });
  return (
    <div
      className="flex flex-col gap-1 p-1.5 border-2 border-[#E4E7E9] rounded-[3px] w-[300px] duration-700 hover:shadow-lg overflow-hidden m-auto"
      aria-label={cardTitle}
    >
      <Link href={`products/${formatedPath}-${cardId}`}>
        {cardImages && cardImages.length > 1 ? (
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
            {cardImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden relative h-[280px] flex">
                  {imageIsLoading && (
                    <FadeLoader
                      color="#fa8232"
                      height={15}
                      radius={0}
                      width={5}
                      cssOverride={{ margin: "auto", zIndex: 100 }}
                    />
                  )}
                  <Image
                    src={image}
                    fill
                    alt={cardTitle}
                    className="object-center object-cover"
                    onLoad={() => setImageIsLoading(false)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="overflow-hidden relative h-[280px] flex">
            {imageIsLoading && (
              <FadeLoader
                color="#fa8232"
                height={15}
                radius={0}
                width={5}
                cssOverride={{ margin: "auto", zIndex: 100 }}
              />
            )}
            <Image
              src={cardImages[0]}
              fill
              alt={cardTitle}
              className="object-center object-cover"
              onLoad={() => setImageIsLoading(false)}
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col gap-0.5">
        <Link href={`products/${formatedPath}-${cardId}`}>
          <h3 title={cardTitle}>
            {cardTitle.length > 23 ? cardTitle.slice(0, 23) + "..." : cardTitle}
          </h3>
        </Link>
        <p className="small-paragraph" title={cardDescription}>
          {cardDescription?.length > 60
            ? cardDescription?.slice(0, 60) + "..."
            : cardDescription}
        </p>
        <p className="small-paragraph font-sky font-bold">
          ${cardPrice?.toFixed(2)?.toLocaleString()}
        </p>
        <MainButton
          buttonLabel={isAddedToCart ? "Added to cart" : "Add to cart"}
          buttonRole={"button"}
          isHollow={false}
          isLarge={true}
          isLoading={false}
          isDisabled={isAddedToCart}
          buttonIcon={<GiShoppingCart size={20} />}
          withStyle="mt-2"
          onClick={addingHandler}
        />
      </div>
    </div>
  );
};

export default ProductCard;
