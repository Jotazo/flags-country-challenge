import useAppStore from "../../../store/useAppStore";

import { Country } from "../../../interfaces";

interface Props {
  country: Country;
}

const Footer: React.FC<Props> = ({ country }) => {
  const onClickBorderCountry = useAppStore(
    (state) => state.onClickBorderCountry
  );

  return (
    <footer>
      <h4 className="font-semibold">Border Countries:</h4>
      {country.borderCountries.length === 0 ? (
        <span className="font-light text-sm">No border countries found</span>
      ) : (
        <ul className="flex gap-x-2 flex-wrap">
          {country.borderCountries.map((borderCountry) => (
            <li
              onClick={() => onClickBorderCountry(borderCountry)}
              key={borderCountry}
              className="inputs !py-2 !my-2 !px-6 bg-white text-center cursor-pointer"
            >
              {borderCountry}
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
};

export default Footer;
