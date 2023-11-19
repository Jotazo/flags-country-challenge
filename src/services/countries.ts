import { ApiCountry } from "./interfaces";

import { handleBorderCountries } from "../utils/handleBorderCountries";

import { Country } from "../interfaces";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/all`);
  const data = await response.json();
  return data.map((country: ApiCountry) => {
    let nativeName = "";
    const hasNativeName = country.name.nativeName;
    if (!hasNativeName) nativeName = country.name.common;
    else {
      const nativeNameKey = Object.keys(country.name.nativeName)[0];
      nativeName = country.name.nativeName[nativeNameKey].common;
    }

    return {
      flag: country.flags.png,
      name: country.name.common,
      nativeName,
      population: country.population,
      region: country.region,
      subregion: !country.subregion ? "" : country.subregion,
      capital: !country.capital ? [] : country.capital,
      topLevelDomain: !country.tld ? [] : country.tld,
      currencies: country.currencies
        ? Object.values(country.currencies).map((curr) => curr.name)
        : [],
      languages: country.languages
        ? Object.values(country.languages).map((language) => language)
        : [],
      borderCountries: !country.borders
        ? []
        : handleBorderCountries(data, country.borders),
    } as Country;
  });
};
