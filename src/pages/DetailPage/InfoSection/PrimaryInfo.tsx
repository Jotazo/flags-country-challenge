import { Country } from "../../../interfaces";

import { addCommas } from "../../../utils/addCommas";

import PrimaryInfoArticle from "./components/PrimaryInfoArticle";

interface Props {
  country: Country;
}

const PrimaryInfo: React.FC<Props> = ({ country }) => {
  return (
    <section className="flex flex-col gap-2">
      <PrimaryInfoArticle label="Native Name:">
        {country.nativeName}
      </PrimaryInfoArticle>
      <PrimaryInfoArticle label="Population:">
        {addCommas(country.population)}
      </PrimaryInfoArticle>
      <PrimaryInfoArticle label="Region:">{country.region}</PrimaryInfoArticle>
      <PrimaryInfoArticle label="Subregion:">
        {country.subregion === "" ? "No subregion founded" : country.subregion}
      </PrimaryInfoArticle>
      <PrimaryInfoArticle label="Capital:">
        {country.capital.length === 0
          ? "No capitals found"
          : country.capital.map((capital) => capital)}
      </PrimaryInfoArticle>
    </section>
  );
};

export default PrimaryInfo;
