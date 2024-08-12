"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Filter = ({ categoriesData }: { categoriesData: string[] }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory: string | null = searchParams.get("category");
  const [currentCategory, setCurrentCategory] = useState<null | string>(
    selectedCategory
  );
  // state syncing with params
  useEffect(() => {
    setCurrentCategory(selectedCategory || null);
  }, [selectedCategory]);
  // Handlers
  const categoryUrlHandler = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("query");
    params.set("category", category || "");
    params.set("page", "0");

    const newURL = `${pathName}?${params.toString()}`;
    router.push(newURL);
  };

  function categoryHandler(category: string): void {
    setCurrentCategory(category);
    categoryUrlHandler(category);
  }

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
            >
              <input
                type="radio"
                name="category"
                id={`category-${index}`}
                checked={category === currentCategory}
                onChange={() => void categoryHandler(category)}
              />
              <label className="font-gray-700" htmlFor={`category-${index}`}>
                {category}
              </label>
            </li>
          ))}
      </ul>
      <select
        name="categories_list"
        className="block xl:hidden large-paragraph w-full p-0.5"
        onChange={(e) => void categoryHandler(e.target.value)}
      >
        {categoriesData &&
          categoriesData.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
      </select>
    </aside>
  );
};

export default Filter;
