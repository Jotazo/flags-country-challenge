import { create } from "zustand";
import { Country } from "../interfaces";
import { getAllCountries } from "../services/countries";

interface AppState {
  countries: Country[];
  countrySelected: Country | null;
  regions: string[];
  searchField: string;
  regionFilter: string;
  getCountries: () => Promise<void>;
  setRegionFilterSelected: (region: string) => void;
}

// TODO: Handle Loading/Error state fetching
const useAppStore = create<AppState>()((set) => ({
  countries: [],
  countrySelected: null,
  regions: [],
  searchField: "",
  regionFilter: "",
  getCountries: async () => {
    const countries = await getAllCountries();
    const regions = [
      ...new Set(countries.map((country) => country.region)),
    ].sort();
    set({ countries, regions });
  },
  setRegionFilterSelected: (region) => set({ regionFilter: region }),
}));

export default useAppStore;
