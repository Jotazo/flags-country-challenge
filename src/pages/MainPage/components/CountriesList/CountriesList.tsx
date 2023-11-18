import useAppStore from "../../../../store/useAppStore";
import { filterCountries } from "../../../../utils/filterCountries";

import CountryListItem from "./CountryListItem";

const CountriesList = () => {
  const countries = useAppStore((state) => state.countries);
  const searchField = useAppStore((state) => state.searchField);
  const regionFilter = useAppStore((state) => state.regionFilter);

  const countriesToShow = filterCountries(countries, {
    regionFilter,
    searchField,
  });

  return (
    <ul className="grid gap-y-8 place-content-center place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {countriesToShow.map((country, index) => (
        <CountryListItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountriesList;
