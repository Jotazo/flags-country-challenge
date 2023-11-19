import { Country } from "../interfaces";

export interface CountriesSlice {
  countries: Country[];
  countrySelected: Country | null;
  regions: string[];
  getCountries: () => Promise<void>;
}

export interface InputsSlice {
  searchField: string;
  regionFilter: string;
  setRegionFilterSelected: (region: string) => void;
  setSearchField: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type AppSlices = CountriesSlice & InputsSlice;
