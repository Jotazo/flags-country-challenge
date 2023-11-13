import { useState, useEffect } from "react";

import { getAllCountries } from "../services/countries";

import { Country } from "../interfaces";

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllCountries()
      .then((countries) => {
        setCountries(countries);
      })
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading };
};

export default useCountries;
