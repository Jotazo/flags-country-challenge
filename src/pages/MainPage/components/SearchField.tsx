import { SearchIcon } from "../../../assets/Icons";

import "./SearchField.css";

const SearchField = () => {
  return (
    <div className="w-100 max-w-[480px] relative flex">
      <div className="absolute top-[50%] left-[28px] sm:left-[30px]">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for a country"
        className="dark:bg-darkBlue searchField-input text-sm p-4 pl-9 w-11/12 rounded-md mt-4 mx-auto outline-none dark:text-white"
      />
    </div>
  );
};

export default SearchField;
