import { FC } from "react";
import { CiSearch } from "react-icons/ci";
interface ISearchBar {
  withStyle?: string;
}
const SearchBar: FC<ISearchBar> = ({ withStyle }) => {
  return (
    <span
      className={`w-full rounded-[3px] grow bg-[#ffffff] flex items-center px-1 py-0.5 xl:py-1 duration-300 ${withStyle}`}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{ fontSize: 14 }}
        className="grow focus:outline-none"
        maxLength={80}
      />
      <CiSearch size={24} />
    </span>
  );
};

export default SearchBar;
