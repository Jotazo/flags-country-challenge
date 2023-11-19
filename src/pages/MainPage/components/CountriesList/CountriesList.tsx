import { AnimatePresence, motion } from "framer-motion";

import useAppStore from "../../../../store/useAppStore";

import { filterCountries } from "../../../../utils/filterCountries";

import CountryListItem from "./CountryListItem";

const CountriesList = () => {
  const countries = useAppStore((state) => state.countries);
  const searchField = useAppStore((state) => state.searchField);
  const regionFilter = useAppStore((state) => state.regionFilter);

  const countriesToShow = filterCountries(countries, {
    regionFilter,
    searchField,
  });

  if (countriesToShow.length === 0)
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="dark:text-white font-semibold text-5xl text-center mt-8"
      >
        No countries founded...
      </motion.h1>
    );

  return (
    <ul className="grid gap-y-8 place-content-center place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      <AnimatePresence>
        {countriesToShow.map((country) => (
          <CountryListItem key={country.name} country={country} />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default CountriesList;
