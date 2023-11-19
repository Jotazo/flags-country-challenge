import { useEffect } from "react";

import useAppStore from "./store/useAppStore";

import Layout from "./layout/Layout";

import { DetailPage, MainPage } from "./pages";

import "./App.css";

function App() {
  const country = useAppStore((state) => state.countrySelected);
  const getCountries = useAppStore((state) => state.getCountries);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Layout>{country ? <DetailPage country={country} /> : <MainPage />}</Layout>
  );
}

export default App;
