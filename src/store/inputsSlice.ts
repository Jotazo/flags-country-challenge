import { StateCreator } from "zustand";

import { AppSlices, InputsSlice } from "./interfaces";

const createInputsSlice: StateCreator<AppSlices, [], [], InputsSlice> = (
  set
) => ({
  searchField: "",
  regionFilter: "All",
  setRegionFilterSelected: (region) => set({ regionFilter: region }),
  setSearchField: (e) => set({ searchField: e.target.value }),
});

export default createInputsSlice;
