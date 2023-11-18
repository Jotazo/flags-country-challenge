import { useEffect, useState } from "react";

import { Country } from "./interfaces";

import { DetailPage, MainPage } from "./pages";
import Layout from "./layout/Layout";

import "./App.css";
import useAppStore from "./store/useAppStore";

function App() {
  const [country, setCountry] = useState<Country | null>(null);
  const getCountries = useAppStore((state) => state.getCountries);

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <Layout>{country ? <DetailPage country={country} /> : <MainPage />}</Layout>
  );
}

export default App;
