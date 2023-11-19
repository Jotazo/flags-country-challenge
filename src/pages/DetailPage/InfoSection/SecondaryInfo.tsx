import { Country } from "../../../interfaces";

import SecondaryInfoArticle from "./components/SecondaryInfoArticle";

interface Props {
  country: Country;
}

const SecondaryInfo: React.FC<Props> = ({ country }) => {
  return (
    <section className="flex flex-col gap-2">
      <SecondaryInfoArticle
        label="Top Level Domain:"
        messageNoArrValues="No top level domain found"
        strArr={country.topLevelDomain}
      />
      <SecondaryInfoArticle
        label="Currencies:"
        messageNoArrValues="No currencies found"
        strArr={country.currencies}
      />
      <SecondaryInfoArticle
        label="Languages:"
        messageNoArrValues="No languages found"
        strArr={country.languages}
      />
    </section>
  );
};

export default SecondaryInfo;
