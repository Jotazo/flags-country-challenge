import { ApiCountry } from "../services/interfaces";

export const handleBorderCountries = (
  apiCountries: ApiCountry[],
  countryBorders: string[]
) => {
  const borderCountries: string[] = [];
  countryBorders.forEach((countryBorder) => {
    const countryBorderFounded = apiCountries.find(
      (apiCountry) => apiCountry.fifa === countryBorder
    );
    if (countryBorderFounded)
      borderCountries.push(countryBorderFounded?.name.common);
  });
  return borderCountries;
};
