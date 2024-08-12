"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface ISearchBar {
  withStyle?: string;
}
const SearchBar: FC<ISearchBar> = ({ withStyle }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery: string = searchParams.get("query") || "";
  const [queryValue, setQueryValue] = useState<string>(currentQuery);
  // state syncing with params
  useEffect(() => {
    setQueryValue(currentQuery);
  }, [currentQuery]);
  // Handlers
  const searchUrlHandler = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.set("query", query);
    params.set("page", "0");

    const newURL = `/products?${params.toString()}`;
    router.push(newURL);
  };

  return (
    <form
      action=""
      method="post"
      className={`w-full rounded-[3px] grow bg-[#ffffff] flex items-center px-1 py-0.5 xl:py-1 duration-300 ${withStyle}`}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{ fontSize: 14 }}
        className="grow focus:outline-none"
        maxLength={80}
        value={queryValue}
        onChange={(e) => setQueryValue(e.target.value)}
      />
      <button
        type="submit"
        role="button"
        aria-label="search-bar"
        onClick={(e) => {
          e.preventDefault();
          searchUrlHandler(queryValue);
        }}
      >
        <CiSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
