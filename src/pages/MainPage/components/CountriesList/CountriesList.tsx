import { Country } from "../../../../interfaces";
import CountryListItem from "./CountryListItem";

interface Props {
  countries: Country[];
}

const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <ul className="grid gap-y-8 place-content-center place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {countries.map((country, index) => (
        <CountryListItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountriesList;
