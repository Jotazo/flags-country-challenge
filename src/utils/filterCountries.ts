import { Country } from "../interfaces";

export const filterCountries = (
  countriesToFilter: Country[],
  filters: { regionFilter: string; searchField: string }
) => {
  const { regionFilter, searchField } = filters;

  const searchRegExp = new RegExp(`^${searchField}`, "i");

  return countriesToFilter
    .filter((country) => {
      if (regionFilter !== "")
        return (
          country.region === regionFilter && searchRegExp.test(country.name)
        );
      return searchRegExp.test(country.name);
    })
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
};
