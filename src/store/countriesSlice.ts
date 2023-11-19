import { StateCreator } from "zustand";

import { getAllCountries } from "../services/countries";

import { AppSlices, CountriesSlice } from "./interfaces";

// TODO: Handle Loading/Error state fetching
const createCountriesSlice: StateCreator<AppSlices, [], [], CountriesSlice> = (
  set
) => ({
  countries: [],
  countrySelected: null,
  regions: [],
  getCountries: async () => {
    const countries = await getAllCountries();
    const regions = [
      ...new Set(countries.map((country) => country.region)),
    ].sort();
    regions.unshift("All");
    set({ countries, regions });
  },
});

export default createCountriesSlice;
