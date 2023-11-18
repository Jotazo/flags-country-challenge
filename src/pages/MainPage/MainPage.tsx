import { Country } from "../../interfaces";

import CountriesList from "./components/CountriesList/CountriesList";
import Header from "./components/Header/Header";

interface Props {
  countries: Country[];
}

const MainPage: React.FC<Props> = ({ countries }) => {
  return (
    <div className="container px-4 pt-4 mx-auto">
      <Header />
      <CountriesList countries={countries} />
    </div>
  );
};

export default MainPage;
