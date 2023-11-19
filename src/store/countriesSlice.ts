import { StateCreator } from "zustand";

import { getAllCountries } from "../services/countries";

import { AppSlices, CountriesSlice } from "./interfaces";

// TODO: Handle Loading/Error state fetching
const createCountriesSlice: StateCreator<AppSlices, [], [], CountriesSlice> = (
  set,
  get
) => ({
  countries: [],
  countrySelected: null,
  regions: [],
  loading: false,
  getCountries: async () => {
    get().setLoading(true);
    const countries = await getAllCountries();
    const regions = [
      ...new Set(countries.map((country) => country.region)),
    ].sort();
    regions.unshift("All");
    set({ countries, regions });
    get().setLoading(false);
  },
  setCountrySelected: (country) => {
    set({ countrySelected: country });
  },
  onClickBorderCountry: (borderCountry) => {
    const countries = get().countries;
    const countryClicked = countries.find(
      (country) => country.name === borderCountry
    );
    if (countryClicked) get().setCountrySelected(countryClicked);
  },
  setLoading: (isLoading) => set({ loading: isLoading }),
});

export default createCountriesSlice;
