import MainButton from "@/src/components/common/buttons/main_button/mainButton";
import QuantityButton from "@/src/components/common/buttons/quantity_button/quantityButton";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";

import { FC } from "react";
import { IoStar } from "react-icons/io5";

interface ISummary {
  summaryRate: number;
  summaryTitle: string;
  summaryDescription: string;
  summaryCategory: string;
  summaryBrand: string;
  summarySku: string;
  summaryAvailability: number;
  summaryPrice: number;
  summaryDiscountPercentage: number;
}
const Summary: FC<ISummary> = ({
  summaryRate,
  summaryTitle,
  summaryDescription,
  summaryCategory,
  summaryBrand,
  summarySku,
  summaryAvailability,
  summaryPrice,
  summaryDiscountPercentage,
}) => {
  const discountPrice: number =
    summaryPrice * (1 - summaryDiscountPercentage / 100);
  return (
    <span className="w-ful md:w-1/2">
      <ul className="flex flex-col gap-2 border-b border-[#E4E7E9] pb-1.5">
        <li key={"intro"} className="flex flex-col gap-1">
          <div className="flex items-center">
            <IoStar size={20} className="font-primary" />
            <p className="small-paragraph ml-1 leading-[0px]">
              {summaryRate} Star Rating
            </p>
          </div>
          <h3>{summaryTitle}</h3>
        </li>
        <li key={"specs"} className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="w-1/2 flex flex-col gap-1">
              <div className="flex gap-0.5">
                <p className="font-gray-600 small-paragraph">Sku: </p>
                <b className="small-paragraph">{summarySku} </b>
              </div>
              <div className="flex gap-0.5">
                <p className="font-gray-600 small-paragraph">Brand: </p>
                <b className="small-paragraph">{summaryBrand} </b>
              </div>
            </span>
            <span className="w-1/2 flex flex-col gap-1">
              <div className="flex gap-0.5">
                <p className="font-gray-600 small-paragraph">Availability: </p>
                <b
                  className={`small-paragraph ${
                    summaryAvailability > 0 ? "font-success" : "font-danger"
                  }`}
                >
                  {summaryAvailability > 0 ? "In Stock" : "Out Of Stock"}
                </b>
              </div>
              <div className="flex gap-0.5">
                <p className="font-gray-600 small-paragraph">Category: </p>
                <b className="small-paragraph">{summaryCategory}</b>
              </div>
            </span>
          </div>
        </li>
        <li key={"description"}>
          <p className="large-paragraph font-bold mb-1">Description: </p>
          <p className="small-paragraph font-gray-600">{summaryDescription}</p>
        </li>
        <li key={"price"} className="flex gap-1 items-center">
          <h2 className="font-sky">
            ${Number(discountPrice).toFixed(2).toLocaleString()}
          </h2>
          <p className="large-paragraph font-gray-600 line-through">
            ${summaryPrice}
          </p>
          <span className="p-0.5 rounded-sm bg-[#EFD33D]">
            <p className="small-paragraph font-bold">
              {summaryDiscountPercentage}% OFF
            </p>
          </span>
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-2.5">
        <li key={"functionality"} className="flex gap-2 items-center">
          <QuantityButton />
          <MainButton
            buttonLabel={"Add to cart"}
            buttonRole={"button"}
            isHollow={false}
            isLarge={false}
            isLoading={false}
            isDisabled={false}
            buttonIcon={<GiShoppingCart size={20} />}
          />
        </li>
        <li key={"fav"} className="flex gap-0.5 font-gray-700 cursor-pointer">
          <IoMdHeartEmpty size={20} />
          <p className="small-paragraph">Add to wishlist</p>
        </li>
      </ul>
    </span>
  );
};

export default Summary;
