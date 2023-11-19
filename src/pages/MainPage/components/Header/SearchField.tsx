import useAppStore from "../../../../store/useAppStore";

import { SearchIcon } from "../../../../assets/Icons";

const SearchField = () => {
  const searchField = useAppStore((state) => state.searchField);
  const setSearchField = useAppStore((state) => state.setSearchField);

  return (
    <div className="relative flex w-full mb-4 sm:mb-0">
      <div className="absolute top-[41%] left-[12px]">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for a country"
        className="w-full max-w-[480px] !pl-9 inputs"
        onChange={setSearchField}
        value={searchField}
      />
    </div>
  );
};

export default SearchField;
