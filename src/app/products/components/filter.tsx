"use client";
import { FC, useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";

interface IFilter {
  categoriesData: string[];
}
// interface IPrice {
//   minValue: number;
//   maxValue: number;
// }
const Filter: FC<IFilter> = ({ categoriesData }) => {
  const [currentCategory, setCurrentCategory] = useState<null | string>(null);
  // const [minValue, set_minValue] = useState<number>(25);
  // const [maxValue, set_maxValue] = useState<number>(75);

  // Handlers
  function categoryHandler(category: string): void {
    setCurrentCategory(category);
  }
  // const inputHandler = (values: IPrice) => {
  //   set_minValue(values.minValue);
  //   set_maxValue(values.maxValue);
  // };

  return (
    <aside className="w-full sm:w-4/5 m-auto xl:m-0 xl:w-1/6 p-2 bg-[#ffffff] shadow-lg rounded-md h-min">
      <h3 className="mb-1">Category</h3>
      <ul className="hidden xl:flex flex-col gap-1">
        {categoriesData &&
          categoriesData.map((category, index) => (
            <li
              key={index}
              className={`mb-0.5 small-paragraph flex gap-1 font-bold hover:text-[#fa8232] hover:border-[#fa8232] duration-300 ${
                category === currentCategory &&
                "text-[#fa8232] border-[#fa8232]"
              }`}
              onClick={() => void categoryHandler(category)}
            >
              <input type="radio" name="category" id={`category-${index}`} />
              <label className="font-gray-700" htmlFor={`category-${index}`}>
                {category}
              </label>
            </li>
          ))}
      </ul>
      <select
        name="categories_list"
        className="block xl:hidden large-paragraph w-full p-0.5"
      >
        {categoriesData &&
          categoriesData.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
      </select>
      {/* <div className="mt-2">
        <h3>Price range</h3>
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
            padding: "15px 0px",
            fontSize: 16,
          }}
          onInput={(e: IPrice) => {
            inputHandler({ minValue: e.minValue, maxValue: e.maxValue });
          }}
        />
      </div> */}
    </aside>
  );
};

export default Filter;
