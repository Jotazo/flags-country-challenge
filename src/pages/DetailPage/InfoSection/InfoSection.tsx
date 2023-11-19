import { Country } from "../../../interfaces";

import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import Footer from "./Footer";

interface Props {
  country: Country;
}

const InfoSection: React.FC<Props> = ({ country }) => {
  return (
    <main className="flex flex-col gap-8 md:gap-4 xl:p-10">
      <header>
        <h3 className="font-extrabold text-lg xl:text-[32px]">{country.name}</h3>
      </header>
      <section className="flex flex-col gap-10 md:flex-row">
        <PrimaryInfo country={country} />
        <SecondaryInfo country={country} />
      </section>
      <Footer country={country} />
    </main>
  );
};

export default InfoSection;
