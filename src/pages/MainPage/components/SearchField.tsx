import { SearchIcon } from "../../../assets/Icons";

import "./SearchField.css";

const SearchField = () => {
  return (
    <div className="w-100 relative flex">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search for a country"
        className="dark:bg-darkBlue searchField-input text-xs p-4 pl-12 w-11/12 rounded-md mt-4 mx-auto outline-none dark:text-white"
      />
    </div>
  );
};

export default SearchField;
