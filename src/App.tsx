import { useEffect, useState } from "react";

import useAppStore from "./store/useAppStore";

import { Country } from "./interfaces";

import Layout from "./layout/Layout";

import { DetailPage, MainPage } from "./pages";

import "./App.css";

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
