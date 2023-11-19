import { Country } from "../../../interfaces";

interface Props {
  country: Country;
}

const SecondaryInfo: React.FC<Props> = ({ country }) => {
  return (
    <section className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        Top Level Domain:{" "}
        <span className="font-light">{country.topLevelDomain}</span>
      </span>
      <span className="text-sm font-semibold">
        Currencies: <span className="font-light">{country.currencies}</span>
      </span>
      <span className="text-sm font-semibold">
        Languages: <span className="font-light">{country.languages}</span>
      </span>
    </section>
  );
};

export default SecondaryInfo;
