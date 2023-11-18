import RegionSelector from "./RegionSelector";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <SearchField />
      <RegionSelector />
    </div>
  );
};

export default Header;
