import { create } from "zustand";
import { Country } from "../interfaces";
import { getAllCountries } from "../services/countries";

interface AppState {
  countries: Country[];
  countrySelected: Country | null;
  searchField: string;
  regionFilter: string;
  getCountries: () => Promise<void>;
}

const useAppStore = create<AppState>()((set) => ({
  countries: [],
  countrySelected: null,
  searchField: "",
  regionFilter: "",
  getCountries: async () => {
    const countries = await getAllCountries();
    set({ countries });
  },
}));

export default useAppStore;
