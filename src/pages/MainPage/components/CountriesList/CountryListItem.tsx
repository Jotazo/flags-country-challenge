import { Country } from "../../../../interfaces";

import { addCommas } from "../../../../utils/addCommas";

import "./CountryListItem.css";

interface Props {
  country: Country;
}

const CountryListItem: React.FC<Props> = ({ country }) => {
  return (
    <li className="flex flex-col rounded-lg dark:bg-darkBlue bg-white card transition-colors duration-500">
      <img
        src={country.flag}
        alt={country.region}
        className="object-fill rounded-tl-lg rounded-tr-lg w-[345px] h-[230px]"
      />
      <main className="flex flex-col gap-4 px-6 pt-8 pb-12 dark:text-white text-darkBlueLightText">
        <h3 className="font-extrabold text-lg">{country.name}</h3>

        <section className="flex flex-col gap-2">
          <span className="text-sm font-semibold">
            Population:{" "}
            <span className="font-light">{addCommas(country.population)}</span>
          </span>
          <span className="text-sm font-semibold">
            Region: <span className="font-light">{country.region}</span>
          </span>
          <span className="text-sm font-semibold">
            Capital: <span className="font-light">{country.capital}</span>
          </span>
        </section>
      </main>
    </li>
  );
};

export default CountryListItem;
