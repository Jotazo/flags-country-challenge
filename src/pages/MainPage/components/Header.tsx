import CountrySelector from "./CountrySelector";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <SearchField />
      <CountrySelector />
    </div>
  );
};

export default Header;
