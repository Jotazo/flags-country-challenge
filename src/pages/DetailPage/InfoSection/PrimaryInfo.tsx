import { Country } from "../../../interfaces";

import { addCommas } from "../../../utils/addCommas";

interface Props {
  country: Country;
}

const PrimaryInfo: React.FC<Props> = ({ country }) => {
  return (
    <section className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        Native Name: <span className="font-light">{country.nativeName}</span>
      </span>
      <span className="text-sm font-semibold">
        Population:{" "}
        <span className="font-light">{addCommas(country.population)}</span>
      </span>
      <span className="text-sm font-semibold">
        Region: <span className="font-light">{country.region}</span>
      </span>
      <span className="text-sm font-semibold">
        Subregion: <span className="font-light">{country.subregion}</span>
      </span>
      <span className="text-sm font-semibold">
        Capital: <span className="font-light">{country.capital}</span>
      </span>
    </section>
  );
};

export default PrimaryInfo;
