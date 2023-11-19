import { Country } from "../../../interfaces";

import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";

interface Props {
  country: Country;
}

const InfoSection: React.FC<Props> = ({ country }) => {
  return (
    <main className="flex flex-col gap-8 md:gap-4">
      <header>
        <h3 className="font-extrabold text-lg">{country.name}</h3>
      </header>
      <section className="flex flex-col gap-10 md:flex-row">
        <PrimaryInfo country={country} />
        <SecondaryInfo country={country} />
      </section>
      <footer>
        <h4 className="font-semibold">Border Countries:</h4>
        {country.borderCountries.length === 0 ? (
          <span className="font-light text-sm">No border countries found</span>
        ) : (
          <ul className="flex gap-x-2 flex-wrap">
            {country.borderCountries.map((borderCountry) => (
              <li
                key={borderCountry}
                className="inputs !py-2 !my-2 !px-6 bg-white text-center"
              >
                {borderCountry}
              </li>
            ))}
          </ul>
        )}
      </footer>
    </main>
  );
};

export default InfoSection;
