import { SearchIcon } from "../../../assets/Icons";

const SearchField = () => {
  return (
    <div className="relative flex w-full mb-4 sm:mb-0">
      <div className="absolute top-[41%] left-[12px]">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for a country"
        className="w-full max-w-[480px] !pl-9 inputs"
      />
    </div>
  );
};

export default SearchField;
