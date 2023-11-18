import { ApiCountry, Country } from "../interfaces";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${API_URL}/all`);
  const data = await response.json();
  return data.map((country: ApiCountry) => ({
    name: country.name.common,
    capital: country.capital,
    population: country.population,
    region: country.region,
    flag: country.flags.png,
  }));
};
