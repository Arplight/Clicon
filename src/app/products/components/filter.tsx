"use client";

import { FC, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

interface IFilter {
  categoriesData: string[];
}
interface IPrice {
  minValue: number;
  maxValue: number;
}
const Filter: FC<IFilter> = ({ categoriesData }) => {
  const [currentCategory, setCurrentCategory] = useState<null | string>(null);
  const [minValue, set_minValue] = useState<number>(25);
  const [maxValue, set_maxValue] = useState<number>(75);

  // Handlers
  function categoryHandler(category: string): void {
    setCurrentCategory(category);
  }
  const inputHandler = (values: IPrice) => {
    set_minValue(values.minValue);
    set_maxValue(values.maxValue);
  };

  return (
    <aside className="w-full sm:w-4/5 m-auto xl:m-0 xl:w-1/6 xl:sticky xl:top-[80px] xl:top-[100px] z-[500] p-1 bg-[#ffffff] shadow-lg rounded-md h-min">
      <ul className="flex flex-col gap-1">
        {categoriesData &&
          categoriesData.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer font-bold text-[#1b6392] rounded-md py-0.5 px-1 border-b-2 border-[#1b6392] shadow-lg hover:text-[#fa8232] hover:border-[#fa8232] duration-300 ${
                category === currentCategory &&
                "text-[#fa8232] border-[#fa8232]"
              }`}
              onClick={() => void categoryHandler(category)}
            >
              <h3>{category}</h3>
            </li>
          ))}
      </ul>
      <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        label="true"
        ruler="false"
        barLeftColor="#ffffff"
        barRightColor="#ffffff"
        barInnerColor=" #1b6392"
        thumbLeftColor="#ffffff"
        thumbRightColor="#ffffff"
        style={{
          border: "none",
          boxShadow: "none",
          padding: "15px 10px",
          marginTop: 20,
          fontSize: 16,
        }}
        onInput={(e: IPrice) => {
          inputHandler({ minValue: e.minValue, maxValue: e.maxValue });
        }}
      />
    </aside>
  );
};

export default Filter;
