import useAppStore from "../../../../store/useAppStore";

import CountryListItem from "./CountryListItem";

// const CountriesList: React.FC<Props> = ({ countries }) => {
const CountriesList = () => {
  const countries = useAppStore((state) => state.countries);
  return (
    <ul className="grid gap-y-8 place-content-center place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {countries.map((country, index) => (
        <CountryListItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountriesList;
