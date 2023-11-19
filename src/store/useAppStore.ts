import { create } from "zustand";

import { AppSlices } from "./interfaces";

import createCountriesSlice from "./countriesSlice";
import createInputsSlice from "./inputsSlice";

const useAppStore = create<AppSlices>()((...a) => ({
  ...createCountriesSlice(...a),
  ...createInputsSlice(...a),
}));

export default useAppStore;
